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
	var prefix = "https://www.kitomba.com/k1/clients_ajax/query/";
	var subfix = "/30/0/1/?exclude_casual=true";
	for(var x = 0; x < getArray().length; x++){
		for(var y = 0; y < 10; y++){
			link.push(prefix + getArray()[x] + "/" + y + subfix);
		}	
	}
	return link;
}


function getKid(){
	var flink = getFirstLink();
	var sperfix = "https://www.kitomba.com/k1/clients_ajax/get_customer_by_kid/79de97ed2d8871d5514ebff2ad6a6c52/";
	var ssubfix = "/true";
	var fkid = new Array();
	for(x in flink){
		try{
			var z =$.parseJSON($.ajax({url:flink[x],async:false}).responseText).results;
			for(var y in z){
				var keyword = sperfix+z[y].kid+ssubfix;
				if(fkid.indexOf(keyword)===-1){
					fkid.push(sperfix+z[y].kid+ssubfix);
				}
			}
		}catch(err){
		console.log(err);
		}
		console.log(x);
	}
	return fkid;
}

function getSecondLink(){
	var flink = getKid();
	var slink = new Array();
	for(var x in flink){
		$.getJSON(flink[x],function(re){
			console.log(re.data.first_name+ " " +re.data.last_name + ";" + re.data.gender + ";" +  re.data.birth_day + ";" +  re.data.birth_month + ";" +  re.data.birth_year + ";" +  re.data.email + ";" +  re.data.phone + ";" +  re.data.postal_code + ";" +  re.data.suburb + ";" +  re.data.street);
		});
		console.log(x);
	}
}