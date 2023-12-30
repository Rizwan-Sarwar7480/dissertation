let textGenerator = document.getElementById("text_generator");
if(textGenerator != null) {
    textGenerator.addEventListener("click", ()=> {
        let DataViewWrapper = document.querySelector(".generated-result-wrap");
        let UserInput = document.getElementById("user_input");
        let DataView = document.getElementById("generated-data");
        if(UserInput.value.trim() != "") {
            DataView.textContent = UserInput.value;
            DataViewWrapper.style.display = "block";
        }
        else {
            DataViewWrapper.style.display = "none";
        }
    });
}
