var btn= document.getElementById("enviar");
var style= document.getElementById("style-js");

var a1= document.getElementById("a1");
var b1= document.getElementById("b1");
var c1= document.getElementById("c1");
var d1= document.getElementById("d1");
				
var a2= document.getElementById("a2");
var b2= document.getElementById("b2");
var c2= document.getElementById("c2");
var d2= document.getElementById("d2");
		
var a3= document.getElementById("a3");
var b3= document.getElementById("b3");
var c3= document.getElementById("c3");
var d3= document.getElementById("d3");
				
var a4= document.getElementById("a4");
var b4= document.getElementById("b4");
var c4= document.getElementById("c4");
var d4= document.getElementById("d4");
	
var a5= document.getElementById("a5");
var b5= document.getElementById("b5");
var c5= document.getElementById("c5");
var d5= document.getElementById("d5");
				
var a6= document.getElementById("a6");
var b6= document.getElementById("b6");
var c6= document.getElementById("c6");
var d6= document.getElementById("d6");
	
var a7= document.getElementById("a7");
var b7= document.getElementById("b7");
var c7= document.getElementById("c7");
var d7= document.getElementById("d7");
	
var a8= document.getElementById("a8");
var b8= document.getElementById("b8");
var c8= document.getElementById("c8");
var d8= document.getElementById("d8");

var a9= document.getElementById("a9");
var b9= document.getElementById("b9");
var c9= document.getElementById("c9");
var d9= document.getElementById("d9");

var a10= document.getElementById("a10");
var b10= document.getElementById("b10");
var c10= document.getElementById("c10");
var d10= document.getElementById("d10");

var pontos= 0;
var text= document.getElementById("texto");
var text2= document.getElementById("texto2")
var div= document.getElementById("style-js");
var img= document.getElementById("img");
		
