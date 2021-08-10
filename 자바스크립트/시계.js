function showtime(){
    now = new Date();
    hours = now.getHours();

    if(hours >= 12) clock = '오후' + (hours - 12) + '시';
    else            clock = '오전' + hours + '시';

    minutes = now.getMinutes()

    if(minutes < 10) clock += ':0' + minutes + '분';
    else             clock += ':' + minutes + '분';

    seconds = now.getSeconds()

    if(seconds < 10) clock += ':0' + seconds + '초';
    else             clock += ':' + seconds + '초';

    window.status=clock;
}