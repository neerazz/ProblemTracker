let leetcode_url = "https://leetcode.com";

let url = document.URL;

let problem = {
    question : "",
    question_link : "",
    source : "",
    level : "",
    topic : "",
    technique : "",
    timings : {
        thinking : 0,
        implementing : 0
    },
    notes : "",
    solved_by : "Neeraj"
};

console.log("Problem: " + JSON.stringify(problem))

// document.addEventListener("DOMContentLoaded", function(event){
//     if(url.includes(leetcode_url)){
//         problem = get_details_from_leetcode(url)
//     }
// });
console.log("Starting Timeout");

setTimeout(function(){
    getProblem();
},1000);

function getProblem(){
    console.log(" Inside Get Problem.");
    if(url.includes(leetcode_url)){
        problem = get_details_from_leetcode(url)
    }
}

function get_details_from_leetcode(url){
    console.log(" Inside Get Leetcode Problem.");
    var topics_tag = document.getElementsByClassName("topic-tag__1jni");
    problem.question = document.getElementsByClassName("css-v3d350")[0].textContent;
    problem.question_link = url;
    problem.source = "Leetcode";
    problem.level = document.getElementsByClassName("css-dcmtd5")[0].textContent;
    problem.topic = topics_tag.length >0 ? topics_tag[0].textContent : "";
    problem.technique = topics_tag.length >1 ? topics_tag[1].textContent : " ";

    console.log("Problem: " + JSON.stringify(problem))
}