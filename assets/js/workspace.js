let textGenerator = document.getElementById("text_generator");
if(textGenerator != null) {
    textGenerator.addEventListener("click", ()=> {
        let DataViewWrapper = document.querySelector(".generated-result-wrap");
        let UserInput = document.getElementById("user_input");
        let DataView = document.getElementById("generated-data");
        if(UserInput.value.trim() != "") {
            typeWritingEffect(UserInput, DataView)
            // DataView.textContent = UserInput.value;
            DataViewWrapper.style.display = "block";
            userInput.focus();
        }
        else {
            DataViewWrapper.style.display = "none";
            userInput.focus();
        }
    });
}

// type writing effects
const typeWritingEffect = (input, inputShow) => {
    if(inputShow.textContent != "") {
        inputShow.textContent = "";
        clearTimeout(typeWriter);
    }
    var i = 0;
    var txt = input.value;
    var speed = .5;
    function typeWriter() {
        if (i < txt.length) {
            inputShow.textContent += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter()
}

// sidebar toggler
let sidebarToggle = document.querySelector(".ToggleSidebarButton");
if(sidebarToggle != null) {
    sidebarToggle.addEventListener("click", (btn)=> {
        if(window.innerWidth < 769) {
            let workSpace = document.querySelector(".rs-workspace");
            let sidebar = document.querySelector(".rs-sidebar");
            let mainarea = document.querySelector(".rs-mainarea");
            if(workSpace.classList.contains("full_width")) {
                workSpace.classList.remove("full_width");
                sidebar.classList.remove("close");
                btn.currentTarget.classList.remove("open");
                btn.currentTarget.querySelector("span").textContent = "close sidebar";
                mainarea.classList.remove("mainareaLayer");
            }
            else {
                workSpace.classList.add("full_width");
                sidebar.classList.add("close");
                btn.currentTarget.classList.add("open");
                btn.currentTarget.querySelector("span").textContent = "Open sidebar"
                mainarea.classList.add("mainareaLayer");
            }
        }
        else {
            let workSpace = document.querySelector(".rs-workspace");
            let sidebar = document.querySelector(".rs-sidebar");
            if(workSpace.classList.contains("full_width")) {
                workSpace.classList.remove("full_width");
                sidebar.classList.remove("close");
                btn.currentTarget.classList.remove("open");
                btn.currentTarget.querySelector("span").textContent = "close sidebar"
            }
            else {
                workSpace.classList.add("full_width");
                sidebar.classList.add("close");
                btn.currentTarget.classList.add("open");
                btn.currentTarget.querySelector("span").textContent = "Open sidebar"
            }
        }
    })
}

let responsiveSidebarBtn = document.querySelector(".rs-sidebar-hide");
if(responsiveSidebarBtn != null) {
    responsiveSidebarBtn.addEventListener("click", ()=> {
        document.querySelector(".ToggleSidebarButton").click();
    })
}

// making filter
let userInput = document.getElementById("user_input");
if(userInput != null) {
    userInput.addEventListener("keyup", (input)=> {
        input.target.value.toUpperCase();
        var list_Wrapper = document.querySelector(".optionList-wrap");
        if(input.target.value.charAt(0) == "/") {
            list_Wrapper.classList.add("rs-list-option-show");
            var list = list_Wrapper.querySelectorAll("li");
            var local_list;
            for (var i = 0; i < list.length; i++) {
                local_list = list[i].children[0].textContent.toUpperCase();
                if (local_list.indexOf(input.target.value.toUpperCase()) > -1) {
                    list[i].style.display = "block";
                    // list[i].classList.add("optionVisible");
                } 
                else {
                    list[i].style.display = "none";
                    // list[i].classList.remove("optionVisible");
                }
            }
        }
        else {
            list_Wrapper.classList.remove("rs-list-option-show");
        }
    });
}

// adding tags
const addTag = (ele) => {    
    let list_wrapper = document.querySelector(".optionList-wrap");
    let userInput = document.getElementById("user_input");
    userInput.value = `"${ele.textContent}" `
    list_wrapper.classList.remove("rs-list-option-show");
    userInput.focus();
}