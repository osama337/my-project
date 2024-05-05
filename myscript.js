var hero = document.getElementById('hero');
var obstacle = document.getElementById('obstacle');
function jump() {
    hero.classList.add('animate');
    setTimeout(function () {
        hero.classList.remove('animate');
    }, 500);
}

var checkstatus = setInterval(function () {
    var herotop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    var obstacleleft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if (obstacleleft < 30 && obstacleleft > 0 && herotop >= 200)
    {
        obstacle.style.animation = "none";
        obstacle.style.display = "none";
        alert("You lost");
        alert("Refresh the page");
    }
}
    , 10);