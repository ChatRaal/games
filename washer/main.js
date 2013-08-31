$(function() {
    init();
    $('#cat').draggable({
        start: function() {
            var sound = new Howl({
                urls: ['./sounds/ChatInterrogatif.mp3','./sounds/ChatInterrogatif.ogg']
            }).play();
        },
        drag: function(){
            var $this = $(this);
            $('#cat').addClass('catTurn');
        },
        stop: function(){
            $('#cat').removeClass('catTurn');
        }
    });

    $('#machine').droppable({
        accept : '#cat',
        drop: function( event, ui ) {
            var sound = new Howl({
                urls: ['./sounds/ChatMachine.mp3','./sounds/ChatMachine.ogg']
            }).play();
            $(this).trigger('dropped');
          }
    }); 
    $('#panier').droppable({
        accept : '#cat',
        drop: function( event, ui ) {
            var sound = new Howl({
                urls: ['./sounds/ChatLinge.mp3','./sounds/ChatLinge.ogg']
            }).play();
            $(this).trigger('dropped');
            //console.log('Drop on >'+ event.pageX + ' ^ ' +event.pageY);
        }
    }) 
});

function init(){
    var goals = ['kill','save'];
    var goal = goals[Math.floor(Math.random() * goals.length)];

    $('h1 span').text(goal);

    if (goal == 'kill') {kill();}
    else {save();} 
}

function save(){
    console.log('save the cat');
    $('#machine').on('dropped',function(){
        var sound = new Howl({
            urls: ['./sounds/Chat2.mp3','./sounds/Chat2.ogg']
        }).play();
        $(this).addClass('sang');
        console.log('YOU LOOSE');
    });
    $('#panier').on('dropped',function(){
        var sound = new Howl({
            urls: ['./sounds/RonronPlusFort.mp3','./sounds/ChRonronPlusFort.ogg']
        }).play();
        console.log('YOU WIN');
    })
}

function kill(){
    console.log('kill the cat');
    $('#machine').on('dropped', function(){
        var sound = new Howl({
            urls: ['./sounds/Chat2.mp3','./sounds/Chat2.ogg']
        }).play();
        console.log('YOU WIN');
        $(this).addClass('sang');
    });
    $('#panier').on('dropped',function(){
        var sound = new Howl({
            urls: ['./sounds/RonronPlusFort.mp3','./sounds/ChRonronPlusFort.ogg']
        }).play();
        console.log('YOU LOOSE');
    })
}