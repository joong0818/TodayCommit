function loginchk() {
    if(document.frm01.id.value == '') {
        alert('아이디를 입력하지 않았습니다.');
        document.frm01.id.focus();
        return false;
    }
    else if(document.frm01.pw.value == '') {
        alert('암호를 입력하지 않았습니다.');
        document.frm01.ㅔㅈ.focus();
        return false;
    }

    alert('아이디 : ' + document.frm01.id.value +
            '암호 : ' + document.frm01.pw.value + '      ' );
    return true;
}