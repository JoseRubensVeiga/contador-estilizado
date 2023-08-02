const remove$ = document.getElementById('remove');
const counter$ = document.getElementById('counter');
const add$ = document.getElementById('add');

let counter = 0;

remove$.addEventListener("click", remove);
add$.addEventListener("click", add);

function click(element) {
  element.classList.remove('clicked');
  element.classList.add('clicked');

  setTimeout(() => {
    element.classList.remove('clicked');
  }, 200);
}

function remove() {
  click(remove$);
  counter--;
  refresh();
}

function add() {
  click(add$)
  counter++;
  refresh();
}

function refresh() {
  counter$.innerHTML = counter;
}


refresh();
