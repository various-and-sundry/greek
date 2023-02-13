var articles = {};
articles[0]  = { word : "ὁ",      case: "Nomnative",	gender : "Masculine",	number : "Singular", id : "0" };
articles[1]  = { word : "τοῦ",  case: "Genative",	gender : "Masculine",	number : "Singular", id : "1" };
articles[2]  = { word : "τῷ",    case: "Dative",	gender : "Masculine",	number : "Singular", id : "2" };
articles[3]  = { word : "τόν",  case: "Accusative",	gender : "Masculine",	number : "Singular", id : "3" };
articles[4]  = { word : "ἡ",      case: "Nomnative",	gender : "Feminine",	number : "Singular", id : "4" };
articles[5]  = { word : "τῆς",   case: "Genative",	gender : "Feminine",	number : "Singular", id : "5" };
articles[6]  = { word : "τῇ",    case: "Dative",	gender : "Feminine",	number : "Singular", id : "6" };
articles[7]  = { word : "τήν",  case: "Accusative",	gender : "Feminine",	number : "Singular", id : "7" };
articles[8]  = { word : "τό",    case: "Nomnative",	gender : "Neuter",	number : "Singular", id : "8" };
articles[9]  = { word : "τοῦ",  case: "Genative",	gender : "Neuter",	number : "Singular", id : "9" };
articles[10] = { word : "τῷ",    case: "Dative",	gender : "Neuter",	number : "Singular", id : "10" };
articles[11] = { word : "τό",    case: "Accusative",	gender : "Neuter",	number : "Singular", id : "11" };
articles[12] = { word : "οἱ",    case: "Nomnative",	gender : "Masculine",	number : "Plural",   id : "12" };
articles[13] = { word : "τῶν",  case: "Genative",	gender : "Masculine",	number : "Plural",   id : "13" };
articles[14] = { word : "τοῖς", case: "Dative",	gender : "Masculine",	number : "Plural",   id : "14" };
articles[15] = { word : "τούς", case: "Accusative",	gender : "Masculine",	number : "Plural",   id : "15" };
articles[16] = { word : "αἱ",	  case: "Nomnative",	gender : "Feminine",	number : "Plural",   id : "16" };
articles[17] = { word : "τῶν ", case: "Genative",	gender : "Feminine",	number : "Plural",   id : "17" };
articles[18] = { word : "ταῖς", case: "Dative",	gender : "Feminine",	number : "Plural",   id : "18" };
articles[19] = { word : "τᾱ́ς",   case: "Accusative",	gender : "Feminine",	number : "Plural",   id : "19" };
articles[20] = { word : "τά",    case: "Nomnative",	gender : "Neuter",	number : "Plural",   id : "20" };
articles[21] = { word : "τῶν",  case: "Genative",	gender : "Neuter",	number : "Plural",   id : "21" };
articles[22] = { word : "τοῖς", case: "Dative",	gender : "Neuter",	number : "Plural",   id : "22" };
articles[23] = { word : "τά",    case: "Accusative",	gender : "Neuter",	number : "Plural",   id : "23" };

var answerButton = {};
answerButton[0] = document.getElementById("answerButton0");
answerButton[1] = document.getElementById("answerButton1");
answerButton[2] = document.getElementById("answerButton2");
answerButton[3] = document.getElementById("answerButton3");

var currentlySelectedArticle;

function nextQuestion() {
	currentlySelectedArticle = getRandomArticle();

	setupAnswerButtons(currentlySelectedArticle);

	document.getElementById("default").innerHTML = currentlySelectedArticle.case + " " +
						       currentlySelectedArticle.gender + " " +
						       currentlySelectedArticle.number + " Article";
}

function getRandomArticle() {
	index = Math.floor(Math.random() * 24);

	return articles[index];
}

function setupAnswerButtons(correctAnswer) {
	// Make all answer buttons gray
	for(let i = 0; i < 4; i++) {
		answerButton[i].style.backgroundColor="lightgrey";
	}

	// Get the indices of four random articles
	answerIDs = getFourRandomIndices(correctAnswer);

	// Assign the random articles to the buttons
	for(let i = 0; i < 4; i++) {
		answerButton[i].innerHTML = articles[answerIDs[i]].word;
	}

	// Replace one random answer with the correct one
	answerButton[Math.floor(Math.random() * 3)].innerHTML = correctAnswer.word;
}

	// Return an array of four random article indices, which do not repeat or match the correct answer's index
function getFourRandomIndices(correctAnswer) {
	indices = {};

	for(let i = 0; i < 4; i++) {
		// Generate one random index
		indices[i] = getRandomArticle().id;

		// If the chosen index matches that of the correct answer, try again
		if(indices[i] == correctAnswer.id) {
			i--;

		}

		// If the chosen index has already been listed, try again
		for(let j = 0; j < i; j++) {
			if(articles[indices[j]].word == articles[indices[i]].word) {
				i--;
			}
		}
	}

	return(indices);
}

function answerSelectionAction(answerNumber) {
	if(currentlySelectedArticle.word == answerButton[answerNumber].innerHTML) {
		answerButton[answerNumber].style.backgroundColor="green";
	} else {
		answerButton[answerNumber].style.backgroundColor="red";
	}
}

window.onload = nextQuestion();
