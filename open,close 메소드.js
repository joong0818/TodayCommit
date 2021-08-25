var win;
function study() {
    win = window.open("","win","width=200 height=250");
    win.document.open();
    win.document.write('<center>');
    win.document.write("<img src='image//small.jpg'>");
    win.document.write('</center>');
}
function clear(){
    win.document.open()
    win.document.close()
}