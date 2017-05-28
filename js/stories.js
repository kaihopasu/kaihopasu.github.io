function changeOrder(){
    var container = $(".stories");
    var len = container.length;
    for(var i =0; i<len; i++){
        var cur = Math.floor(Math.random() * len -1) + 1;
        var nxt = Math.floor(Math.random() * len -1) + 1;
        container.eq(cur).before(container.eq(nxt));
    }
}