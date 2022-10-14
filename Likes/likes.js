var likes = [9,12,9];
var like_display = [
    document.querySelector("#button1"),
    document.querySelector("#button2"),
    document.querySelector("#button3")
];

function like(id) {
    likes[id]++; 
    like_display[id].innerHTML = likes[id] + " like(s)";
}
