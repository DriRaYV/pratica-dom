var obj = { marca: "", nome: "", codigo: 0, preco: 0 };

const listaSeara = document.getElementById("lista-seara");
const listaSwift = document.getElementById("lista-swift");
const listaFriboi = document.getElementById("lista-friboi");

function addProduto() {
  const optionMarca = document.getElementById("marca");
  const nameProduto = document.getElementById("name");
  const codigoProduto = document.getElementById("number");
  const precoProduto = document.getElementById("preco");
  obj.marca = optionMarca.value;
  obj.nome = nameProduto.value;
  obj.preco = precoProduto.value;

  if (document.getElementById(`${codigoProduto.value}`) != null) {
    alert("O código já existe! Insira outro.");
  } else {
    obj.codigo = codigoProduto.value;
    let confirmacao = confirm("Deseja adicionar");
    if (confirmacao == true) {
      if (obj.marca == "Seara") {
        listaSeara.innerHTML += `<li id=${obj.codigo}>A marca é: ${obj.marca} O nome é: ${obj.nome} O código é:  ${obj.codigo} O preço é:  ${obj.preco}
          </li>`;
      } else if (obj.marca == "Swift") {
        listaSwift.innerHTML += `<li id=${obj.codigo}>A marca é: ${obj.marca} O nome é: ${obj.nome} O código é:  ${obj.codigo} O preço é:  ${obj.preco}
          </li>`;
      } else if (obj.marca == "Friboi") {
        listaFriboi.innerHTML += `<li id=${obj.codigo}>A marca é: ${obj.marca} O nome é: ${obj.nome} O código é:  ${obj.codigo} O preço é:  ${obj.preco}
          </li>`;
      }
    }
    optionMarca.value = null;
    nameProduto.value = null;
    codigoProduto.value = null;
    precoProduto.value = null;
  }
}
function removeProduto() {
  const listaID = document.getElementById("codigo_remover").value;
  const liId = document.getElementById(`${listaID}`);

  let confirmacao = confirm("Deseja remover");
  if (confirmacao == true) {
    if (obj.marca == "Seara") {
      if (liId == null) {
        alert("Não existe!");
      } else {
        liId.remove();
      }
    } else if (obj.marca == "Friboi") {
      if (liId == null) {
        alert("Não existe!");
      } else {
        liId.remove();
      }
    } else if (obj.marca == "Swift") {
      if (liId == null) {
        alert("Não existe!");
      } else {
        liId.remove();
      }
    }
  }
}
