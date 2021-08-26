function showimg(){
    str = "이미지 객체의 개수 => ";
    str += document.images.length;
    str += "\n\n이미지 객체의 이름 => ";

    for ( n=0 ; n<document.images.length; n++)
        str += document.images[n].name + '';

    alert(str);
}