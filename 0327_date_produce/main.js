$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th>></tr>");
    $("input").on("change",function(){
        $("#courseTable").empty();
        var topicCount = topic.length;
        var millisecsPerDay = 24*60*60*1000;
        
        for(var x=0;x<topicCount;x++){
            $("#courseTable").append("<tr>");
            if(topic[x]==vacation[0]||topic[x]==vacation[1]){
                $("#courseTable").append(`<td style="color:gray">${x+1}</td>`);
                $("#courseTable").append(`<td style="color:gray">${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`);
                $("#courseTable").append(`<td style="color:gray">${topic[x]}</td>`);
            }
            else{
                $("#courseTable").append(`<td>${x+1}</td>`);
                $("#courseTable").append(`<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`);
                $("#courseTable").append(`<td>${topic[x]}</td>`);
            }
            $("#courseTable").append("</tr>");
        }
    });
});