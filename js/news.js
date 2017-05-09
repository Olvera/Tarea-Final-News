$(function(){
    //cargar comunidades
    $.getJSON( "data/1.json", function( jsonObject ) {
        ponerComunidades( jsonObject );
    });

    //onclick en verinfo
    $("#verinfo").click(function() {
        var v=$("#text").val();
        if (v!=0) window.location = "/text/"+$("#text").val();
        else alert('Selecciona una comunidad');
    });
});

function ponerComunidades(json){
     $.each( json, function( i, comunidad ) {
         //dos formas de hacer lo mismo, la segunda es más adecuada.
         //$("#comunidades").append( "<option value='" + comunidad.slug + "'>" + comunidad.comunidad + "</option>" );
         $('#comunidades').append($('<option>', { value: 1.slug, text : 1.descripcion }));
         //"slug" es la parte de la url, por si hay que visitar la página de la comunidad (no va con vuestro proyecto, es un ejemplo)
     }); 
}
    