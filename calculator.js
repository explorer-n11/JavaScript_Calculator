const answer = document.querySelector('.answer');

let first, second, result;

window.onload = () => {
const buttons = document.getElementsByClassName("button");
	if (buttons.length > 0) {
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].onclick = count(buttons[i]);
		}
	}
};

function count(button) {
	return function answerWrite() {

		if (parseInt(button.innerHTML, 10) || button.innerHTML == 0) { 
			if (answer.innerHTML === "0") {
				answer.innerHTML = button.innerHTML;
			} else {
				answer.innerHTML += button.innerHTML;
			}
		}

		switch (button.innerHTML) {
			case ("C"): 
				answer.innerHTML = 0;
				first = undefined;
				second = undefined;
				result = undefined;
				break;
			case ("+/-"): 
				answer.innerHTML = -answer.innerHTML; 
				break;
			case ("."): 
				if(answer.innerHTML.indexOf (".") === -1){
					answer.innerHTML += ".";
				} 
				break;
			case ("←"): 			
				answer.innerHTML = answer.innerHTML.slice(0,-1);
				if (answer.innerHTML.slice(-1) === "."){
					answer.innerHTML = answer.innerHTML.slice(0,-1);
				}
				if (answer.innerHTML.length<1){
					answer.innerHTML = 0;
				} 
				break;
			case ("+"): 
				first = answer.innerHTML+"+";
				answer.innerHTML = 0;
				break;
			case ("-"):
				first = answer.innerHTML+"-";
				answer.innerHTML = 0;
				break;
			case ("*"): 
				first = answer.innerHTML+"*";
				answer.innerHTML = 0; 
				break;
			case ("/"): 
				first = answer.innerHTML+"/";
				answer.innerHTML = 0; 
				break;
			case ("%"): 
				first = answer.innerHTML+"%";
				answer.innerHTML = 0; 
				break;
			case ("^"):
				first = answer.innerHTML+"^";
				answer.innerHTML = 0;
				break;
			case ("√"): 
				answer.innerHTML = Math.sqrt(parseInt(answer.innerHTML, 10)); 
				break;
			case ("="): 
				if (first){
					second = answer.innerHTML;
					switch (first.slice(-1)) 
					{
					case ("+"): result = parseInt(first, 10) + parseInt(second, 10); break;
					case ("-"): result = parseInt(first, 10) - parseInt(second, 10); break;
					case ("*"): result = parseInt(first, 10) * parseInt(second, 10); break;
					case ("/"): result = parseInt(first, 10) / parseInt(second, 10); break;
					case ("%"): result = parseInt(first, 10) * 100 / parseInt(second, 10); break;
					case ("^"): result = parseInt(first, 10) ** parseInt(second, 10); break;
					}
					answer.innerHTML = result;
				}
				first = undefined;
				second = undefined;
				result = undefined;
				break;
		}
	}
}