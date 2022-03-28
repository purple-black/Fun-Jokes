const jokes = [
    "What is it called when a short person waves at you?",
    "MICROWAVE", 
    "Do you know what's tomorrow?",
    "Well, its NOT TODAY!", 
    "What do we call a bee if it comes from US?", 
    "USB",
    "What did one wall say to the other wall?",
    "We'll meet at the corners",
    "What is orange but sounds like parrot?",
    "A carrot",
    "What did the oceans say to each other?",
    "Nothing, they just waved!",
    "Are you free this weekend?",
    "No, I am expensive!",
    "What do you call bread when its on beach?",
    "A sandwich", 
    "How do you make an octopus laugh?",
    "with ten-tickles!",
    "When ever I am sad I look at my blood donor id",
    "because it always say B POSITIVE!!"
]

const jokediv = document.getElementById("joke");
const btn = document.getElementById("seejoke");
var num = 0;

function seeJoke(){
    if (num<19){
        document.getElementById("joke").innerHTML = jokes[num];
        document.getElementById("ans").innerHTML = jokes[num + 1];
        num = num + 2;
    }
    else{
        return;
    }
};