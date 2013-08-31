$("#cat").on({
  dragstart : function(e){
    $this = $(this);
    $this.css('opacity','0.5');
  },
  dragover: function(e) {
    $this : $(this);
    $this.height($this.height()-10;);
  },
  dragend : function(e){
    alert('yeah');
  }
});