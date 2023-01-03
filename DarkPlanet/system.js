var opacity = [0.5,0.5,0.6,0.7,0.8,0.6,0.5,0.7,0.6,0.7,0.5,0.6,0.6,0.7,0.6,0.7,0.6,0.6];
var duration = [19,18,23,16,22,24,14,24,17,22,13,22,8,8,11,21,10,23];
var trans = [[true,false,false,false], [false,true,true,true], [true,false,false,false], [false,true,false,true], [false,false,true,false], [true,false,false,false], [false,true,false,false], [true,false,false,false], [false,true,false,true], [false,false,true,false], [true,true,false,true], [false,true,true,true], [true,false,false,false], [true,false,false,false], [false,false,false,true], [false,false,true,false], [false,true,false,true], [false,false,false,true]];

(function(){
	for (var i = 1; i <= 18; i++) {
		let hasil1 = 20*i;
		let hasil2 = 300+(40*i);
		if (i>8) {
			hasil1 = 20*i;
			hasil2 = 300+(40*i);
		}
		document.getElementById('ast'+i).style.opacity = opacity[i-1];
		document.getElementById('ast'+i).style.left = "-"+hasil1+"px";
		document.getElementById('ast'+i).style.top = "-"+hasil1+"px";
		document.getElementById('ast'+i).style.width = hasil2+"px";
		document.getElementById('ast'+i).style.height = hasil2+"px";
		document.getElementById('ast'+i).style.border = "3px solid white"
		document.getElementById('ast'+i).style.animation = "ast "+duration[i-1]+"s linear infinite";
		let Left = trans[i-1][0] == true ? (document.getElementById('ast'+i).style.borderLeft = "3px solid transparent") : "none";
		let Right = trans[i-1][1] == true ? (document.getElementById('ast'+i).style.borderRight = "3px solid transparent") : "none";
		let Top = trans[i-1][2] == true ? (document.getElementById('ast'+i).style.borderTop = "3px solid transparent") : "none";
		let Bottom = trans[i-1][3] == true ? (document.getElementById('ast'+i).style.borderBottom = "3px solid transparent") : "none";
	}
})();
function buatAst() {
	const batuLuarAngkasa = document.createElement("b");
	batuLuarAngkasa.classList.add("batuLuarAngkasa");
	let node  = document.createTextNode(".");
	batuLuarAngkasa.appendChild(node);
	batuLuarAngkasa.style.top = Math.random() * 600 + "px";
	batuLuarAngkasa.style.animationDuration = Math.random() *4 + 8 +"s";
	batuLuarAngkasa.style.opacity = Math.random()+0.2;
	batuLuarAngkasa.style.fontSize = Math.random() *30 +25 +"px";
	batuLuarAngkasa.style.zIndex = 5;
	if (batuLuarAngkasa.style.opacity<0.8) {
		batuLuarAngkasa.style.zIndex = 1;
	}
	document.querySelector("body").appendChild(batuLuarAngkasa);
	setTimeout(() => {
		batuLuarAngkasa.remove();
	}, 20000);
}
var astero = setInterval(buatAst, 1000);