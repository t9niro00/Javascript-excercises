$(document).ready(function(){
    $("#laskesumma").click(function(){
        var num1=parseInt($("#num1").val());
        var num2=parseInt($("#num2").val());
        $("#näytäsumma").text(num1+num2);
    });
});
        
