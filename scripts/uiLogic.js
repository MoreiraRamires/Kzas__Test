var btnSendData = document.getElementById('btnSend');

btnSendData.addEventListener('click',function(){
  var fieldName = document.forms["addForm"]["name"].value;
     if (fieldName == "") {
      

      return false;
     } else{
       saveContact()
     }

});
printContact();

function saveContact(){
  var name = document.getElementById('name').value,
      cpf = document.getElementById('cpf').value,
      phone = document.getElementById('phone').value,
      email = document.getElementById('email').value;

  addContactToSystem(name,cpf,phone,email);
  printContact()
}

function printContact(){
  var list = getContactList(),
      tbody = document.getElementById('tbody');

  tbody.innerHTML='';

  for( var i = 0; i < list.length; i++){
    var row = tbody.insertRow(i),
         nameCell= row.insertCell(0),
         cpfCell= row.insertCell(1),
         phoneCell= row.insertCell(2),
         emailCell= row.insertCell(3);
     
    nameCell.innerHTML = list[i].name;
    cpfCell.innerHTML = list[i].cpf;
    phoneCell.innerHTML = list[i].phone;
    emailCell.innerHTML = list[i].email;

    tbody.appendChild(row)
  } 
}

