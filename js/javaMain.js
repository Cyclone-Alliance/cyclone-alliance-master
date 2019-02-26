const teamData = [
	{
		name: "Supernova",
		number: "136S",
		region: "Texas"
	},
	{
		name: "OPS - Nebraska Nerd Herd",
		number: "1064A",
		region: "Nebraska"
	},
	{
		name: "SFHS Eaglebots Z",
		number: "1961Z",
		region: "Georgia"
	},
	{
		name: "Apex",
		number: "2019F",
		region: "Texas"
	},
	{
		name: "Team Control Freaks",
		number: "3116A",
		region: "UK"
	},
	{
		name: "Team Control Freaks",
		number: "3116S",
		region: "UK"
	},
	{
		name: "Anomaly",
		number: "6671X",
		region: "California"
	},
	{
		name: "Fired Up!",
		number: "7110A",
		region: "Texas"
	},
	{
		name: "Fired Up!",
		number: "7110F",
		region: "Texas"
	},
	{
		name: "Fired Up!",
		number: "7110Z",
		region: "Texas"
	},
	{
		name: "Steel Pheonixes",
		number: "8110C",
		region: "Minnesota",
		bio: "",
		awards2019: ["Minnesota State Champion","Tournament Champion x3","Design Award x2", "Amaze Award"]
	},
	{
		name: "Knights",
		number: "8110R",
		region: "Minnesota",
		bio: "",
		awards2019: ["Minnesota State Finalist","Minnesota State Skills Champion","Excellence Award x5","Tournament Champion x3","Robot Skills Champion x3","Robot Skills Finalist","Design Award x3", "Community Award"]
	},
	{
		name: "SharkBots",
		number: "20164X",
		region: "Virginia"
	},
	{
		name: "H.Y.B.R.I.D.",
		number: "20785A",
		region: "UK"
	},
	{
		name: "Uncharted",
		number: "25461Z",
		region: "Texas",
		bio: "",
		awards2019: ["North Texas State Finalist","North Texas State Skills Finalist","Excellence Award x3","Tournament Champion x6","Robot Skills Champion x6","Robot Skills Finalist x4","Design Award x2","Judges Award x2"]
	},
	{
		name: "Allumination Robotics",
		number: "26982E",
		region: "Texas"
	},
	{
		name: "Meme Machine",
		number: "40500M",
		region: "Oklahoma"
	},
	{
		name: "	TBC",
		number: "66618Z",
		region: "UK"
	}
];

var pageId = -1;
var teamInfoPage = window.location.href.substring(132);
/*for(var i = 0; i<teamData.length; i++){
	if(teamData[i].number.toString().indexOf(teamInfoPage) != -1){
		pageIdThing = i;
		break;
	}
}*/


function awardDisplay(awards){
	return `
		<h4><strong>Awards</strong></h4>
		<ul class=" w3-ul w3-card-4 w3-center w3-white" style="width:50%;margin:auto">
			${awards.map(award => `<li>${award}</li>`).join("")}
		</ul>
	`;
	//${team.awards2019 ? awardDisplay(team.awards2019) : ""}
}

/* ---> (teamNumber).html Template <---*/

if(pageId != -1){
	document.getElementById("teamInfo").innerHTML = `
		<h1><strong>${teamData[pageId].name} - ${teamData[pageId].number}</strong></h1>
	`;
}

/* ---> teams.html List Template <---*/

var targetRegion;

function teamTemplate(team){
	return `
		<a href="teams/teamInfo.html?${team.number}" class="teamDisplayed ${team.region}">
			<div class="teamDiv teamDisplayed ${team.region} w3-theme-d2 w3-hover-theme-l1 w3-card-4 3-animate-zoom">
				<h2>${team.name} - ${team.number}</h2>
			</div>
		</a>
	`;
}

function displayTeam(team){
	return `
		${team.region.indexOf(targetRegion.toString()) != -1 ? teamTemplate(team) : ""}
	`;
}

var regionsList = ["California","Georgia","Minnesota","Nebraska","Oklahoma","Texas","UK","Virginia"];

function startList(region){
	return `
	<h1 class="regionHeader ${region}">${region.indexOf("UK") != -1 ? "United Kingdom" : region}</h1>
	<script>${targetRegion = region}</script>
	${teamData.map(displayTeam).join("")}
	<br class="regionHeader ${region}">
	`;
}

if(pageId == -1){
	document.getElementById("teamDisplay").innerHTML = `
		${regionsList.map(startList).join("")}
	`;
}


/* ---> Sidebar Control <---*/

function displayState(region){
	displayedTeams = document.getElementsByClassName("teamDiv");
	for(var i = 0; i < displayedTeams.length; i++){
		if(displayedTeams[i].className.indexOf(region.toString()) == -1){
			displayedTeams[i].style.display = "none";
		}else{
			displayedTeams[i].style.display = "block";
		}
	}
	regionHeading = document.getElementsByClassName("regionHeader");
	for(var i = 0; i < displayedTeams.length; i++){
		if(regionHeading[i].className.indexOf(region.toString()) == -1){
			regionHeading[i].style.display = "none";
		}else{
			regionHeading[i].style.display = "block";
		}
	}
	closeSidebar();
}

function displayAll()
{
	displayedTeams = document.getElementsByClassName("teamDiv");
	for(var i = 0; i < displayedTeams.length; i++){
			displayedTeams[i].style.display = "block";
	}
	regionHeading = document.getElementsByClassName("regionHeader");
	for(var i = 0; i < displayedTeams.length; i++){
			regionHeading[i].style.display = "block";
	}
	closeSidebar();
}

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
