var SEC_COUNT = '',
    END_TXT = '';


$.init = function(sec, txt){
    SEC_COUNT = sec;
    END_TXT = txt;
};

$.start = function (){
    if(!SEC_COUNT){
        return;
    }
    $.win.open();
    var i = 0;
    var intervalID = setInterval(function () {
        timer = SEC_COUNT - i;
        if(timer < 0){
            $.label.text = "";
            $.win.close();
            clearInterval(intervalID);
        } else if(timer == 0){
            $.label.text = END_TXT;
        } else {
            $.label.text = timer;
        }
        i++;
    }, 1000);
};