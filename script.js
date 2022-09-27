let tabela = document.querySelector("#chessboard");

for (let i = 0; i < 8; i++) {
  let tableRow = document.createElement("tr");
  tabela.appendChild(tableRow);
  for (let j = 0; j < 8; j++) {
    if ((i + j) % 2 === 0) {
      let tableBlack = document.createElement("td");
      tableBlack.style.backgroundColor = "black";
      tableBlack.style.height = "50px";
      tableBlack.style.width = "50px";
      tableRow.appendChild(tableBlack);
    } else {
      let tableWhite = document.createElement("td");
      tableWhite.style.backgroundColor = "white";
      tableWhite.style.height = "50px";
      tableWhite.style.width = "50px";
      tableRow.appendChild(tableWhite);
    }
  }
}
