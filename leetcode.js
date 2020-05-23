
let problem = {
    question = "",
    question_link = "";
    source = "",
    level = "",
    topic = "",
    technique = "",
    timings = {
        thinking = 0,
        implementing = 0
    },
    notes = "",
    solved_by = "Neeraj"
};

function get_details_from_leetcode(url){

    var topics_tag = document.getElementsByClassName("topic-tag__1jni");
    problem.question = document.getElementsByClassName("css-v3d350")[0].textContent;
    problem.question_link = url;
    problem.source = url;
    problem.level = document.getElementsByClassName("css-dcmtd5")[0].textContent;
    problem.topic = topics_tag.length >0 ? topics_tag[0].textContent : "";
    problem.technique = topics_tag.length >1 ? topics_tag[0].textContent : " ";

}

function get_details_from_problems_page(){

}