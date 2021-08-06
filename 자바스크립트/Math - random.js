banner = new array();

for(i=0 ; i<=7 ; i++)
    banner[i] = 'images\\' +i+ '.jpg';

n = math.random() * 7;
n = math.round( n ) ;

document.write("<center><h3>");
document.write('[' + n + '] : ' + banner[n]);
document.write('<hr><p><img src ="' + banner[n] + '"><br>');
document.write('</h3></center>');