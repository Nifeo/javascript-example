var mon = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
var clanderYear = new Array(12);
var clander = new Array(100);

function setDay(f){
	for(var x=0; x<12; x++)
	if(x+1===1||x+1===3||x+1===5||x+1===7||x+1===8||x+1===10||x+1===12){
		clanderYear[x]=31;
	}else{
		clanderYear[x]=30;
	}
	if(!f){
		clanderYear[1]=28;
		console.log("not pass");
	} else{
		clanderYear[1]=29;
		console.log("pass");
	}
	return clanderYear;
}

function createYear(){
	var x = 0;
	var year = new Array(100);
	for(var xy = 2017; xy < 2117; xy++){
		year[x] = parseInt(xy);
		x++;
	}
	return year;
}

function createClander(){
	var year = createYear();
	var y = 0;
	var r = /^-?\d+$/;  ;
	for(x in year){
		if(!r.test(parseInt(x)/100)&&r.test(parseInt(x)/4)){
			clander[y] = setDay(true);
		}else{
			clander[y] = setDay(false);
		}
		y++;
	}
	return clander;
}