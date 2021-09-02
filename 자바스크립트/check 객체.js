function selChk() {
    str='좋아하는 영화 : ';

    if(document.frm01.check01.checked == true) {
        str += document.frm01.check01.value;
    }

    if(document.frm01.check02.checked == true) {
        str += ', ' + document.frm01.check02.value;
    }

    if(document.frm01.check03.checked == true) {
        str += ', ' + document.frm01.check03.value;
    }
}