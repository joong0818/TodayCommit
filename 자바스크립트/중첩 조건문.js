var date = new date();
var hour = date.getHours();

if (hour < 11) {
    alert('아침 먹을 시간입니다.');

} else {
    if (hour < 15) {
        alert('점심 먹을 시간입니다.');
    } else {
        alert('저녁 먹을 시간입니다.');
    }
}