function play(){

	if ((a1.checked == false) && (b1.checked == false) && (c1.checked == false) && (d1.checked == false) && (a2.checked == false) && (b2.checked == false) && (c2.checked == false) && (d2.checked == false) && (a3.checked == false) && (b3.checked == false) && (c3.checked == false) && (d3.checked == false) && (a4.checked == false) && (b4.checked == false) && (c4.checked == false) && (d4.checked == false) && (a5.checked == false) && (b5.checked == false) && (c5.checked == false) && (d5.checked == false) && (a6.checked == false) && (b6.checked == false) && (c6.checked == false) && (d6.checked == false) && (a7.checked == false) && (b7.checked == false) && (c7.checked == false) && (d7.checked == false) && (a8.checked == false) && (b8.checked == false) && (c8.checked == false) && (d8.checked == false) && (a9.checked == false) && (b9.checked == false) && (c9.checked == false) && (d9.checked == false) && (a10.checked == false)&& (b10.checked == false)&& (c10.checked == false)&& (d10.checked == false)|| (a1.checked == false) && (b1.checked == false) && (c1.checked == false) && (d1.checked == false) || (a2.checked == false) && (b2.checked == false) && (c2 .checked == false) && (d2.checked == false) || (a3.checked == false) && (b3.checked == false) && (c3.checked == false) && (d3.checked == false) || (a4.checked == false) && (b4.checked == false) && (c4.checked == false) && (d4.checked == false) || (a5.checked == false) && (b5.checked == false) && (c5.checked == false) && (d5.checked == false) || (a6.checked == false) && (b6.checked == false) && (c6.checked == false) && (d6.checked == false) || (a7.checked == false) && (b7.checked == false) && (c7.checked == false) && (d7.checked == false) || (a8.checked == false) && (b8.checked == false) && (c8.checked == false) && (d8.checked == false) || (a9.checked == false) && (b9.checked == false) && (c9.checked == false) && (d9.checked == false) || (a10.checked == false)&& (b10.checked == false)&& (c10.checked == false)&& (d10.checked == false))
	{
		criar();
		text2.innerText= "Por favor, selecione uma Resposta em cada questão.";
	}else{

		//1
		if (a1.checked == true){
			b1.disabled = true;
			c1.disabled = true;
			d1.disabled = true;
			zr1.innerText=" Resposta Marcada: A ✖ \n";
		}
		if (b1.checked == true){
			pontos++;
			a1.disabled = true;
			c1.disabled = true;
			d1.disabled = true;
			zr1.innerText=" Resposta Marcada: B ✓ \n";
		}
		if (c1.checked == true){
			a1.disabled = true;
			b1.disabled = true;
			d1.disabled = true;
			zr1.innerText=" Resposta Marcada: C ✖ \n";
		}
		if (d1.checked == true){
			a1.disabled = true;
			b1.disabled = true;
			c1.disabled = true;
			zr1.innerText=" Resposta Marcada: D ✖ \n";
		}

		if(a1.checked || b1.checked || c1.checked || d1.checked){
			z1.innerText= "1- Resposta correta: B ✓";
		}

		//2
		if (a2.checked == true){
			b2.disabled = true;
			c2.disabled = true;
			d2.disabled = true;
			zr2.innerText=" Resposta Marcada: A ✖ \n";
		}
		if (b2.checked == true){
			a2.disabled = true;
			c2.disabled = true;
			d2.disabled = true;
			zr2.innerText=" Resposta Marcada: B ✖ \n";
		}
		if (c2.checked == true){
			pontos++;
			a2.disabled = true;
			b2.disabled = true;
			d2.disabled = true;
			zr2.innerText=" Resposta Marcada: C ✓ \n";
		}
		if (d2.checked == true){
			a2.disabled = true;
			b2.disabled = true;
			c2.disabled = true;
			zr2.innerText=" Resposta Marcada: D ✖ \n";
		}

		if(a2.checked || b2.checked || c2.checked || d2.checked){
			z2.innerText= "2- Resposta correta: C ✓";
		}

		//3
		if (a3.checked == true){
			b3.disabled = true;
			c3.disabled = true;
			d3.disabled = true;
			zr3.innerText=" Resposta Marcada: A ✖ \n";
		}
		if (b3.checked == true){
			a3.disabled = true;
			c3.disabled = true;
			d3.disabled = true;
			zr3.innerText=" Resposta Marcada: B ✖ \n";
		}
		if (c3.checked == true){
			a3.disabled = true;
			b3.disabled = true;
			d3.disabled = true;
			zr3.innerText=" Resposta Marcada: C ✖ \n";
		}
		if (d3.checked == true){
			pontos++;
			a3.disabled = true;
			b3.disabled = true;
			c3.disabled = true;
			zr3.innerText=" Resposta Marcada: D ✓ \n";
		}

		if(a3.checked || b3.checked || c3.checked || d3.checked){
			z3.innerText= "3- Resposta correta: D ✓";
		}

		//4
		if (a4.checked == true){
			pontos++;
			b4.disabled = true;
			c4.disabled = true;
			d4.disabled = true;
			zr4.innerText=" Resposta Marcada: A ✓ \n";
		}
		if (b4.checked == true){
			a4.disabled = true;
			c4.disabled = true;
			d4.disabled = true;
			zr4.innerText=" Resposta Marcada: B ✖ \n";
		}
		if (c4.checked == true){
			a4.disabled = true;
			b4.disabled = true;
			d4.disabled = true;
			zr4.innerText=" Resposta Marcada: C ✖ \n";
		}
		if (d4.checked == true){
			a4.disabled = true;
			b4.disabled = true;
			c4.disabled = true;
			zr4.innerText=" Resposta Marcada: D ✖ \n";
		}

		if(a4.checked || b4.checked || c4.checked || d4.checked){
			z4.innerText= "4- Resposta correta: A ✓";
		}

		//5
		if (a5.checked == true){
			b5.disabled = true;
			c5.disabled = true;
			d5.disabled = true;
			zr5.innerText=" Resposta Marcada: A ✖ \n";
		}
		if (b5.checked == true){
			a5.disabled = true;
			c5.disabled = true;
			d5.disabled = true;
			zr5.innerText=" Resposta Marcada: B ✖ \n";
		}
		if (c5.checked == true){
			pontos++;
			a5.disabled = true;
			b5.disabled = true;
			d5.disabled = true;
			zr5.innerText=" Resposta Marcada: C ✓ \n";
		}
		if (d5.checked == true){
			a5.disabled = true;
			b5.disabled = true;
			c5.disabled = true;
			zr5.innerText=" Resposta Marcada: D ✖ \n";
		}

		if(a5.checked || b5.checked || c5.checked || d5.checked){
			z5.innerText= "5- Resposta correta: C ✓";
		}

		//6
		if (a6.checked == true){
			pontos++;
			b6.disabled = true;
			c6.disabled = true;
			d6.disabled = true;
			zr6.innerText=" Resposta Marcada: A ✓ \n";
		}
		if (b6.checked == true){
			a6.disabled = true;
			c6.disabled = true;
			d6.disabled = true;
			zr6.innerText=" Resposta Marcada: B ✖ \n";
		}
		if (c6.checked == true){
			a6.disabled = true;
			b6.disabled = true;
			d6.disabled = true;
			zr6.innerText=" Resposta Marcada: C ✖ \n";
		}
		if (d6.checked == true){
			a6.disabled = true;
			b6.disabled = true;
			c6.disabled = true;
			zr6.innerText=" Resposta Marcada: D ✖ \n";
		}

		if(a6.checked || b6.checked || c6.checked || d6.checked){
			z6.innerText= "6- Resposta correta: A ✓";
		}

		//7
		if (a7.checked == true){
			pontos++;
			b7.disabled = true;
			c7.disabled = true;
			d7.disabled = true;
			zr7.innerText=" Resposta Marcada: A ✓ \n";
		}
		if (b7.checked == true){
			a7.disabled = true;
			c7.disabled = true;
			d7.disabled = true;
			zr7.innerText=" Resposta Marcada: B ✖ \n";
		}
		if (c7.checked == true){
			a7.disabled = true;
			b7.disabled = true;
			d7.disabled = true;
			zr7.innerText=" Resposta Marcada: C ✖ \n";
		}
		if (d7.checked == true){
			a7.disabled = true;
			b7.disabled = true;
			c7.disabled = true;
			zr7.innerText=" Resposta Marcada: D ✖ \n";
		}

		if(a7.checked || b7.checked || c7.checked || d7.checked){
			z7.innerText= "7- Resposta correta: A ✓";
		}

		//8
		if (a8.checked == true){
			b8.disabled = true;
			c8.disabled = true;
			d8.disabled = true;
			zr8.innerText=" Resposta Marcada: A ✖ \n";
		}
		if (b8.checked == true){
			a8.disabled = true;
			c8.disabled = true;
			d8.disabled = true;
			zr8.innerText=" Resposta Marcada: B ✖ \n";
			}
		if (c8.checked == true){
			a8.disabled = true;
			b8.disabled = true;
			d8.disabled = true;
			zr8.innerText=" Resposta Marcada: C ✖ \n";
		}
		if (d8.checked == true){
			pontos++;
			a8.disabled = true;
			b8.disabled = true;
			c8.disabled = true;
			zr8.innerText=" Resposta Marcada: D ✓ \n";
		}

		if(a8.checked || b8.checked || c8.checked || d8.checked){
			z8.innerText= "8- Resposta correta: D ✓";
		}

		//9
		if (a9.checked == true){
			b9.disabled = true;
			c9.disabled = true;
			d9.disabled = true;
			zr9.innerText=" Resposta Marcada: A ✖ \n";
		}
		if (b9.checked == true){
			a9.disabled = true;
			c9.disabled = true;
			d9.disabled = true;
			zr9.innerText=" Resposta Marcada: B ✖ \n";
		}
		if (c9.checked == true){
			a9.disabled = true;
			b9.disabled = true;
			d9.disabled = true;
			zr9.innerText=" Resposta Marcada: C ✖ \n";
		}
		if (d9.checked == true){
			pontos++;
			a9.disabled = true;
			b9.disabled = true;
			c9.disabled = true;
			zr9.innerText=" Resposta Marcada: D ✓ \n";
		}

		if(a9.checked || b9.checked || c9.checked || d9.checked){
			z9.innerText= "9- Resposta correta: D ✓";
		}

		//10
		if (a10.checked == true){
			b10.disabled = true;
			c10.disabled = true;
			d10.disabled = true;
			zr10.innerText=" Resposta Marcada: A ✖ \n";
		}
		if (b10.checked == true){
			a10.disabled = true;
			c10.disabled = true;
			d10.disabled = true;
			zr10.innerText=" Resposta Marcada: B ✖ \n";
		}
		if (c10.checked == true){
			pontos++;
			a10.disabled = true;
			b10.disabled = true;
			d10.disabled = true;
			zr10.innerText=" Resposta Marcada: C ✓ \n";
		}
		if (d10.checked == true){
			a10.disabled = true;
			b10.disabled = true;
			c10.disabled = true;
			zr10.innerText=" Resposta Marcada: D ✖ \n";
		}

		if(a10.checked || b10.checked || c10.checked || d10.checked){
			z10.innerText= "10- Resposta correta: C ✓";
		}
		soma();
	}
}

