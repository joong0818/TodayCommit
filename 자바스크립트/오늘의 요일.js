today = new Date();

document.write("<center><h2>");
document.write("오늘은 ");
switch(today.getDay()){
    case 0 : document.write("일요일입니다.<br>"); break;
    case 1 : document.write("월요일입니다.<br>"); break;
    case 2 : document.write("화요일입니다.<br>"); break;
    case 3 : document.write("수요일입니다.<br>"); break;
    case 4 : document.write("목요일입니다.<br>"); break;
    case 5 : document.write("금요일입니다.<br>"); break;
    case 6 : document.write("토요일입니다.<br>"); break;
}

document.write("</h2></center>");