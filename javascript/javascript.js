  alert("Soma e Subtraia pontos");
	var cont = 0;

	function pontomais(){
		cont = cont + 1;
		document.getElementById('contador').value = cont;
	}

	function pontomenos(){
		if(cont >= 1){
		cont = cont - 1
		document.getElementById('contador').value= cont;
	}
	}

	function total(){
		alert(cont);

   	}
