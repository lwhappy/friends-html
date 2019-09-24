$("body em").each(function(){
    var value = $(this).text()
    value = $.trim(value)
    $(this).attr("word",value)
    $(this).addClass("target")
    var newValue = value.split('')
    newValue.sort(function(a,b){
        return Math.random()-0.5;
    });
    var text = ''
    for(var i = 0; i < newValue.length; i++) {
        text += ('<span class="letter">' + newValue[i] + '</span>')
    }
    var _html = '<input class="input" readonly="true" type="text" /><div class="word" style="display:inline;">[(' + text + ')<p class="clear-input" style="display:inline;">clear</p><p class="answer" style="display:inline;">answer</p>]</div>'
    $(this).html(_html)
})

$(".word .letter").on("click",function(){
    var value = $(this).parent().siblings("input").val()
    value = value + $(this).text()
    $(this).parent().siblings("input").val(value)
    var word = $(this).parents('.target').attr('word')
    if(value === word){
        $(this).parents('.target').addClass("right")
    } else {
        $(this).parents('.target').removeClass("right")
    }
})
$(".answer").on("click",function(){
    var word = $(this).parents('.target').attr('word')
    $(this).parent().siblings("input").val(word)
    $(this).parents('.target').addClass("right")
})
$(".clear").on("click",function(){
    $(this).parents(".target").find("input").val('')
    $(this).parents('.target').removeClass("right")
})



