 //storing id to a variable named screen
var screen = document.getElementById('screen'); 
var firstscreen = document.getElementById('second');

//for enter key
const keyBoard = document.querySelector('.keyboard');
keyBoard.addEventListener('keypress', e => {
if(e.keyCode == 13){
    finalresult();
    e.preventDefault();  
}
if(e.key == '='){   
    finalresult();
    e.preventDefault();
}
if(e.key == "Escape" || e.keyCode == 27 || e.which == 27){  //Not working
    clearscreen();
}
});

//function for ignoring alphabets and unwanted symbols
function numberinput(evt){
  var ch = String.fromCharCode(evt.which);
if((/[a-zA-Z<>?":{}|~!@#$&_';,`= ]/.test(ch))) {
    evt.preventDefault();
  }
}

function btnclick(value) {
    screen.value += value;   
}

function clearscreen(){
    screen.value = "";   //assigns empty value
    screen.placeholder = 0;
}

function finalresult(){    
    try{
        firstscreen.innerHTML = screen.value;
        if(eval(screen.value) == null){
            alert('Enter a valid input!');
            screen.value = "Enter a valid input...!";
        }
        var res = eval(screen.value);  //eval is javascript inbuilt function
        clearscreen();
        screen.placeholder = res;

        const keybrd = document.querySelector('.keyboard');
        keybrd.addEventListener('keypress', e => {
        if(e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/' || e.key == '%'){
            screen.value = res + screen.value;
            res = '';        
        }
        res = '';
});

   } //closing of try block
    catch{
        screen.value = "Syntax Error...!";
        firstscreen.innerHTML = "&#x26A0; Please enter a valid input..!";
        firstscreen.style.color = "#fa0000";
    }
}

function backspace(){
    screen.value = screen.value.slice(0,-1);   //slice is a function used to delete element.
}
function div(){
    screen.value += '/';
}



