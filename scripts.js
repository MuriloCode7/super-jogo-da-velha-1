function drawGame() {
  for (var x = 0; x < 3; x++) {
    var row = document.createElement("div");
    row.className = "row";
    for (var y = 0; y < 3; y++) {
      var cell = document.createElement("div");
      cell.className = "cell";
      if (y !== 2) {
        cell.style.borderRight = "solid black 5px";
      }
      if (x !== 2) {
        cell.style.borderBottom = "solid black 5px";
      }
      row.appendChild(cell);
      drawMiniGame(cell);
    }
    document.body.appendChild(row);
  }
}

function drawMiniGame(source) {

  for (var x = 0; x < 3; x++) {

    var row = document.createElement("div");
    row.className = "miniRow";
    for (var y = 0; y < 3; y++) {

      var cell = document.createElement("div");
      cell.className = "miniCell";
      if (y !== 2) {
        cell.style.borderRight = "solid black 2px";
      }
      if (x !== 2) {
        cell.style.borderBottom = "solid black 2px";
      }
      row.appendChild(cell);

    }
    source.appendChild(row);
  }

}

drawGame();
