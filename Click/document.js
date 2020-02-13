$(document).ready(function(){
    $('img').hover(function(){
        $(this).attr('src','recursos/gato_2.jpg');
    },function(){
         $(this).attr('src','recursos/gato.jpg'); 
    });
})