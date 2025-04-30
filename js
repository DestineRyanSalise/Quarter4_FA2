function generateTable() {
  let start = parseInt(document.getElementById("startNum").value);
  let end = parseInt(document.getElementById("endNum").value);
  let output = document.getElementById("output");
  output.innerHTML = "";

  if (isNaN(start) || isNaN(end) || start < 2 || start > 10 || end < 2 || end > 10) {
    alert("Please enter numbers between 2 and 10");
    return;
  }

  let table = "<table border='1' cellspacing='0' cellpadding='5'>";
  for (let i = 1; i <= 10; i++) {
    table += "<tr>";
    for (let j = start; j <= end; j++) {
      table += "<td>" + (i * j) + "</td>";
    }
    table += "</tr>";
  }
  table += "</table>";

  output.innerHTML = table;
}
