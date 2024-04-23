const userNameField = document.querySelector("#edtuser");
const passwordField = document.querySelector("#edtpassword");
const registerButton = document.querySelector("#registerBtn");
const edtconfirmuserField = document.querySelector("#edtconfirmuser");
const edtconfirmarpasswordField = document.querySelector("#edtconfirmarpassword");

// Función para validar el campo de usuario
const validateEmptyField = (field) => {
    const fieldValue = field.value.trim();
    if (fieldValue.length === 0) {
        field.classList.add("error");
        field.placeholder = "Campo requerido";
        return false;
    } else {
        field.classList.remove("error");
        field.placeholder = "";
        return true;
    }
};

// Función para validar el formato del correo electrónico
const validateEmailFormat = (field) => {
    const fieldValue = field.value.trim();
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (fieldValue.length > 0 && !regex.test(fieldValue)) {
        field.classList.add("error");
        field.placeholder = "Formato de correo inválido";
        return false;
    } else {
        field.classList.remove("error");
        field.placeholder = "";
        return true;
    }
};

// Función para validar la contraseña
const validatePassword = (password, confirmPassword) => {
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();
    const regexUpperCase = /[A-Z]/;
    const regexLowerCase = /[a-z]/;
    const regexDigit = /[0-9]/;
    const regexSpecialChar = /[$&+,:;=?@#|'<>.^*()%!-]/;

    let isValid = true;
    let message = "";

    if (passwordValue.length < 8 || passwordValue.length > 64) {
        isValid = false;
        message += "La contraseña debe tener entre 8 y 64 caracteres.\n";
    }

    if (!regexUpperCase.test(passwordValue)) {
        isValid = false;
        message += "La contraseña debe contener al menos una letra mayúscula.\n";
    }

    if (!regexLowerCase.test(passwordValue)) {
        isValid = false;
        message += "La contraseña debe contener al menos una letra minúscula.\n";
    }

    if (!regexDigit.test(passwordValue)) {
        isValid = false;
        message += "La contraseña debe contener al menos un dígito.\n";
    }

    if (!regexSpecialChar.test(passwordValue)) {
        isValid = false;
        message += "La contraseña debe contener al menos un carácter especial.\n";
    }

    if (passwordValue !== confirmPasswordValue) {
        isValid = false;
        message += "Las contraseñas no coinciden.\n";
    }

    if (!isValid) {
        alert(message);
    }

    return isValid;
};

// Función para validar todos los campos y habilitar o deshabilitar el botón de registro
const validateFields = () => {
    const emailValid = validateEmailFormat(userNameField);
    const userNameValid = validateEmptyField(userNameField);
    const passwordValid = validateEmptyField(passwordField);
    const confirmPasswordValid = validateEmptyField(edtconfirmarpasswordField);
    const passwordsMatch = validatePassword(passwordField, edtconfirmarpasswordField);

    registerButton.disabled = !(emailValid && userNameValid && passwordValid && confirmPasswordValid && passwordsMatch);
};

// Función para redireccionar si todos los campos son válidos
const redirect = () => {
    if (validateFields()) {
        window.location.href = "home.html";
    } else {
        alert("Por favor, complete el formulario correctamente.");
    }
};

// Eventos para validar los campos en tiempo real
userNameField.addEventListener('input', validateFields);
passwordField.addEventListener('input', validateFields);
edtconfirmarpasswordField.addEventListener('input', validateFields);

// Evento para el botón de registro
registerButton.addEventListener('click', redirect);

// Validar los campos al cargar la página
window.addEventListener('DOMContentLoaded', validateFields);
