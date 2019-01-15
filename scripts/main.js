// Makes results appear when #search-form-submit button is clicked

const resultBox = document.getElementById("result-box") 
function showResult() {
	if (resultBox.style.display === "none") {
		resultBox.style.display = "block"
	} 
}