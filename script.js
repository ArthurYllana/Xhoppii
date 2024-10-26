//FUNÇÃO PARA TROCAR AS IMAGENS DOS PRODUTOS------------------------------------------------------------------------------------
function TrocarImg(opcao){
    // - Trocar Modelos de camiseta
    if(opcao.id == "produto1" | opcao.id == "btnModeloPreto"){
        document.getElementById("imgPrincipal").src = "img/produto1.png";
        document.getElementById("precoProduto").innerHTML = "R$56,90";
        document.getElementById("qtdDisponivel").innerHTML = "171 peças dísponíveis";
    }
    else if(opcao.id == "produto2" | opcao.id == "btnModeloAzul" ){
        document.getElementById("imgPrincipal").src = "img/produto2.png";
        document.getElementById("precoProduto").innerHTML = "R$57,90";
        document.getElementById("qtdDisponivel").innerHTML = "100 peças dísponíveis";
    }
    else if(opcao.id == "produto3" | opcao.id == "btnModeloVerde"){
        document.getElementById("imgPrincipal").src = "img/produto3.png";
        document.getElementById("precoProduto").innerHTML = "R$58,90";
        document.getElementById("qtdDisponivel").innerHTML = "101 peças dísponíveis";
    }
    else if(opcao.id == "produto4" | opcao.id == "btnModeloCinza"){
        document.getElementById("imgPrincipal").src = "img/produto4.png";
        document.getElementById("precoProduto").innerHTML = "R$54,90";
        document.getElementById("qtdDisponivel").innerHTML = "200 peças dísponíveis";
    }
    else if(opcao.id =="produto5" | opcao.id == "btnModeloRosa"){
        document.getElementById("imgPrincipal").src = "img/produto5.png";
        document.getElementById("precoProduto").innerHTML = "R$59,90";
        document.getElementById("qtdDisponivel").innerHTML = "95 peças dísponíveis";
    }
}
// FUNÇÃO PARA TROCAR OS TAMANHOS DOS PRODUTOS----------------------------------------------------------------------------------
function TrocarTamanho(opcao){
    // - Trocar tamanho de camiseta
    if(opcao.id == "btnTamanhoP"){
        document.getElementById("tamanhoSelecionado").innerHTML = "Tamanho Selecionado: P";
    }
    else if(opcao.id == "btnTamanhoM"){
        document.getElementById("tamanhoSelecionado").innerHTML = "Tamanho Selecionado: M";
    }
    else if(opcao.id == "btnTamanhoG"){
        document.getElementById("tamanhoSelecionado").innerHTML = "Tamanho Selecionado: G";
    }
    else if(opcao.id == "btnTamanhoGG"){
        document.getElementById("tamanhoSelecionado").innerHTML = "Tamanho Selecionado: GG";
    }
}
    
// - FUNÇÃO PARA TROCAR O NOME DA IMAGEM-----------------------------------------------------------------------------------

const arquivoSelecionado = document.querySelector("#img-perfil");
arquivoSelecionado.addEventListener("change", function() {
    document.querySelector("#id-img-perfil").textContent = this.files[0].name;
});

//são o mesmo... são a mesma coisa