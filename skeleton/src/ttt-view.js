class View {
  constructor(game, $el) {
    
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    console.log('working')
  }

  bindEvents() {
    
    this.$el.on("click", "li", (event => {
      const $square = $(event.currentTarget);
      this.makeMove($square)
    }));
  }
  
  makeMove($square){
   
    const pos = $square.data("pos");
    if (this.game.board.isEmptyPos(pos)) {
      $square.addClass('color');
      $square.append(this.game.currentPlayer)
      debugger
      this.game.playMove(pos);
      if (this.game.winner()) {
        alert(`${this.game.currentPlayer} Won!`)
      }
    } else {
      alert("not a valid move")
      this.game.playMove(pos);
    }
  }

  setupBoard() {  
    const $ul = $("<ul>");
    
    for (let rowIdx = 0; rowIdx < 3; rowIdx++){
      for (let colIdx = 0; colIdx < 3; colIdx++){
        let $li = $("<li>");
        $li.data("pos", [rowIdx,colIdx]);
    
        $ul.append($li);
  
      }
    }
    this.$el.append($ul);
    this.bindEvents();
  }
}

module.exports = View;
