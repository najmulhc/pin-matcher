function getNumber(){
    const random = Math.round(Math.random()*10000);
    let str = random+"";
    if(str.length == 4){
        return random;
    }
    else{ 
       return getNumber();
    }
}

document.getElementById("generateBtn").addEventListener("click", function(){
    let number = getNumber();
    document.getElementById("generatedNumber").value = number;
});
const buttons =  document.getElementsByClassName("button");
const inputNumber = document.getElementById('inputNumber') ;
let input = "";
for(let button of buttons){
    button.addEventListener("click", function(){
        if(button.innerText == "C"){
            input = "";
        }
        else if (button.innerText == "<"){
          input = input.slice(0, -1);
        }
        else{
            input += button.innerText;
        }
         
         inputNumber.value = input;
    });
}
document.getElementById("submitBtn").addEventListener("click", function(){
    let remaining = document.getElementById("tryLeft");
    if(remaining.innerText < 1){
        this.innerText = 0;
    }
    else{
        remaining.innerText -= 1;
        const generated = document.getElementById("generatedNumber").value ;
        const input = document.getElementById('inputNumber');
        let left = document.getElementById("tryLeft").innerText;
        console.log(left);
        if(generated == input.value){
            document.getElementById("notMatched").style.display = "none";
            document.getElementById("matched").style.display = "block";
        }
        else{
            document.getElementById("notMatched").style.display = "block";
            document.getElementById("matched").style.display = "none";
        }
        document.getElementById('inputNumber').value = " ";
    } 
});