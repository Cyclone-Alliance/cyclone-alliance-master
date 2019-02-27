const teamData = [
	{
		name: "Supernova",
		number: "136S",
		region: "Texas",
		bio: "",
		location: "Richardson, Texas",
		awards2019: ["Tournament Finalist","Robot Skills Finalist","Judges Award","Amaze Award"]
	},
	{
		name: "OPS Nebraska Nerd Herd",
		number: "1064A",
		region: "Nebraska",
		bio: "",
		location: "Omaha, Nebraska",
		awards2019: [`<strong>Excellence Award</strong>`]
	},
	{
		name: "SFHS Eaglebots Z",
		number: "1961Z",
		region: "Georgia",
		bio: "",
		location: "Cumming, Texas",
		awards2019: ["Tournament Finalist x2"]
	},
	{
		name: "Apex",
		number: "2019F",
		region: "Texas",
		bio: "",
		location: "Flowermound, Texas",
		awards2019: [`<strong>Excellence Award</strong>`,`<strong>Tournament Champion</strong>`,"Tournament Finalist",`<strong>Robot Skills Champion</strong>`,"Design Award","Think Award x2","Amaze Award x2"],
		tournamentsWon: 1
	},
	{
		name: "Team Control Freaks",
		number: "3116A",
		region: "UK",
		bio: "",
		location: "Hoddesdon, United Kingdom",
		awards2019: [`<strong>Tournament Champion x5</strong>`,"Tournament Finalist x2",`<strong>Robot Skills Champion</strong>`,"Design Award x3","Judges Award"],
		tournamentsWon: 5
	},
	{
		name: "Team Control Freaks",
		number: "3116S",
		region: "UK",
		bio: "",
		location: "Hoddesdon, United Kingdom",
		awards2019: [`<strong>Tournament Champion x2</strong>`, "Tournament Finalist"],
		tournamentsWon: 2
	},
	{
		name: "Anomaly",
		number: "6671X",
		region: "California",
		bio: "",
		location: "Sherman Oaks, California",
		awards2019: [`<strong>Excellence Award</strong>`,`<strong>Tournament Champion</strong>`,"Tournament Finalist x3"],
		tournamentsWon: 1
	},
	{
		name: "Fired Up!",
		number: "7110A",
		region: "Texas",
		bio: "",
		location: "Southlake, Texas",
		awards2019: ["Tournament Finalist","Design Award x2","Judges Award"]
	},
	{
		name: "Fired Up!",
		number: "7110F",
		region: "Texas",
		bio: "",
		location: "Southlake, Texas",
		awards2019: [`<strong>Tournament Champion</strong>`,"Robot Skills Finalist","Design Award"],
		tournamentsWon: 1
	},
	{
		name: "Fired Up!",
		number: "7110Z",
		region: "Texas",
		bio: "",
		location: "Southlake, Texas",
		awards2019: [`<strong>Excellence Award</strong>`,`<strong>Tournament Champion x3</strong>`,`<strong>Robot Skills Champion</strong>`,"Robot Skills Finalist","Design Award x2","Innovate Award","Energy Award"],
		tournamentsWon: 3
	},
	{
		name: "Steel Pheonixes",
		number: "8110C",
		region: "Minnesota",
		bio: "",
		location: "Mankato, Minnesota",
		awards2019: [`<strong>Minnesota State Champion</strong>`,`<strong>Tournament Champion x3</strong>`,"Design Award x2", "Amaze Award"],
		tournamentsWon: 4
	},
	{
		name: "Knights",
		number: "8110R",
		region: "Minnesota",
		bio: "",
		location: "Mankato, Minnesota",
		awards2019: [`<strong>Minnesota State Finalist</strong>`,`<strong>Minnesota State Skills Champion</strong>`,`<strong>Excellence Award x5</strong>`,`<strong>Tournament Champion x3</strong>`,`<strong>Robot Skills Champion x3</strong>`,"Robot Skills Finalist","Design Award x3", "Community Award"],
		tournamentsWon: 3
	},
	{
		name: "	Betaversion 3.0",
		number: "9457B",
		region: "Minnesota",
		bio: "",
		location: "Mankato, Minnesota",
		awards2019: [`<strong>Minnesota State Champion</strong>`,`<strong>Excellence Award</strong>`,`<strong>Tournament Champion x2</strong>`,`<strong>Robot Skills Champion x2</strong>`,"Robot Skills Finalist","Build Award"],
		tournamentsWon: 3
	},
	{
		name: "SharkBots",
		number: "20164X",
		region: "Virginia",
		bio: "",
		location: "Manassas, Virginia",
		awards2019: [`<strong>Excellence Award</strong>`,`<strong>Tournament Champion</strong>`,`<strong>Robot Skills Champion</strong>`,"Robot Skills Finalist",],
		tournamentsWon: 1
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
		location: "Fate, Texas",
		awards2019: [`<strong>North Texas State Finalist</strong>`,`<strong>North Texas State Skills Finalist</strong>`,`<strong>Excellence Award x3</strong>`,`<strong>Tournament Champion x6</strong>`,`<strong>Robot Skills Champion x6</strong>`,"Robot Skills Finalist x4","Design Award x2","Judges Award x2"],
		tournamentsWon: 6
	},
	{
		name: "Allumination Robotics",
		number: "26982E",
		region: "Texas",
		bio: "",
		location: "Boerne, Texas",
		awards2019: [`<strong>Excellence Award</strong>`,`<strong>Tournament Champion x2</strong>`,"Tournament Finalist","Robot Skills Finalist x2",],
		tournamentsWon: 2
	},
	{
		name: "Meme Machine",
		number: "40500M",
		region: "Oklahoma",
		bio: "",
		location: "Edmond, Oklahoma",
		awards2019: [`<strong>Tournament Champion</strong>`,"Robot Skills Finalist","Sportsmanship Award",],
		tournamentsWon: 1
	},
	{
		name: "	TBC",
		number: "66618Z",
		region: "UK",
		bio: "",
		location: "Solihull, United Kingdom",
		awards2019: [`<strong>Tournament Champion x3</strong>`,"Tournament Finalist",],
		tournamentsWon: 1
	}
];

