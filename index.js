const addbtn = document.getElementById("addbook");
var rIndex,
  table = document.getElementById("myTable");
// to check empty inputs
function CheckEmptyInput() {
  var isEmtpy = false,
    bookTitle = document.getElementById("book-title").value,
    Author = document.getElementById("Author").value,
    bookYear = document.getElementById("book-year").value,
    bookCategory = document.getElementById("book-Category").value;

  if (
    bookTitle === "" ||
    Author === "" ||
    bookYear === "" ||
    bookCategory === ""
  ) {
    alert("Input Can't Empty Please Fill 🤦🏼🤷☀️ ");
    isEmtpy = true;
  }

  return isEmtpy;
}
// Add Th and Tr  to the table with delete and Edit button fields

addbtn.addEventListener("click", function () {
  if (!CheckEmptyInput()) {
    var row = table.insertRow(myTable.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    bookTitle = document.getElementById("book-title").value;
    Author = document.getElementById("Author").value;
    bookYear = document.getElementById("book-year").value;
    bookCategory = document.getElementById("book-Category").value;

    cell1.innerHTML = bookTitle;
    cell2.innerHTML = Author;
    cell3.innerHTML = bookYear;
    cell4.innerHTML = bookCategory;

    cell5.innerHTML =
      '<button   id ="editbtn" onclick="editData(this)">Edit</button>' +
      '<button style="background-color:red;" id = "deletebtn" onclick="deleteData(this)">Delete</button>';

    selectedRowToInput();
    clearInputs();
  }
});
// this function select when you click on row
function selectedRowToInput() {
  for (i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      rIndex = this.rowIndex;
      document.getElementById("book-title").value = this.cells[0].innerHTML;
      document.getElementById("Author").value = this.cells[1].innerHTML;
      document.getElementById("book-year").value = this.cells[2].innerHTML;
      document.getElementById("book-Category").value = this.cells[3].innerHTML;
    };
  }
}
selectedRowToInput();

// Save change button and function
const saveChange = document.getElementById("SaveChange");
saveChange.addEventListener("click", function (button) {
  var booktitle = document.getElementById("book-title").value,
    author = document.getElementById("Author").value,
    bookyear = document.getElementById("book-year").value,
    bookcategory = document.getElementById("book-Category").value;

  table.rows[rIndex].cells[0].innerHTML = booktitle;
  table.rows[rIndex].cells[1].innerHTML = author;
  table.rows[rIndex].cells[2].innerHTML = bookyear;
  table.rows[rIndex].cells[3].innerHTML = bookcategory;
  clearInputs();
});

function deleteData(button) {
  // Get the parent row of the clicked button
  let row = button.parentNode.parentNode;

  // Remove the row from the table
  row.parentNode.removeChild(row);
}
function clearInputs() {
  // Clear input fields
  document.getElementById("book-title").value = "";
  document.getElementById("Author").value = "";
  document.getElementById("book-year").value = "";
  document.getElementById("book-Category").value = "";
}
