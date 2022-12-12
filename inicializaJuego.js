let minas;
function creaTaula() {
  if (document.getElementsByTagName("table").length != 0) {
      document.getElementsByTagName("table")[0].remove();
  }
  // Crear elementos <table> y <tbody>
  let container = document.getElementById("contT");
  let table = document.createElement("table");
  let tbody = document.createElement("tbody");

  let inputAlto = document.getElementById("inputAlto").valueAsNumber;
  let inputAncho = document.getElementById("inputAncho").valueAsNumber;
  
  // Crear las celdas
  for (let j = 0; j < inputAlto; j++) {
    let tr = document.createElement("tr");

    for (let i = 0; i < inputAncho; i++) {
      let td = document.createElement("td");
      td.innerHTML = "&nbsp"
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.setAttribute("border", "1");
  table.setAttribute("height", "5%");
  table.setAttribute("width", "20%");
  // append the <tbody> inside the <table>
  table.appendChild(tbody);
  container.appendChild(table);
  // put <table> in the <body>
  // tbl border attribute to

}

function matriuBinaria(matrix) {
  
  var matrix2 =[];
  for (var i = 0; i < matrix.length; i++) {
    let fila = []
      for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i].style.backgroundColor == "red") {
        fila.push(1)
      }
      else{
          fila.push(0)
      }
      }
      matrix2.push(fila);
  }
  return matrix2;
}

function inicialitzaMines(nMines, midaX, midaY) {
  
  let matrix3 = [];
  for (let i = 0; i < midaX; i++) {
    let fila = []
    for (let j = 0; j < midaY; j++) {
      fila.push(0)
    }
    matrix3.push(fila);
  }
  while(nMines != 0){
    let ranX = Math.trunc(Math.random()*(midaX));
    let ranY = Math.trunc(Math.random()*(midaY));
    if (matrix3[ranX][ranY] != 1) {
      matrix3[ranX][ranY] = 1;
      nMines--;
    }
  }  
  return matrix3;
}

function minasRojas(minas){
  let tabla = document.getElementsByTagName("tbody")[0];
  for (let i = 0; i < minas.length; i++) {
    for (let j = 0; j < minas[0].length; j++) {
      if (minas[i][j] == 1) {
        tabla.children[i].children[j].style.backgroundColor = "red";

      }
    }
  }
}

function inicializaJuego() {
  alert("Suerte :)")
  creaTaula();
  
  let nMines = document.getElementById("minas").valueAsNumber;
  let midaX = document.getElementById("inputAncho").valueAsNumber;
  let midaY = document.getElementById("inputAlto").valueAsNumber;
  
  minas = inicialitzaMines(nMines, midaX, midaY);
  minasRojas(minas);
}
