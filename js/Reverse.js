//Use a for loop
function reverseA(str) {
    let reversed = "";
    for(var i = str.length-1;i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}

//Use Built in Functions
function reverseB(str){
    return str.split("").reverse().join("");
}
//Use a substring to reverse
function reverseC(str){
    let reversed = "";
    for(var i = str.length;i>=0;i--){
        reversed += str.substring(i,i-1);
    }
    return reversed;
}

//Call and use it.
function revMe(){
    let revresed = "";
    var str = document.getElementById('value').value;
    reversed = reverseC(str)    
    document.getElementById('result').innerHTML = reversed;    
}


