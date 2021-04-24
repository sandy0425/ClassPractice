var topic = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "條件判斷"
];

var vacation = [
    "尚未開學",
    "國定假日"
]

var startDate = new Date();

function setMonthAndDay(startMonth, StartDay){
    startDate.setMonth(startMonth,StartDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

var day;
$(function(){
    $("input").on("change",function(){
        day=new Date(document.getElementById("inday").value);//getDate(date);

        setMonthAndDay(day.getMonth(),day.getDate());
    });
});