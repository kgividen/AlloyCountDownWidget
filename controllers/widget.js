function start(secCountDown, endTxt){
    if(!secCountDown){
        return;
    }
    var i = 0;
    var intervalID = setInterval(function () {
        timer = secCountDown - i;
        if(timer < 0){
            $.label.text = "";
            clearInterval(intervalID);
        } else if(timer == 0){
            $.label.text = endTxt;
        } else {
            $.label.text = timer;
        }
        i++;
    }, 1000);
}

exports.start = start;