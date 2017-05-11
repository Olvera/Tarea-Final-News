var newsJSON=["data/1.json", "data/2.json"]
$(function(){
    //cargar comunidades
    $.getJSON( "data/1.json", function( jsonObject ) {
        //onclick en verinfo
        $("button").on('click',function() {
        ponerNews(jsonObject);});
    });
});

function ponerNews(json){
    $.each( json, function( i, item ) {
        $('#newNews').append('<div class="col-sm-8"><br><p id="datetime">'+this.datetime+'</p><h3 id="titulo">'+this.titulo'</h3><img id="imagen" src="'+this.imagen+'" class="img-responsive center-block" alt=""><br><p id="descripcion">'+this.descripcion+'</p><br><br></div>')
    }); 
}
