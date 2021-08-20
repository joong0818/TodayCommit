document.write('<hr> lastmodified 속성 그대로 변경하지');
document.write('않고 출력 <br><br><h3>');
document.write(document.lastModified);
document.write('</h3><hr> lastmidified 속성을 date 객체로');
document.write('변경하여 출력 <br><br><h3>');
Day = new Date(document.lastModified);
y = Day.getYear();
m = Day.getMonth() + 1 ;
d = Day.getDate();
if(navigator.userAgent.indexOf('MSIE') == -1){
    y = 1900 + y;
}
strDay = '최종 수정일은' + y + " 년" + m + " 월" + d + " 일입니다.";
document.write( strDay );
document.write('</h3><hr>')