function creaTaula(){
    let alto = document.getElementById("inputAlto").value;
    let ancho = document.getElementById("inputAncho").value;

    // Crear elementos <table> y <tbody>
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    
    // Crear las celdas
    for (var j = 0; j <= alto; j++) {
        var row = document.createElement("tr");

        for (var i = 0; i < ancho; i++) {
        var cell = document.createElement("td");
        row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }

    // append the <tbody> inside the <table>
    tbl.appendChild(tblBody);
    // put <table> in the <body>
    body.appendChild(tbl);
    // tbl border attribute to
    tbl.setAttribute("border", "1");
    //tbl.style.border = '1px solid black';
    //tbl.style.borderCollapse = 'collapese';
    
}

function tableCreate() {
    const body = document.body,
          tbl = document.createElement('table');
    tbl.style.width = '100px';
    tbl.style.border = '1px solid black';
  
    for (let i = 0; i < 3; i++) {
      const tr = tbl.insertRow();
      for (let j = 0; j < 2; j++) {
        if (i === 2 && j === 1) {
          break;
        } else {
          const td = tr.insertCell();
          td.appendChild(document.createTextNode(`Cell I${i}/J${j}`));
          td.style.border = '1px solid black';
          if (i === 1 && j === 1) {
            td.setAttribute('rowSpan', '2');
          }
        }
      }
    }
    body.appendChild(tbl);
  }
  
