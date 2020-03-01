var body = document.body;
var headEl1 = document.createElement("h1");
var headEl2 = document.createElement("h2");
var checkBox = document.getElementById("checkBox");
var psswdbox = document.createElement("div");
var buttonEl = document.createElement("button");
var numberOfCharEl = document.getElementById("numberOfChar");


headEl1.textContent = 'Password Generator';
headEl2.textContent = 'Generate your own personal password';
buttonEl.innerHTML = 'Generate';

//Display the elements
body.appendChild(headEl1);
body.appendChild(headEl2);
body.appendChild(numberOfCharEl);
body.appendChild(checkBox);
body.appendChild(psswdbox);
body.appendChild(buttonEl);

//css styling the page
headEl1.setAttribute("style", "text-align:center; font-family:Courier New; color: white; text-decoration:underline");
headEl2.setAttribute("style","text-align:center; font-family:Courier New; color: white; margin:30px");
body.setAttribute("style", "background-image:url(images/webb-dark/webb-dark.png)");
psswdbox.setAttribute("style", "color: black; background-color: white; padding:80px; text-align:center; margin:60px; border:solid; border-radius:5px");
buttonEl.setAttribute("style", "margin-left:47%; padding:20px; background-color:#4aaaa5; border:none; color:white");
checkBox.setAttribute("style", "color:white; text-align:center; line-height:200%");
numberOfCharEl.setAttribute("style", "color:white; text-align:center;");

//setting up the functions
var forLowercaseEl = document.getElementById("lowerCase");
var forUppercaseEl = document.getElementById("upperCase");
var forNumbersEl = document.getElementById("numbers");
var forSpecialCharEl = document.getElementById("specialChar");
var allLowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var allUppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var allNumbers = ['1','2','3','4','5','6','7','8','9'];
var allSpecialChar = ['!','@','#','$','%','&','*','_','-'];
var noneSelect = ('Please select a checkbox.');

buttonEl.addEventListener('click', function(event) {
    event.preventDefault();

    



    var numChar = Number( document.querySelector('#numberOfChars').value );
    var lower = document.querySelector('#lowerCase').checked;
    var upper = document.querySelector('#upperCase').checked;
    var numbers = document.querySelector('#numbers').checked;
    var specialC = document.querySelector('#specialChar').checked;

  
    
    var randomGen = [];
    var password = [];
   
  
    
    if(lower === true){
        for(let i = 0; i <= allLowercase.length; i++){
            randomGen.push( allLowercase[i] )
        }
    } 
    
    if(upper === true){
        for(let i = 0; i <= allUppercase.length; i++){
            randomGen.push( allUppercase[i] )
        }
    } 
        

    if(numbers === true){
        for(let i = 0; i <= allNumbers.length; i++){
            randomGen.push( allNumbers[i] )
        }
    }
  
    if(specialC === true){
        for(let i = 0; i <= allSpecialChar.length; i++){
            randomGen.push( allSpecialChar[i] )
        }
    } 

    //console.log(lower, upper, number, specialC)
    if (lower == false && upper == false && numbers == false && specialC == false) {
        alert(noneSelect);
    }
        
        
    
    

   
    for (let i = 0; i <= numChar; i++){
       password.push(randomGen[Math.floor(Math.random() * randomGen.length)])
    }

   


    //console.log(password)
    psswdbox.textContent = password.join("");
})
