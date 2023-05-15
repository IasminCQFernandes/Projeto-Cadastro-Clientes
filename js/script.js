
//abrir e fechar a aba cadastrar
function cadastrar() {
    var form = document.getElementById("cadastro-form");
    form.style.display = form.style.display === "none" ? "block" : "none";
  }

// Função para cadastrar o cliente
function salvo(event) {
  event.preventDefault();
    var name = document.getElementById('inputName').value;
    var email = document.getElementById('inputEmail').value;
    var tel = document.getElementById('inputTel').value;
    var city = document.getElementById('inputCity').value;


    document.getElementById('dados-nome').textContent = name;
    document.getElementById('dados-mail').textContent = email;
    document.getElementById('dados-tel').textContent = tel;
    document.getElementById('dados-city').textContent = city;

    document.getElementById("cadastro-form").style = "display:none;"
}

 function cancel(){
    document.getElementById("cadastro-form").style = "display:none;";
 }

 function edit(){
    document.getElementById("cadastro-form").style = "display:block;";
 }

 function remove(){
    document.getElementById('dados-nome').textContent = "-----";
    document.getElementById('dados-mail').textContent =  "-----";
    document.getElementById('dados-tel').textContent = "-----";
    document.getElementById('dados-city').textContent = "-----";
 }

