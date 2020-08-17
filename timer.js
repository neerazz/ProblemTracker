let thinking = {
    start_time: 0,
    end_time: 0
}
let solving = {
    start_time: 0,
    end_time: 0
}

function start_thinking_timer() {
    thinking.start_time = new Date().getTime();
}

function end_thinking_timer() {
    thinking.end_time = new Date().getTime();
}