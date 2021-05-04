//function to create a color table of rows and columns based
//on user input for row/column values
function createColorTable() {
    let rows = document.myform.rows.value;
    while (isNaN(rows)) {
      rows = prompt("INVALID ENTRY! Please enter a numeric value for rows.");
    }
    while (rows % 1 != 0) {
      rows = prompt("INVALID ENTRY! Please enter a whole number for rows.");
    }
    document.myform.rows.value = rows;
    let columns = document.myform.columns.value;
    while (isNaN(columns)) {
      columns = prompt(
        "INVALID ENTRY! Please enter a numeric value for columns."
      );
    }
    while (columns % 1 != 0) {
      columns = prompt("INVALID ENTRY! Please enter a whole number for columns.");
    }
    document.myform.columns.value = columns;
  
    let message = "<table>";
    for (let i = 0; i < rows; i++) {
      message += "<tr>";
      for (let j = 0; j < columns; j++) {
        let r = (j * 255) / columns;
        let b = (i * 255) / columns;
        let g = 255;
        //(Math.random() * 255) / columns;
  
        message +=
          "<td style = 'background-color: rgb(" + r + "," + g + "," + b + ")'>";
        message += "</td>";
      }
      message += "</tr>";
    }
    message += "</table";
    document.getElementById("tableMessage").innerHTML = message;
  }