var zr1= document.getElementById("zr1");
var zr2= document.getElementById("zr2");
var zr3= document.getElementById("zr3");
var zr4= document.getElementById("zr4");
var zr5= document.getElementById("zr5");
var zr6= document.getElementById("zr6");
var zr7= document.getElementById("zr7");
var zr8= document.getElementById("zr8");
var zr9= document.getElementById("zr9");
var zr10= document.getElementById("zr10");

function criar() {
	div.style.margin="0 0 10px";
	div.style.padding="40px";
	div.style.border="4px rgb(0, 255, 242) solid";
	div.style.background="rgba(0, 0, 0, 0.7)";
	div.style.textAlign="center";
}

function padding() {
	zr1.style.paddingBottom="10px";
	zr2.style.paddingBottom="10px";
	zr3.style.paddingBottom="10px";
	zr4.style.paddingBottom="10px";
	zr5.style.paddingBottom="10px";
	zr6.style.paddingBottom="10px";
	zr7.style.paddingBottom="10px";
	zr8.style.paddingBottom="10px";
	zr9.style.paddingBottom="10px";
	zr10.style.paddingBottom="10px";
}

function soma() {
	criar();
	padding();
	text.innerText= "Você acertou " + pontos + " de 10!";
	btn.disabled = true;

	if (pontos == 0) {
		text2.innerText="Poxa, você não acertou nenhuma !"
		img.src="imagens/triste.jpg";
	}
	if (pontos > 0 && pontos < 6) {
		text2.innerText= "Quase! Você é bom, treine mais um pouco."
		img.src= "imagens/quase.jpg";
	}
	if (pontos >= 6) {
		text2.innerText= "Uau! Você é Ótimo!"
		img.src= "imagens/ganhou.jpg";
		img.style.width="100%";
	}
}

btn.onclick= play;