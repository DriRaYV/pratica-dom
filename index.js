let marca = "";
let nome = "";
let codigo = 0;
let preco = 0;
var arr = [];

var obj = { marca: marca, nome: nome, codigo: codigo, preco: preco };

const listaSeara = document.getElementById("lista-seara");
const listaSwift = document.getElementById("lista-swift");
const listaFriboi = document.getElementById("lista-friboi");

function addProduto() {
  const optionMarca = document.getElementById("marca").value;
  const nameProduto = document.getElementById("name").value;
  const codigoProduto = document.getElementById("number").value;
  const precoProduto = document.getElementById("preco").value;
  obj.marca = optionMarca;
  obj.nome = nameProduto;
  obj.preco = precoProduto;

  if (document.getElementById(`${codigoProduto}`) != null) {
    alert("O código já existe! Insira outro.");
  } else {
    obj.codigo = codigoProduto;
    let confirmacao = confirm("Deseja adicionar");
    if (obj.marca == "Seara") {
      if (confirmacao == true) {
        listaSeara.innerHTML += `<li id=${obj.codigo}>A marca é: ${obj.marca} O nome é: ${obj.nome} O código é:  ${obj.codigo} O preço é:  ${obj.preco}
          </li>`;
      }
    } else if (obj.marca == "Swift") {
      if (confirmacao == true) {
        listaSwift.innerHTML += `<li id=${obj.codigo}>A marca é: ${obj.marca} O nome é: ${obj.nome} O código é:  ${obj.codigo} O preço é:  ${obj.preco}
          </li>`;
      }
    } else if (obj.marca == "Friboi") {
      if (confirmacao == true) {
        listaFriboi.innerHTML += `<li id=${obj.codigo}>A marca é: ${obj.marca} O nome é: ${obj.nome} O código é:  ${obj.codigo} O preço é:  ${obj.preco}
          </li>`;
      }
    }
  }
}
function removeProduto() {
  const listaID = document.getElementById("codigo_remover").value;
  const liId = document.getElementById(`${listaID}`);

  let confirmacao = confirm("Deseja remover");
  if (obj.marca == "Seara") {
    if (confirmacao == true) {
      liId.remove();
    }
  } else if (obj.marca == "Friboi") {
    if (confirmacao == true) {
      liId.remove();
    }
  } else if (obj.marca == "Swift") {
    if (confirmacao == true) {
      liId.remove();
    }
  }
}