var pageId = -1;
//var teamInfoPage = window.location.href.substring(51);
var teamInfoPage = window.location.href.substring(132);
if(window.location.href.indexOf("teamInfo") != -1){
	for(var i = 0; i<teamData.length; i++){
		if(teamData[i].number.indexOf(teamInfoPage) == 0){
			pageId = i;
			break;
		}
	}
}

var regionsList = ["California","Georgia","Minnesota","Nebraska","Oklahoma","Texas","UK","Virginia"];
var tournamentChampCount = 0;
for(var i =0; i<teamData.length; i++){
	if(teamData[i].tournamentsWon){
		tournamentChampCount += teamData[i].tournamentsWon;
	}
}


function awardDisplay(awards){
	return `
		<h4><strong>Awards</strong></h4>
		<ul class=" w3-ul w3-card-4 w3-center w3-white" style="width:50%;margin:auto">
			${awards.map(award => `<li>${award}</li>`).join("")}
		</ul>
	`;
	//
}

/* ---> (teamNumber).html Template <---*/

if(pageId != -1){
	document.title = "Cyclone Alliance - " + teamData[pageId].number;
	document.getElementById("teamInfo").innerHTML = `
		<h1><strong>${teamData[pageId].name} - ${teamData[pageId].number}</strong></h1>
		<br>
		${teamData[pageId].awards2019 ? awardDisplay(teamData[pageId].awards2019) : ""}
	`;
}

/* ---> teams.html List Template <---*/

var targetRegion;
var locationInfo = window.location.href.substring(123);
//var locationInfo = window.location.href.substring(42);

function teamTemplate(team){
	return `
		<a href="teams/teamInfo.html?${team.number}" class="teamDisplayed ${team.region}">
			<div class="teamDiv teamDisplayed ${team.region} w3-theme-d2 w3-hover-theme-l1 w3-card-4 w3-animate-zoom">
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
	if(locationInfo.indexOf("all") == -1){
		displayState(locationInfo);
	} else {
		displayAll();
    }
}


/* ---> Sidebar Control <---*/

function openSidebar() {
	document.getElementById("mySidebar").style.display = "block";
	document.getElementById("myOverlay").style.display = "block";
}

function closeSidebar() {
	document.getElementById("mySidebar").style.display = "none";
	document.getElementById("myOverlay").style.display = "none";
}

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
