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
        var letter = newValue[i]
        if(letter === ' '){
            letter = '空格'
        }
        text += ('<span class="letter">' + letter + '</span>')
    }
    var _html = '<span class="input" ><span class="empty">( </span><span class="input-value"></span><span class="empty"> )</span></span><div class="word" style="display:inline;">[' + text + '<p class="clear-input" style="display:inline;">clear</p><p class="answer" style="display:inline;">answer</p>]</div>'
    $(this).html(_html)
})

$(".word .letter").on("click",function(){
    //$(this).parents(".target").find(".input .empty").addClass("hide")
    var value = $(this).parents(".target").find(".input-value").text()
    var letter = $(this).text()
    if(letter === '空格'){
        letter = ' '
    }
    value = value + letter
    $(this).parents(".target").find(".input-value").text(value)
    var word = $(this).parents('.target').attr('word')
    if(value === word){
        $(this).parents('.target').addClass("right")
    } else {
        $(this).parents('.target').removeClass("right")
    }
})
$(".answer").on("click",function(){
    //$(this).parents(".target").find(".input .empty").addClass("hide")
    var word = $(this).parents('.target').attr('word')
    $(this).parents(".target").find(".input-value").text(word)
    $(this).parents('.target').addClass("right")
})
$(".clear-input").on("click",function(){
    $(this).parents(".target").find(".input-value").text('')
    $(this).parents('.target').removeClass("right")
})



