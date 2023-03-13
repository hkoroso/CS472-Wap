
/**
 * jQueryQuiz.js
 */
 "use strict";
$(function(){
    $( "div > h1" ).css("background", "#ff0000");
});

$(function(){
    $("p").append("YES")
});
function logger ()
{
return function(){
    return function(){
        console.log('message')
    }
}

}
logger()