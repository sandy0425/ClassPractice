$(function(){
    var temp=3;
    $("input").on("click",function(){
        //alert("Hi");
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        var picarr = new Array();
        picarr[0] = "https://www.tabirai.net/tabirai-uploader/img/0005408/s1_0005408.jpg";
        picarr[1] = "https://d3l76hx23vw40a.cloudfront.net/recipe/yqn093-027c.jpg";
        picarr[2] = "https://banbi.tw/wp-content/uploads/20190509230042_82.jpg";
        while(randomChildNumber==temp){
            randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        }
        temp=randomChildNumber;
        $("h1").text($("li").eq(randomChildNumber).text());
        $("#imge").attr("src", picarr[randomChildNumber]);
    });
});