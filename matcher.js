let numberField     = document.getElementById('numberField');
let generateBtn     = document.getElementById('generateBtn');
let matcherField    = document.getElementById('matcherField');
let submit          = document.getElementById('submit');
let positiveNotify  = document.getElementById('positiveNotify');
let negativeNotify  = document.getElementById('negativeNotify');

positiveNotify.style.visibility = 'hidden';
negativeNotify.style.visibility = 'hidden';

//random number generator
generateBtn.addEventListener('click', () => {
    numberField.value = Math.floor(Math.random() * (9999 - 999) + 999);
})


//backspace
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}

//operators
let operators = document.querySelectorAll('.operator');
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', () => {
        if ( event.target.id == "clear" ) {
            matcherField.value = "";
        }else if(event.target.id=="backspace"){
			let output = reverseNumberFormat(matcherField.value).toString();
			if(output){//if output has a value
				output = output.substr(0,output.length-1);
				matcherField.value = output;
			}
		}
    })
    
}

//Input numbers
let numbers = document.querySelectorAll('.number');
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', () => {
        let output = matcherField.value;//document.getElementById('matcherField').value;
        if(output != NaN){
            output = output + event.target.id;
            matcherField.value = output;
        }
    })
}

//submit
submit.addEventListener('click', () => {
    if( numberField.value == matcherField.value && numberField.value != "" && matcherField.value != ""){
        positiveNotify.style.visibility = 'visible';
    }else if(numberField.value != matcherField.value && numberField.value != "" && matcherField.value != ""){
        negativeNotify.style.visibility = 'visible';
        matcherField.value ="";
    }
})

let dMhide = document.getElementById('dMhide');
dMhide.addEventListener('click', () => {
    negativeNotify.style.visibility = 'hidden';
})
let Mhide = document.getElementById('Mhide');
Mhide.addEventListener('click', () => {
    positiveNotify.style.visibility = 'hidden';
    numberField.value = "";
    matcherField.value = "";
})



