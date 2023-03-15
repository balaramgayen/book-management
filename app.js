let form = document.getElementById("bookForm");
let dataArray = JSON.parse(localStorage.getItem("book")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let book = document.getElementById("bookName").value;
  let author = document.getElementById("authorName").value;
  let isbn = document.getElementById("isbnNumber").value;

  if (book == "" || author == "" || isbn == "") {
    alert("Please enter Required fields");
    return;
  }

  let dataObj = new Object();

  dataObj.name = book;
  dataObj.authorName = author;
  dataObj.isbnNum = isbn;

  dataArray.push(dataObj);

  localStorage.setItem("book", JSON.stringify(dataArray));

  console.log(dataArray);

  let newElement = document.createElement("tr");
  newElement.innerHTML = `
    <td>${book}</td>
    <td>${author}</td>
    <td>${isbn}</td>
  `;

  let tableItem = document.getElementById("tableData");
  tableItem.appendChild(newElement);

  document.getElementById("bookName").value = "";
  document.getElementById("authorName").value = "";
  document.getElementById("isbnNumber").value = "";

  console.log("data name is ", book, author, isbn);
});

// console.log("first");

dataArray.map((item) => {
  // console.log("data is", item.book);
  let newElem = document.createElement("tr");
  newElem.innerHTML = `
    <td>${item.name}</td>
    <td>${item.authorName}</td>
    <td>${item.isbnNum}</td>
  `;

  let taleItem = document.getElementById("tableData");
  taleItem.appendChild(newElem);
});

console.log("git check");

const deleteItem = (data) => {
  console.log("clicked");
  console.log(data);
};
