window.onload = function () {
    var items = document.getElementsByClassName("item");
    var tips = document.getElementsByClassName("tip");
    var lbtn = document.getElementsByClassName("left-btn")[0];
    var rbtn = document.getElementsByClassName("right-btn")[0];
    var content = document.getElementsByClassName("content")[0];
    var test = document.getElementsByClassName("right-btn");
    console.log(test);
    var index = 0;
    var timer = null;
    console.log(test);
    //  清空class
    function clear() {
        for (let i = 0; i < items.length; i++) {
            items[i].className = "item";
            tips[i].className = "tip";
            tips[i].setAttribute("num", i);
        }
    }
    // 图片转换
    function move() {
        clear();
        items[index].className = "item active";
        tips[index].className = "tip tomato";
    }
    // 左键
    lbtn.onclick = function () {
        if (index > 0) {
            index--;
        }
        else {
            index = items.length - 1;
        }
        move();
    }
    // 右键
    rbtn.onclick = function () {
        index++;
        index = index % items.length;
        move();
    }
    //定时器
    timer = setInterval(function () {
        rbtn.onclick();
    }, 2000);
    content.onmouseover = function () {
        clearInterval(timer);
    }
    content.onmouseleave = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            rbtn.onclick();
        }, 2000);
    }
    for (let i = 0; i < tips.length; i++) {
        tips[i].addEventListener("click", function () {
            var number = this.getAttribute("num");
            index = number;
            move();
        })
    }
}