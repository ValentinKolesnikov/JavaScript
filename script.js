let str = '';

function getArray(string){
	let numberArray = [];
	for(let i=0;i<string.length;i++){
		if(isNaN(+string[i])===false && string[i] !==' '){
			let number='';
			for(var j=i;j<string.length;j++){
				if(isNaN(+string[j])===false && string[j] !==' '){
					number+=string[j];
				}else if(isNaN(+string[j])===true || string[j] ===' '){
					break;
				}

			}
			numberArray.push(+number);
			i=j;
		}
	}
	return numberArray;
}

let numbers = getArray(str);
console.log(numbers);

