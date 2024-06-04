
function advinhar(){

    let resposta = document.getElementById("guess__flag").value.toLowerCase();

    let respostaTexto =  document.getElementById("answer");

    if (resposta == "russia"){
    respostaTexto.innerHTML = "resposta certa!" 
    } else{
    respostaTexto.innerHTML = "resposta incorreta!"   
    }
}

