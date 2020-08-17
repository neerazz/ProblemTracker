//  Sources: https://github.com/LorenzoBe/LeetPlug/blob/9d9e30f02765ae7d5d7a19a7e56506561278f07a/extension/src/problemsScript.js
// Configuration consts
const problemDescriptionParent = "[data-key='description-content']";
const problemDescriptionElement = "[class*='description__']";
const problemDescriptionTabElement = "[data-key='description']";
const submissionResultElement = "[class*='result__']";
const submissionSuccessElement = "[class*='success__']";
const submissionErrorElement = "[class*='error__']";
const codeAreaElement = "[data-cy='code-area']";
const codingPanelElement = "[class*='content__']";
const runCodeButton = "[data-cy='run-code-btn']";
const submitCodeButton = "[data-cy='submit-code-btn']";
const resetCodeButton = "[class*='reset-code-btn__']";
const resetCodeButtonWarn = "[class*='reset-code-btn-warn__']";
const questionTitleElement = "[data-cy='question-title']";
const topicElement = ".topic-tag__1jni";
const difficultyEasyElement = "[diff='easy']";
const difficultyMediumElement = "[diff='medium']";
const difficultyHardElement = "[diff='hard']";

let url = document.URL;

let problem = {
    question: "",
    question_link: "",
    source: "",
    level: "",
    topic: "",
    technique: "",
    timings: {
        thinking: 0,
        implementing: 0
    },
    notes: "",
    solved_by: ""
};

window.addEventListener("load", onLoadPage, false);

function onLoadPage() {

    setTimeout(function () {
        console.log("Page Load Completed. Start Scanning");
        problem = get_details_from_leetcode();
        console.log("Problem: " + JSON.stringify(problem));
    }, 100);

    displayClock();
};

function get_details_from_leetcode() {
    console.log("Collecting Problem details");
    problem.question = getQuestion();
    problem.question_link = window.location.href;
    problem.source = "Leetcode";
    problem.level = getProblemDifficulty();
    problem.topic = getTopic();
    problem.timings.thinking = 0;
    problem.timings.implementing = 0;
    problem.notes = "";
    problem.solved_by = "Neeraj";
    return problem;
}

//Get Question
function getQuestion() {
    var question = $("[data-cy='question-title']").text().split(".").pop().trim();
    console.log("Question : " + question);
    return question;
    //    var pageURL = window.location.href;
    //    var tokens = pageURL.split("/");
    //
    //    if (tokens.length >= 2)
    //        return tokens[tokens.length - 2];
    //
    //    return "NA";
}

//Get the Problem Topic
function getTopic() {
    var topic = $(topicElement).text();
    //    var topic = new Array();
    //    topic.push($(".topic-tag__1jni").parent().firstChild().text());
    //    if($(".topic-tag__1jni").parent().firstChild().text() != $(".topic-tag__1jni").parent().lastElementChild().text()){
    //        topic.push($(".topic-tag__1jni").parent().lastElementChild().text())
    //    }
    console.log("Topic : " + JSON.stringify(topic));
    return topic;
}

// Get the problem difficulty
function getProblemDifficulty() {
    var difficulty = "";
    if ($(questionTitleElement).parent().children().children(difficultyEasyElement).length)
        difficulty = "Easy";
    if ($(questionTitleElement).parent().children().children(difficultyMediumElement).length)
        difficulty = "Medium";
    if ($(questionTitleElement).parent().children().children(difficultyHardElement).length)
        difficulty = "Hard";
    console.log("Level : " + difficulty);
    return difficulty;
}

// Styles definition
var timerStyle = `
.timer_style {
    border-radius: 2px;
    border:1px solid #E8E8E8;
    background-color: #FAFAFA;
    color: black;
    font-weight: bold;
    padding: 5px;
    margin-right: 10px;
}
.title_style {
    margin: 10;
    text-align: center;
    font-color: #FAFAFA;
    font-weight: bold;
    font-size: 150%;
}
.text_style {
    margin: 10;
    text-align: center;
    font-color: #FAFAFA;
}
.round_style {
    margin: 10;
    text-align: center;
    font-weight: bold;
    border-radius: 2px;
    border:1px solid #E8E8E8;
    background: #FAFAFA;
    padding: 20px;
    width: 100%;
    height: auto;
}
.round_style:hover {
    background: #FFFFFF;
}
#controlButtons {
    margin: auto;
}
`

function displayClock() {
    // insert the styles for the custom components
    var styleSheet = document.createElement("timer");
    styleSheet.type = "text/css";
    styleSheet.innerText = timerStyle;
    document.head.appendChild(styleSheet);
    $("#timer").attr("style", "display: visible;");
    timerVisible = true;
    console.log("Showing timer");
    $("#timer").html("Showing timer");
}