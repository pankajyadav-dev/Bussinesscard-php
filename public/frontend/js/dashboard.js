const iconElement = document.getElementById("user");
const dropdown = document.getElementById("user-dropdown");
const showQuestion = document.getElementById("show-question");
const questionAnswer = document.getElementById("question-answer");

iconElement.addEventListener("click", () => {
    dropdown.classList.remove("hidden");
})
dropdown.addEventListener("mouseenter", () => {
    dropdown.classList.remove("hidden");
})
dropdown.addEventListener("mouseleave", () => {
    dropdown.classList.add("hidden");
});
iconElement.addEventListener("click", () => {
    setTimeout(() => {
        if (!dropdown.matches(":hover")) {
            dropdown.classList.add("hidden");
        }
    }, 2000);
});

document.querySelectorAll("#show-question").forEach((showQuestion) => {
    showQuestion.addEventListener("click", () => {
        const questionAnswer = showQuestion.closest("div").nextElementSibling;

        if (showQuestion.classList.contains("fa-plus")) {
            questionAnswer.classList.remove("hidden");
            showQuestion.classList.remove("fa-plus");
            showQuestion.classList.add("fa-minus");
        } else {
            questionAnswer.classList.add("hidden");
            showQuestion.classList.remove("fa-minus");
            showQuestion.classList.add("fa-plus");
        }
    });
});
// showQuestion.addEventListener("click", () => {
//     if(showQuestion.classList.contains("fa-plus")){
//         questionAnswer.classList.remove("hidden");
//         showQuestion.classList.remove("fa-plus");
//         showQuestion.classList.add("fa-minus");
//     }else{
//         questionAnswer.classList.add("hidden");
//         showQuestion.classList.remove("fa-minus");
//         showQuestion.classList.add("fa-plus");
//     }
// });
