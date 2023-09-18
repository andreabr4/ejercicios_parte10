let esReverso = true
const btn = document.getElementById("btn");

btn.addEventListener("click", 
changeCard);


function changeCard(){
    
    if (esReverso == true){
        esReverso = false;
        document.getElementById("reverso").src="./anverso.jpg";
    }else{
        esReverso = true;
        document.getElementById("reverso").src="./reverso.png";
        }   
}


