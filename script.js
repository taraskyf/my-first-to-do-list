const data = [
  {
    text: 'Buy milk',
    done: true,
    date: '2020-02-05'
  },
  {
    text: 'Wash teeth',
    done: false,
    date: '2020-02-04'
  }
]


let button_Add_to_Do_Item = document.querySelector('button');
let main_Window = document.getElementById('mainWindow');
button_Add_to_Do_Item.addEventListener('click', func1);

function func1() {
  let new_Item = document.createElement('li');
  let itemInput = document.createElement('input');
  let button_Ok = document.createElement('button');
  let button_Delete_Item = document.createElement('button');

  main_Window.appendChild(new_Item);
  new_Item.appendChild(itemInput);
  new_Item.appendChild(button_Ok);
  new_Item.appendChild(button_Delete_Item);

  // TODO: Try to avoid this functionality
  // new_Item.setAttribute('id', 'newItem' );
  // itemInput.setAttribute('id', 'newNameList' );
  // button_Ok.setAttribute('id', 'buttonOk' );
  // button_Delete_Item.setAttribute('id', 'buttonDeleteItem' );

  itemInput.setAttribute('placeholder', 'create NEW item List...');
  button_Ok.innerHTML = 'Ok';
  button_Delete_Item.innerHTML = 'Delete';

  button_Ok.addEventListener('click', funcSaveValueNewItem);
  button_Delete_Item.addEventListener('click', funcDeleteItem);

  itemInput.addEventListener('keydown', stringControl);

  function funcDeleteItem() {
    main_Window.removeChild(new_Item);
  }

  function funcSaveValueNewItem() {
    main_Window.removeChild(new_Item)
    addItem(itemInput.value)
  }
}

function stringControl(event) {
  if(event.target.value.length > 20) {
    event.target.style.borderColor='red';
    event.target.nextSibling.disabled = true;
  } else {
    event.target.nextSibling.disabled = false;
    event.target.style.borderColor='';
  }
}

function addItem(value) {
  // TODO add checkbox, add 1 more parameter to this function to accept checkbox status
  const newListItem = document.createElement('li');
  // TODO: add class
  newListItem.innerHTML = value;
  main_Window.appendChild(newListItem);
}

for (let i = 0; i < data.length; i++) {
  // TODO pass parameter for checkbox status
  addItem(data[i].text)
}
