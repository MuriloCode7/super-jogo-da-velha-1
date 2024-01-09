function drawGame() {
  var id = 0;
  for (var x = 0; x < 3; x++) {
    var row = document.createElement("div");
    row.className = "row";
    for (var y = 0; y < 3; y++) {
      id++;
      var cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = id.toString();
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
  var id = 0;
  for (var x = 0; x < 3; x++) {
    var row = document.createElement("div");
    row.className = "miniRow";
    for (var y = 0; y < 3; y++) {
      id++;
      var cell = document.createElement("div");
      cell.classList.add("miniCell");
      cell.id = id.toString();
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

function click(div) {
  div.addEventListener("click", function () {
    if (!div.classList.contains("selected")) {
      count++;
      var simbol = document.createElement("span");
      if (count % 2 !== 0) {
        simbol.textContent = "X";
        simbol.style.color = "blue";
      } else {
        simbol.textContent = "O";
        simbol.style.color = "red";
      }
      div.appendChild(simbol);
      div.classList.add("selected");
      highlightCell(div.id);
    }
  });
}

function highlightCell(id) {
  for (const cell of cells) {
    if (cell.id === id) {
      cell.classList.add("highlightedCell");
    } else {
      cell.classList.remove("highlightedCell");
    }
  }
}

// Desenha o jogo
drawGame();

var cells = document.querySelectorAll(".cell");

// Atribui a cada mini célula a função de click
var miniCells = document.querySelectorAll(".miniCell");
miniCells.forEach(function (div) {
  click(div);
});

var count = 0;
