var contactList = [  
];

function addContactToSystem(name,cpf,phone,email) {
 var newContact =
 
  {
    name: name,
    cpf: cpf,
    phone: phone,
    email:email
  };

  console.log(newContact)

  contactList.push(newContact);
  
   localStorageContactList(contactList);
  
}

function getContactList(){
  var storedList = localStorage.getItem('localContactList')
 if(storedList == null){
   contactList = [
    
   ];
 } else{
   contactList = JSON.parse(storedList);
 }
  return contactList;
}

function localStorageContactList(listContact){

  localStorage.setItem('localContactList', JSON.stringify(listContact));
}

