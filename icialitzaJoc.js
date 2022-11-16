function creaTaula() {
  if (document.getElementsByTagName("table").length != 0) {
      document.getElementsByTagName("table")[0].remove();
  }
  // Crear elementos <table> y <tbody>
  let container = document.getElementsByTagName("div")[0];
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
