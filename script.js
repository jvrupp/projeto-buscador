var input=document.getElementById("inputTXT")
var input2=document.getElementById("inputTXT2")
var input3=document.getElementById("inputTXT3")
var btn=document.getElementsByClassName("btn")[0]
var produtos=document.getElementById("produtos")
var produto=document.getElementsByClassName("produto")
var divProduto;
var decisaoFinal;

 



btn.addEventListener("click",pegaDados)
var produtosLista={
  carne:{
    hamburguer:{escolha1:"X-Tudo",escolha2:"X-Tudao",escolha3:"X-Tudinho"},
    janta:{escolha1:"File",escolha2:"Filezao",escolha3:"Filezinho"},
    assado:{escolha1:"isca",escolha2:"iscao",escolha3:"isquinha"},
  },
  frango:{
    hamburguer:{escolha1:"X-TudoF",escolha2:"X-Tudao",escolha3:"X-Tudinho"},
    janta:{escolha1:"File",escolha2:"Filezao",escolha3:"Filezinho"},
    assado:{escolha1:"isca",escolha2:"iscao",escolha3:"isquinha"},
  },
  peixe:{
    hamburguer:{escolha1:"X-TudoP",escolha2:"X-TudaoP",escolha3:"X-TudinhoP"},
    janta:{escolha1:"File",escolha2:"Filezao",escolha3:"Filezinho"},
    assado:{escolha1:"isca",escolha2:"iscao",escolha3:"isquinha"},
  },
};


function pegaDados(){
var v1=input.value
var v2=input2.value
var v3=input3.value
navegaPelosDados(v1,v2,v3)
mostraProduto()
}
function navegaPelosDados(v1,v2,v3){
primeiraEtapa=produtosLista[v1]
segundaEtapa=primeiraEtapa[v2]
terceiraEtapa=segundaEtapa[v3]
decisaoFinal=terceiraEtapa
console.log(decisaoFinal)
}


function removeItens(pai){
  while (pai.firstChild) {
  pai.removeChild(pai.firstChild);
}
}

function mostraProduto(){
var divProduto=document.createElement("div")
var divTitulo=document.createElement("div")
var txtTitulo=document.createElement("h1")
divProduto.classList.add("produto")
var txtTitulo=document.createTextNode(decisaoFinal)
divTitulo.appendChild(txtTitulo)
divProduto.appendChild(divTitulo)
var txtdiv=document.createTextNode("imagem")

divProduto.appendChild(txtdiv)
removeItens(produtos)
produtos.appendChild(divProduto)
  }
