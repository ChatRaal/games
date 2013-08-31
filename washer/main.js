$(function() {
    $('#cat').draggable({
        start: function() {
            console.log('Drag started');
        },
        drag: function(){
            $(this).removeClass('animated swing').addClass('animated swing');
            var $this = $(this);
            var ratioChat = $this.height() / ($this.width()+30);

            $this.height(event.pageY  / 4);
            $this.width($this.width() *ratioChat);
        }
    });
    $('#machine').droppable({
        accept : '#cat',
        drop: function( event, ui ) {
            console.log('Drop on washer');
            $('#cat').addClass('animated swing');
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