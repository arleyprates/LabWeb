var i = 0;

function mostraOpcoes(i) {

	console.log("entrei!" + i);
	var x = document.getElementById(i);
	if (x.style.display == "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
	console.log(x);
}

function formDados() {

	var nome = document.getElementById('nome').value;
	var sobrenome = document.getElementById('sobrenome').value;
	var assunto = document.getElementById('assunto').value;
	var texto = document.getElementById('texto').value;

	/*	First modo  
	 *
	 *	var template = nome + " " + sobrenome + " " + assunto + " " + texto;
	 *	var destino = document.getElementById("list-resultados");
	 *	destino.innerHTML += template;
	*/

	var destino = document.getElementById("list-resultados");

	/* Second modo
	 *
	*/

	// elements to templat's form
	var new_element_div_button = document.createElement("div");
	var new_element_div = document.createElement("div");
	//new_element_div.setAttribute("div", "contato");

	var new_element_paragrafo = document.createElement("p");
	new_element_paragrafo.setAttribute("onclick", "mostraOpcoes("+i+")");
	
	var new_element_texto = document.createElement("p");
	new_element_texto.id = i++;
	new_element_texto.setAttribute("style", "display: block;");

	// textoNode with data's form
	var name = document.createTextNode(nome);
	var lastname = document.createTextNode(" " + sobrenome);
	var subject = document.createTextNode(" " + assunto);
	var text = document.createTextNode(texto);

	// append data's form in element's template
	new_element_paragrafo.appendChild(name);
	new_element_paragrafo.appendChild(lastname);
	new_element_paragrafo.appendChild(subject);
	new_element_texto.appendChild(text);
	new_element_div.appendChild(new_element_paragrafo);
	new_element_div.appendChild(new_element_texto);

	// append element's template with data's form in div main
	destino.appendChild(new_element_div);
	
	destino.getElementById

	//insertBefore


}