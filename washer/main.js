$(function() {
    $('#cat').draggable({
        start: function() {
            console.log('Drag started');
        },
        drag: function(){
            var $this = $(this);
            $('#cat').addClass('catTurn');
        }
    });
    $('#machine').droppable({
        accept : '#cat',
        drop: function( event, ui ) {
            console.log('Drop on washer');
            event.stopImmediatePropagation();
          }
    }); 
    $('body').droppable({
        accept : '#cat',
        drop: function( event, ui ) {
            console.log('Drop on >'+ event.pageX + ' ^ ' +event.pageY);
        }
    })   
});