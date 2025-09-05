let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = ""; // store the result

let arr = Array.from(buttons); // for make the  all button 

arr.forEach(button => {
    button.addEventListener('click' ,(e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        // click AC and delete all number

        else if(e.target.innerHTML =='AC'){
            string = "";
            input.value = string
        }
        // delete button

        else if(e.target.innerHTML =='DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
            }

        
         else{
             // for print the number and operators in screen
        string += e.target.innerHTML;
        input.value = string;
        }
     
    })
})
