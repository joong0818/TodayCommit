array = new Array('와우','붉은 노을','희망 사항','신데렐라');

function selChk(){
    index = frm01.song.selectedIndex;

    if( index != -1){
        str = ' 좋아하는 노래';
        str +='\n\n 위치 : ' + index ;
        str +='\n\n 제목 : ' + array[index];
        alert(str);
    }
    else {
        alert('노래가 선택되지 않았습니다. ');
    }
}