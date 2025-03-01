// const addActivity = document.getElementById('add-activity');
const clearActivity = document.getElementById('clear-btn');


const addActivity = document.getElementById('add-activity');
const clearActivity = document.getElementById('clear-btn');

clearActivity.addEventListener('click', function() {

  while (addActivity.firstChild) {
    addActivity.removeChild(addActivity.firstChild);
  }

});