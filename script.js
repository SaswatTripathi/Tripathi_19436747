
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email");
var fnamebox = document.getElementById("fnamebox");
var lnamebox = document.getElementById("lnamebox");
var emailbox = document.getElementById("emailbox");

fname.onblur = function(){
	if(fname.value==""){
		fnamebox.innerHTML = "Fill the Box";
	}else{
		fnamebox.innerHTML = "";
	}
}

lname.onblur = function(){
	if(lname.value==""){
		lnamebox.innerText = "Fill the Box";
	}else{
		lnamebox.innerText = "";
	}
}

email.onblur = function(){
	if(email.value==""){
		emailbox.innerHTML = "Fill the Box";
	}else{
		emailbox.innerHTML = "";
	}
}