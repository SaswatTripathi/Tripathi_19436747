
var fname = document.getElementById("fname");//getting element having id fname
var lname = document.getElementById("lname");//getting element having id lname
var email = document.getElementById("email");//getting element having id email
var fnamebox = document.getElementById("fnamebox");//getting element having id fnamebox
var lnamebox = document.getElementById("lnamebox");//getting element having id lnamebox
var emailbox = document.getElementById("emailbox");//getting element having id emailbox

fname.onblur = function(){
	if(fname.value==""){
		fnamebox.innerHTML = "This field is empty";//if the field in id fname is clicked and left empty this message is shown by activating id fnamebox
	}else{
		fnamebox.innerHTML = "";//else nothing is shown
	}
}

lname.onblur = function(){
	if(lname.value==""){
		lnamebox.innerText = "This field is empty";//if the field in id lname is clicked and left empty this message is shown by activating id lnamebox
	}else{
		lnamebox.innerText = "";//else nothing is shown
	}
}

email.onblur = function(){
	if(email.value==""){
		emailbox.innerHTML = "This field is empty";//if the field in id email is clicked and left empty this message is shown by activating id emailbox
	}else{
		emailbox.innerHTML = "";//else nothing is shown
	}
}