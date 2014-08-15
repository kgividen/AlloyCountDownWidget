function start(secCountDown, endTxt){
    if(!secCountDown){
        return;
    }
    $.win.open();
    var i = 0;
    var intervalID = setInterval(function () {
        timer = secCountDown - i;
        if(timer < 0){
            $.label.text = "";
            $.win.close();
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