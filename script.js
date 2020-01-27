let button_Add_to_Do_Item = document.querySelector('button');
let main_Window = document.getElementById('mainWindow');
button_Add_to_Do_Item.addEventListener('click', func1);

function func1() {
  let new_Item = document.createElement('li');
  let new_Name_List = document.createElement('input');
  let button_Ok = document.createElement('button');
  let button_Delete_Item = document.createElement('button');

  main_Window.appendChild(new_Item);
  new_Item.appendChild(new_Name_List);
  new_Item.appendChild(button_Ok);
  new_Item.appendChild(button_Delete_Item);

  new_Item.setAttribute('id', 'newItem' );
  new_Name_List.setAttribute('id', 'newNameList' );
  button_Ok.setAttribute('id', 'buttonOk' );
  button_Delete_Item.setAttribute('id', 'buttonDeleteItem' );

  new_Name_List.setAttribute('placeholder', 'create NEW item List...');
  button_Ok.innerHTML = 'Ok';
  button_Delete_Item.innerHTML = 'Delete';

  button_Ok.addEventListener('click', funcSaveValueNewItem);
  button_Delete_Item.addEventListener('click', funcDeleteItem);

  function funcSaveValueNewItem() {
    new_Name_List.outerHTML = '<span id="nameItem">' + new_Name_List.value + '</span>'
  }

  function funcDeleteItem() {
    main_Window.removeChild(new_Item);
  }
}
