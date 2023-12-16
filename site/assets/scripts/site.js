
		function validaNumero(){
			chk_numero("nome");
			chk_numero("empresa");
			chk_numero("email");
		}

		function chk_numero(x){

var entrada=document.getElementById(x);
if(!isNaN(entrada.value) && entrada.value != ""){
alert("Algo diferente de um número. Digite apenas letras no campo " + entrada.id);
entrada.focus();
entrada.value="";}
}

function view(){
var ver = document.getElementById("outrocargo");
var cargo = document.getElementById("cargo");

if (cargo.value == "outro")
{ver.style.display="block";}
else{ver.style.display="none";}
}

function test(){
	validaNumero();
	validaSalario();
	validaBranco();
}


function validaSalario(){
	var salario = document.querySelector('input[name="salario"]:checked');
    
    if (salario && parseInt(salario.value) < 5500) {
      alert('Atenção: O salário informado está abaixo de R$5.500,00.');

    }
}


function validaBranco(){
	var campos = ['nome', 'empresa', 'email'];
    for (var i = 0; i < campos.length; i++) {
      var campoValor = document.getElementById(campos[i]).value.trim();
      if (campoValor === '') {
        alert('Erro: Preencha todos os campos obrigatórios.' + campos[i]);
        return false;

      }
	}
}

	
