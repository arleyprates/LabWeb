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
	var new_element_div = document.createElement("div");
	var new_element_paragrafo = document.createElement("p");
	var new_element_texto = document.createElement("p");

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
	
	//insertBefore


}