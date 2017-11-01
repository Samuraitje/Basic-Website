document.getElementById("Enter").onclick = enter
	function enter() {
		var user = document.getElementById("Username").value;
		var pass = document.getElementById("Password").value; 
		if(pass === "12345678" && /\d/.test(user)) {
			document.getElementById("codingImg").src = "Images/matrix.gif";
		}
		else {
			alert("The password is invalid or the username does not contain at least one digit.")} 		
	}
