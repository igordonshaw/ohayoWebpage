$(function(){
    impress().init();
    hljs.initHighlightingOnLoad();
    $('.genesis-intro').on('click', function(e){
        $('#imgGenesis').velocity({p: { opacity: 0.3, translateX: '-300px', scale: 1.2 }, o :{duration: 500}});
        $(this).empty().html('<img src="img/genesis-origin.jpg" alt=""/>').velocity({p: { translateX: '-220px', scale: 1.2 }, o :{duration: 500}});;
        e.stopPropagation();
        return false;
    });
});