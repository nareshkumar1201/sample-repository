$(document).ready(function(){
    $('#btn1').on('mousedown',function(){
         $('#p1').toggle();
         $('h1').append('appended heading');
         $('h1').addClass("headClass");
         alert('mousedown event triggered');
     });

     $('#btn2').hover(function(){
         $('#p2').toggle();
         alert('mouseenter event');
     },
     function(){
       $('#p2').toggle();

      alert('mouseleave event');
     });
   /*  $('p').on('dblclick',function(e){
       
         $(e.currentTarget).toggle();

     });*/
 });