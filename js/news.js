$(function(){
    $.getJSON( "data/1.json", function( jsonObject ) {
        $("#masNot").on('click',function() {
        ponerNews(jsonObject)});
    });
});

function ponerNews(json){
    $.each( json, function( i, item ) {
        $("#newNews").append("<div class='col-sm-8'><br><p id='datetime'>"+item.datetime+"</p><h3 id='titulo'>"+item.titulo2+"</h3><img id='imagen' src="+item.imagen+"class='img-responsive center-block' alt=''><br><p id='descripcion'>"+item.descripcion+"</p><br><br></div>")
    }); 
}
