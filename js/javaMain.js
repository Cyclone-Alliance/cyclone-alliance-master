function openSidebar() {
	document.getElementById("mySidebar").style.display = "block";
	document.getElementById("myOverlay").style.display = "block";
}

function closeSidebar() {
	document.getElementById("mySidebar").style.display = "none";
	document.getElementById("myOverlay").style.display = "none";
}

function dropFunc(name1, name2, name3) {
	var x = document.getElementById(name1);
	var y = document.getElementById(name2);
	if (x.className.indexOf("w3-show") == -1) {
		x.className += " w3-show";
		x.previousElementSibling.className += " w3-none";
		y.innerHTML = name3 + " ▲";
	} else { 
		x.className = x.className.replace(" w3-show", "");
		x.previousElementSibling.className = 
		x.previousElementSibling.className.replace(" w3-green", "");
		y.innerHTML = name3 + " ▼";
	}
}

function openLink(evt, linkName) {
	var i, x, tablinks;
	x = document.getElementsByClassName("menu");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < x.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
	}	
	document.getElementById(linkName).style.display = "block";
	evt.currentTarget.firstElementChild.className += " w3-border-red";
}
			
function plusDivs(n) {
	showDivs(slideIndex += n);
}

function currentDiv(n) {
	showDivs(slideIndex = n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	if (n > x.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" w3-white", "");
	}
	x[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " w3-white";
}

function getTeamByNumber(num) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var teamsNums = JSON.parse(this.responseText);
			//document.getElementById("demo").innerHTML = myObj.name;
			for(var i = 0; i < teams.length; i++)
			{
				if(teams[i].team.number == num)
				{
					document.getElementById(num).innerHTML = teamsNums.name;
				}
			}
		}
	};
	xmlhttp.open("GET", "teams.txt", true);
	xmlhttp.send();
}