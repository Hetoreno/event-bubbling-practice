const button = document.querySelector(`#submit`);
const todoList= document.querySelector(`#todo-list`);
const items= todoList.children;

const num = document.querySelector(`.list-sum b`);

const input = document.querySelector(`.name-input`);
/* const newButton = document.querySelector(`#second`);
const title = document.querySelector(`.new`); */

button.addEventListener("click", function(e){
    e.preventDefault();

    const newItem = document.createElement("li");
    newItem.classList.add('item');
    newItem.innerText = input.value;
    input.value="";
    todoList.appendChild(newItem);

    num.innerText = items.length;

    newItem.addEventListener("click", deleteItem);
});

function deleteItem(e){
    e.stopPropagation();
    e.target.remove();
}

todoList.addEventListener("click", function(){
    todoList.classList.toggle("fade");
});
/* newButton.addEventListener("mouseover",function(){
    title.innerText = `Heyyyyy`;
    title.classList.toggle(`color`);
}); */