const box = document.getElementsByClassName("box");
const inputNumber = document.getElementById("number");

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener('click', (event) => {
    let inputText = '';

    switch (event.target.innerHTML) {
      case 'C':
        break;
      case '=':
       inputText = eval(inputNumber.value);
       break;
    
      case '←':
        inputText = inputNumber.value.slice(0, inputNumber.value.length-1);
        break;
      default:
        inputText = `${inputNumber.value}${event.target.innerHTML}`;
        
    }
    inputNumber.value=inputText;

    // inputNumber.value = `${inputNumber.value}${event.target.innerHTML}`;
  });
}

// console.log(event.target.innerHTML);
