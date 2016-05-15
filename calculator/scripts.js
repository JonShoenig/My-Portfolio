function n(val) {
	document.getElementById("calculation").value+=val;
}
function c() {
	document.getElementById("calculation").value="";
}
function x(val) {
	document.getElementById("calculation").value=val;
}
function e() {
	try {
	x(eval(document.getElementById("calculation").value)) 
	}
	catch (e) {
		c()
	}
}
