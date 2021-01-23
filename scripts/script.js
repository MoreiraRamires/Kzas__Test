const fields = document.querySelectorAll("[required]")
const button = document.querySelector('#btnSend').addEventListener('click',validateForm)

function validateForm() {
    var fieldName = document.forms["addForm"]["name"].value;
    var fieldCpf = document.forms["addForm"]["cpf"].value;
    var fieldPhone = document.forms["addForm"]["phone"].value;
    var fieldEmail = document.forms["addForm"]["email"].value;

    if (fieldName == "" || fieldCpf == ""|| fieldPhone == ""|| fieldEmail == "") {

        alert('Por favor, preencha todos os campos do formulário')
     return false;
    }
}
 

 

function ValidateField(field) {
    // logica para verificar se existem erros
    function verifyErrors() {
        let foundError = false;

        for(let error in field.validity) {
            // se não for customError
            // então verifica se tem erro
            if (field.validity[error] && !field.validity.valid ) {
                foundError = error
            }
        }
        return foundError;
    }

    function customMessage(typeError) {
        const messages = {
            text: {
                valueMissing: "Por favor, preencha este campo"
            },
            email: {
                valueMissing: "Email é obrigatório",
                typeMismatch: "Por favor, preencha um email válido"
            },
            number:{
                valueMissing: "Por favor, preencha este campo ",
            }

            
        }

        return messages[field.type][typeError]
    }

    function setCustomMessage(message) {
        const inputError = field.parentNode.querySelector("input.error")
        
        if (message) {
            inputError.classList.add("active")
            inputError.innerHTML = message
        } else {
            inputError.classList.remove("active")
            inputError.innerHTML = ""
        }
    }

    return function() {

        const error = verifyErrors()
       

        if(error) {
            const message = customMessage(error)

            field.style.borderColor = "red"
            setCustomMessage(message)
            
        } else {
            // field.style.borderColor = "green"
            setCustomMessage()
        }
    }
}


function customValidation(event) {

    const field = event.target
    const validation = ValidateField(field)

    validation()

}

for( field of fields ){
    field.addEventListener("invalid", event => { 
        // eliminar o bubble
        
        event.preventDefault()

        customValidation(event)
    })
    field.addEventListener("blur", customValidation)
}


document.querySelector("form")
.addEventListener("click", event => {
    console.log("enviar o formulário")

    // não vai enviar o formulário
    
     event.preventDefault()
})