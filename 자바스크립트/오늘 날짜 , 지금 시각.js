today = new Date();

document.write("<center>");
document.write("오늘 날짜를 출력합니다.<br><br>");
document.write( today.getYear() + "년 ") ;
document.write( (today.getMonth()+1) + "월 ");

document.write( today.getDate() + "일 입니다.<HR>");

document.write("지금 시간을 출력합니다.<BR><BR>");
if(today.getHours() <= 12)
    document.write( "오전" + today.getHours() + "시" );
else
    document.write( "오후" + (today.getHours()-12) + "시" );

document.write( today.getMinutes() + '분 ');
document.write( today.getSeconds() + '초 입니다.<hr>');
document.write("</center>");