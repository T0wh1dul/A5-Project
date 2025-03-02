function displayDate() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString(undefined, options);

  const dateElement = document.getElementById('dateDisplay');

  if (dateElement) {
    dateElement.textContent = formattedDate;
  } else {
    console.error("Id not found.");
  }
}
displayDate();