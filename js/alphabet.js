var letters = {};
letters[0]  = { word : "Alpha",	UpperCase: "Α",	LowerCase : "α",	Pronunciation : "", id : "0" };
letters[1]  = { word : "Beta",		UpperCase: "Β",	LowerCase : "β",	Pronunciation : "", id : "1" };
letters[2]  = { word : "Gamma",	UpperCase: "Γ",	LowerCase : "γ",	Pronunciation : "", id : "2" };
letters[3]  = { word : "Delta",	UpperCase: "Δ",	LowerCase : "δ",	Pronunciation : "", id : "3" };
letters[4]  = { word : "Epsilon",	UpperCase: "Ε",	LowerCase : "ε",	Pronunciation : "", id : "4" };
letters[5]  = { word : "Zeta",		UpperCase: "Ζ",	LowerCase : "ζ",	Pronunciation : "", id : "5" };
letters[6]  = { word : "Eta",		UpperCase: "Η",	LowerCase : "η",	Pronunciation : "", id : "6" };
letters[7]  = { word : "Theta",	UpperCase: "Θ",	LowerCase : "θ",	Pronunciation : "", id : "7" };
letters[8]  = { word : "Iota",		UpperCase: "Ι",	LowerCase : "ι",	Pronunciation : "", id : "8" };
letters[9]  = { word : "Kappa",	UpperCase: "Κ",	LowerCase : "κ",	Pronunciation : "", id : "9" };
letters[10] = { word : "Lamda",	UpperCase: "Λ",	LowerCase : "λ",	Pronunciation : "", id : "10" };
letters[11] = { word : "Mu",		UpperCase: "Μ",	LowerCase : "μ",	Pronunciation : "", id : "11" };
letters[12] = { word : "Nu",		UpperCase: "Ν",	LowerCase : "ν",	Pronunciation : "", id : "12" };
letters[13] = { word : "Xi",		UpperCase: "Ξ",	LowerCase : "ξ",	Pronunciation : "", id : "13" };
letters[14] = { word : "Omicron",	UpperCase: "Ο",	LowerCase : "ο",	Pronunciation : "", id : "14" };
letters[15] = { word : "Pi",		UpperCase: "Π",	LowerCase : "π",	Pronunciation : "", id : "15" };
letters[16] = { word : "Rho",		UpperCase: "Ρ",	LowerCase : "ρ",	Pronunciation : "", id : "16" };
letters[17] = { word : "Sigma",	UpperCase: "Σ",	LowerCase : "σ or ς",	Pronunciation : "", id : "17" };
letters[18] = { word : "Tau",		UpperCase: "Τ",	LowerCase : "τ",	Pronunciation : "", id : "18" };
letters[19] = { word : "Upsilon",	UpperCase: "Υ",	LowerCase : "υ",	Pronunciation : "", id : "19" };
letters[20] = { word : "Phi",		UpperCase: "Φ",	LowerCase : "φ",	Pronunciation : "", id : "20" };
letters[21] = { word : "Chi",		UpperCase: "Χ",	LowerCase : "χ",	Pronunciation : "", id : "21" };
letters[22] = { word : "Psi",		UpperCase: "Ψ",	LowerCase : "ψ",	Pronunciation : "", id : "22" };
letters[23] = { word : "Omega",	UpperCase: "Ω",	LowerCase : "ω",	Pronunciation : "", id : "23" };

var answerButton = {};
answerButton[0] = document.getElementById("answerButton0");
answerButton[1] = document.getElementById("answerButton1");
answerButton[2] = document.getElementById("answerButton2");
answerButton[3] = document.getElementById("answerButton3");

var currentLetterIndex;

function nextQuestion() {
	currentLetterIndex = Math.floor(Math.random() * 24);

	setupAnswerButtons();

	if(Math.random() < 0.5) {
		document.getElementById("default").innerHTML = letters[currentLetterIndex].UpperCase;
	} else {
		document.getElementById("default").innerHTML = letters[currentLetterIndex].LowerCase;
	}
}

function setupAnswerButtons() {
	// Make all answer buttons gray
	for(let i = 0; i < 4; i++) {
		answerButton[i].style.backgroundColor="lightgrey";
	}

	// Get the indices of four random letters
	answerIDs = getFourRandomIndices();

	// Assign the random letters to the buttons
	for(let i = 0; i < 4; i++) {
		answerButton[i].innerHTML = letters[answerIDs[i]].word;
	}

	// Replace one random answer with the correct one
	answerButton[Math.floor(Math.random() * 3)].innerHTML = letters[currentLetterIndex].word;
}

// Return an array of four random article indices
function getFourRandomIndices(correctAnswer) {
	indices = {};

	for(let i = 0; i < 4; i++) {
		// Generate one random index
		indices[i] = Math.floor(Math.random() * 24);
	}

	return(indices);
}

function answerSelectionAction(answerNumber) {
	if(letters[currentLetterIndex].word == answerButton[answerNumber].innerHTML) {
		answerButton[answerNumber].style.backgroundColor="green";
	} else {
		answerButton[answerNumber].style.backgroundColor="red";
	}
}

window.onload = nextQuestion();
