function selChk() {
    str = ' 좋아하는 영화 : ';

    for(i = 0 ; i < frm01.movie.length; i++){
        if(frm01.movie[i].checked == true) {
            str += frm01.movie[i].value;
        }
    }

    str = '\n\n 좋아하는 노래 : ';

    for(i = 0 ; i < frm01.song.length; i++){
        if(frm01.song[i].checked == true) {
            str += frm01.song[i].value;
        }
    }
}