const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const itemsPerPage = 3;

const paginationContainer = document.getElementById("paginationContainer");
const paginationItems = document.getElementById("paginationItems");
const previousPageButton = document.getElementById("previousPage");
const nextPageButton = document.getElementById("nextPage");
const currentPageDisplay = document.getElementById("currentPage");
const totalPagesDisplay = document.getElementById("totalPages");

let currentPage = 0;

function showPage(pageNumber) {
  const startIndex = pageNumber * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageItems = items.slice(startIndex, endIndex);

  paginationItems.innerHTML = "";

  for (const item of pageItems) {
    const itemElement = document.createElement("div");
    itemElement.textContent = item;
    paginationItems.appendChild(itemElement);
  }

  currentPageDisplay.textContent = pageNumber + 1;
  previousPageButton.disabled = pageNumber === 0;
  nextPageButton.disabled = pageNumber === Math.floor(items.length / itemsPerPage);
}

previousPageButton.addEventListener("click", () => {
  currentPage--;
  showPage(currentPage);
});

nextPageButton.addEventListener("click", () => {
  currentPage++;
  showPage(currentPage);
});

totalPagesDisplay.textContent = Math.ceil(items.length / itemsPerPage);
showPage(currentPage);
