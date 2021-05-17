
function likeChecker(id) {
    let likeButton = document.getElementById(id+"-like");
    let unlikeButton = document.getElementById(id+"-unlike");
    
    if(likeButton.style.color === "blue") {
        likeButton.style.color = ""
    } else if(likeButton.style.color === "") {
        if(unlikeButton.style.color === "red") {
            unlikeButton.style.color = "";
            likeButton.style.color = "blue";
        } else {
            likeButton.style.color = "blue";
        }
    }
}
function unlikeChecker(id) {
    let likeButton = document.getElementById(id+"-like");
    let unlikeButton = document.getElementById(id+"-unlike");
    if(unlikeButton.style.color === "red") {
        unlikeButton.style.color = "";
    } else if(unlikeButton.style.color === "") {
        if(likeButton.style.color === "blue") {
            likeButton.style.color = "";
            unlikeButton.style.color = "red";
        } else {
            unlikeButton.style.color = "red";
        }
    }
}