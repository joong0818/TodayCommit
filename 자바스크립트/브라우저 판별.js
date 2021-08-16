var strVer = "";
if (navigator.userAgent.indexOf("MSIE") != -1) {
    strVer = "익스플로러" ;
    switch(parseInt(navigator.appVersion.charAt(0))){
        case 2 : strVer += "3.X 버전입니다." ; break ;
        case 3 : strVer += "4.X 버전입니다." ; break ;
        case 4 : strVer += "5.X 버전입니다." ; break ;
        case 5 : strVer += "6.X 버전입니다." ; break ;
    }
}

if (navigator.appName.charAt(0) == 'N') {
    strVer = "넷스케이프" ;
    switch(parseInt(navigator.appVersion.charAt(0))){
        case 2 : strVer += "2.X 버전입니다." ; break ;
        case 3 : strVer += "3.X 버전입니다." ; break ;
        case 4 : strVer += "4.X 버전입니다." ; break ;
        case 5 : strVer += "5.X 버전입니다." ; break ;
    }
}