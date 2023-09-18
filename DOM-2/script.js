document.querySelector("p").innerHTML="La variable está en " + false

const btn = document.getElementById("btn");

btn.addEventListener("click", 
changeParagraph);


function changeParagraph(){
    paragraph=document.querySelector("p");
    let ValorFalse= paragraph.innerHTML;
    if (ValorFalse=="La variable está en true"){
        paragraph.innerHTML="La variable está en false" ;
    }else{
        paragraph.innerHTML="La variable está en true" ;
    }   
}
