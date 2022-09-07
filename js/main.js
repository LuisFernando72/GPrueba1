const icon_error = document.querySelectorAll("#icoError");
const txtnombresCliente = document.querySelector("#txtnombresCliente");
const error_nombres = document.querySelector("#txtnombresCliente-error");
const txtxapellidoCliente = document.querySelector("#txtxapellidoCliente");
const error_apellidos = document.querySelector("#txtxapellidosCliente-error");
const error_correoCliente = document.querySelector("#txtcorreoCliente-error");
const txtcorreoCliente = document.querySelector("#txtcorreoCliente");
const txtfechaNacimiento = document.querySelector("#txtfechaNacimiento");
const error_Nacimiento = document.querySelector("#txtfechaNacimiento-error");
const txtEstatura = document.querySelector("#txtEstatura");
const error_estatura = document.querySelector("#txtEstatura-error");
const txtTelefono = document.querySelector("#txtTelefono");
const error_telefono = document.querySelector("#txtTelefono-error");
const txtsexo = document.querySelector("#txtsexo");
const error_sexo = document.querySelector("#sexo-error");
const edad = document.querySelector("#txtEdad");
const error_edad = document.querySelector("#txtEdad-error");
const fechaInicio = document.querySelector("#txtfechaInicio");
const txtnombresEmergencia = document.querySelector("#txtnombresEmergencia");
const error_nombreEm = document.querySelector("#txtnombresEmergencia-error");
const txtapellidosEmergencia = document.querySelector(
  "#txtapellidosEmergencia"
);
const error_apellidosEm = document.querySelector(
  "#txtapellidosEmergencia-error"
);
const txttelefonoEmergencia = document.querySelector("#txttelefonoEmergencia");
const error_TelEm = document.querySelector("#txttelefonoEmergencia-error");

//NUTRICIÓN
const peso = document.querySelector("#txtPeso");
const erro_peso = document.querySelector("#peso-error");
const grasaCorp = document.querySelector("#txtGrasa");
const error_grasaC = document.querySelector("#grasa-error");
const aguaPorcentaje = document.querySelector("#txt_aguaPorc");
const error_agua = document.querySelector("#agua-error");
const masaMuscular = document.querySelector("#txtMasaM");
const error_masa = document.querySelector("#masa-error");
const valorFisico = document.querySelector("#txtFisicoV");
const error_Vfisico = document.querySelector("#fisicoV-error");
const metabolismoB = document.querySelector("#txtMetabolismoB");
const errorMetabolismoB = document.querySelector("#metabolismoB-error");
const edadMetabolica = document.querySelector("#txtEdadMet");
const error_edadM = document.querySelector("#edadMet-error");
const masaOsea = document.querySelector("#txtMasaOsea");
const error_masaOs = document.querySelector("#masaOs-error");
const GVisceral = document.querySelector("#txtGrasaVi");
const error_visceral = document.querySelector("#grasaVi-error");
const medidaB = document.querySelectorAll("#txtmedida");

//MEDIDAS CORPORALES
const estatura2 = document.querySelector("#txtEstatura2");
const error_est2 = document.querySelector("#estatura2-error");
const pectoral = document.querySelector("#txtPectoral");
const erro_pectoral = document.querySelector("#pectoral-error");
const dorsal = document.querySelector("#txtDorsal");
const error_dorsal = document.querySelector("#dorsal-error");
const biceps = document.querySelector("#txtBiceps");
const error_biceps = document.querySelector("#biceps-error");
const antebrazos = document.querySelector("#txtAntebrazos");
const error_ant = document.querySelector("#antebrazos-error");
const cintura = document.querySelector("#txtCintura");
const erro_cintura = document.querySelector("#cintura-error");
const cadera = document.querySelector("#txtCadera");
const error_cadera = document.querySelector("#cadera-error");
const muslo = document.querySelector("#txtMuslo");
const error_muslo = document.querySelector("#muslo-error");
const pantorrilla = document.querySelector("#txtPantorrila");
const error_pant = document.querySelector("#pantorrilla-error");
const ocultarS = document.querySelectorAll(".ocultar");

//BOTONES
const movPag = document.querySelector(".movPag");
const btn_adelante2 = document.querySelector(".sigPag");
const btn_atras1 = document.querySelector(".volver-pag1");
const btn_adelante3 = document.querySelector(".adelante-pag3");
const btn_atras2 = document.querySelector(".volver-pag2");
const btn_adelante4 = document.querySelector(".adelante-pag4");
const btn_atras3 = document.querySelector(".volver-pag3");
const btn_adelante5 = document.querySelector(".adelante-pag5");
const btn_atras4 = document.querySelector(".volver-pag4");
const btn_adelante6 = document.querySelector(".adelante-pag6");
const btn_atras5 = document.querySelector(".volver-pag5");
const btn_final = document.querySelector(".Fin");
// const progressText = document.querySelectorAll(".paso p");
// const progressCheck = document.querySelectorAll(".paso .check");
// const Num = document.querySelectorAll(".paso .num");
const Siguiente = document.getElementById("btn_sisguiente");
const btn_cancelar = document.querySelector(".btn_cancelar");
let progressOptions = document.querySelectorAll(".progressbar__option");
// let arrarV = [];
let max = 4;
let cont = 1;

//INPUT TELÉFONO INTERNACIONALES
const phoneInput = window.intlTelInput(txtTelefono, {
  preferredCountries: ["gt", "mx", "sv", "hn", "us"],
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

const phoneInputEmergency = window.intlTelInput(txttelefonoEmergencia, {
  preferredCountries: ["gt", "mx", "sv", "hn", "us"],
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

// alert(icon_error.length);

var nowFecha = moment().format("YYYY-MM-DD");
window.addEventListener("load", function () {
  fechaInicio.value = nowFecha;
  fechaInicio.style.borderColor = "#00ff00";
});

function calcularEdad(txtfechaNacimiento) {
  var hoy = new Date();
  var cumpleanos = new Date(txtfechaNacimiento);
  let edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();

  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }

  return edad;
}


window.addEventListener("load", function () {
  txtfechaNacimiento.addEventListener("change", function () {
    if (this.value) {
      edad.value = `${calcularEdad(this.value)}`;
      edad.style.fontWeight = "bold";
      edad.style.borderColor = "#00ff00";
    }
  });
});

let errores = {
  txtnombresCliente: true,
  txtxapellidoCliente: true,
  txtcorreoCliente: true,
  txtfechaNacimiento: true,
  txtEstatura: true,
  txtsexo: true,
  txtTelefono: true,
  txtnombresEmergencia: true,
  txtapellidosEmergencia: true,
  txttelefonoEmergencia: true,
};

const validatefieldWhite = (contador, error, e) => {
  const field = e.target;
  const fieldValue = e.target.value;
  const field_id = e.target.id;
  if (fieldValue.trim().length === 0) {
    icon_error[contador].classList.add("invalid");
    field.style.borderColor = "#FF0000";
    error.innerHTML = "*Por favor llenar el campo";
    errores[field_id] = true;
  } else {
    icon_error[contador].classList.remove("invalid");
    field.style.borderColor = "#00ff00";
    error.innerText = "";
    errores[field_id] = false;
    // arrarV.push(contador);
  }

  submitController();
};

const validatefield = (contador, error, e) => {
  const field = e.target;
  const fieldValue = e.target.value;
  const field_id = e.target.id;
  const regex = new RegExp(
    "^([A-ZÀ-ÅÇ-ÖÙ-Ý][a-zà-åç-öù-ÿ]+(?:[-' ][A-ZÀ-ÅÇ-ÖÙ-Ý][a-zà-åç-öù-ÿ]+)*)$"
  );

  if (fieldValue.trim().length === 0) {
    icon_error[contador].classList.add("invalid");
    field.style.borderColor = "#FF0000";
    errores[field_id] = true;
    error.innerHTML = "*Por favor llenar el campo";
  } else if (!regex.test(fieldValue)) {
    icon_error[contador].classList.add("invalid");
    field.style.borderColor = "#FF0000";
    errores[field_id] = true;
    error.innerHTML = "*Inicial Mayúscula, solo se permiten letras";
  } else {
    icon_error[contador].classList.remove("invalid");
    field.style.borderColor = "#00ff00";
    errores[field_id] = false;
    error.innerText = "";
  }
  submitController();
};

const validatefieldLetters = (contador, error, e) => {
  const field = e.target;
  const fieldvalue = e.target.value;
  const field_id = e.target.id;
  const regex = new RegExp(
    "^([A-ZÀ-ÅÇ-ÖÙ-Ý][a-zà-åç-öù-ÿ]+(?:[-' ][A-ZÀ-ÅÇ-ÖÙ-Ý][a-zà-åç-öù-ÿ]+)*)$"
  );

  if (!regex.test(fieldvalue)) {
    icon_error[contador].classList.add("invalid");
    field.style.borderColor = "#FF0000";
    error.innerHTML = "*Inicial Mayúscula, solo se permiten letras";
    errores[field_id] = true;
  } else {
    icon_error[contador].classList.remove("invalid");
    field.style.borderColor = "#00ff00";
    errores[field_id] = false;
    error.innerText = "";
  }

  submitController();
};

txtnombresCliente.addEventListener("blur", (e) =>
  validatefield(0, error_nombres, e)
);

txtnombresCliente.addEventListener("input", (e) =>
  validatefieldLetters(0, error_nombres, e)
);
txtxapellidoCliente.addEventListener("blur", (e) =>
  validatefield(1, error_apellidos, e)
);

txtxapellidoCliente.addEventListener("input", (e) =>
  validatefieldLetters(1, error_apellidos, e)
);

const validateEmailB = (contador, error, e) => {
  const field = e.target;
  const fieldValue = e.target.value;
  const field_id = e.target.id;
  const regex = new RegExp(
    "^([A-Z|a-z|0-9](.|_){0,1})+[A-Z|a-z|0-9]@([A-Z|a-z|0-9])+((.){0,1}[A-Z|a-z|0-9]){2}.[a-z]{2,3}$"
  );

  if (fieldValue.trim().length === 0) {
    icon_error[contador].classList.add("invalid");
    field.style.borderColor = "#FF0000";
    errores[field_id] = true;
    error.innerHTML = "*Por favor llenar el campo";
  } else if (!regex.test(fieldValue)) {
    icon_error[contador].classList.add("invalid");
    field.style.borderColor = "#FF0000";
    errores[field_id] = true;
    error.innerHTML = "*No cumple como un correo válido";
  } else {
    icon_error[contador].classList.remove("invalid");
    field.style.borderColor = "#00ff00";
    errores[field_id] = false;
    error.innerText = "";
  }
  if (fieldValue === "Ni") {
    icon_error[contador].classList.remove("invalid");
    errores[field_id] = false;
    field.style.borderColor = "#00ff00";
    error.innerText = "";
  }
  submitController();
};

const validateEmailI = (contador, error, e) => {
  const field = e.target;
  const fieldvalue = e.target.value;
  const field_id = e.target.id;
  const regex = new RegExp(
    "^([A-Z|a-z|0-9](.|_){0,1})+[A-Z|a-z|0-9]@([A-Z|a-z|0-9])+((.){0,1}[A-Z|a-z|0-9]){2}.[a-z]{2,3}$"
  );

  if (fieldvalue.trim().length > 1 && !regex.test(fieldvalue)) {
    icon_error[contador].classList.add("invalid");
    field.style.borderColor = "#FF0000";
    errores[field_id] = true;
    error.innerHTML = "*No cumple como un correo válido";
  } else {
    icon_error[contador].classList.remove("invalid");
    errores[field_id] = false;
    field.style.borderColor = "#00ff00";
    error.innerText = "";
  }
  submitController();
};

const validatefieldWhiteNumber = (contador, med, error, e) => {
  const field = e.target;
  const fieldValue = e.target.value;
  const field_id = e.target.id;
  if (fieldValue.trim().length === 0) {
    icon_error[contador].classList.add("invalid");
    field.style.borderColor = "#FF0000";
    medidaB[med].classList.add("medidaf");
    errores[field_id] = true;
    error.innerHTML = "*Por favor llenar el campo";
  } else {
    icon_error[contador].classList.remove("invalid");
    medidaB[med].classList.remove("medidaF");
    medidaB[med].classList.add("medidat");
    errores[field_id] = false;
    field.style.borderColor = "#00ff00";
    error.innerText = "";
  }
  submitController();
};

const validateNumberFloat = (contador, med, error, e) => {
  const field = e.target;
  const fieldvalue = e.target.value;
  const field_id = e.target.id;
  const regex = new RegExp("[0-9]+([.|,][0-9]+)?");

  if (fieldvalue.trim().length === 0 && !regex.test(fieldvalue)) {
    icon_error[contador].classList.add("invalid");
    medidaB[med].classList.remove("medidat");
    medidaB[med].classList.add("medidaf");
    errores[field_id] = true;
    field.style.borderColor = "#FF0000";
    error.innerHTML = "Números enteros y decimales";
  } else {
    icon_error[contador].classList.remove("invalid");
    medidaB[med].classList.remove("medidaf");
    medidaB[med].classList.add("medidat");
    errores[field_id] = false;
    field.style.borderColor = "#00ff00";
    error.innerText = "";
  }
  submitController();
};
const validatePhoneNumberI = (contador, error, phone, e) => {
  const field = e.target;
  const fieldValue = e.target.value;
  const field_id = e.target.id;
  const phone2 = phone.getNumber();
  if (phone.isValidNumber()) {
    icon_error[contador].classList.remove("invalid");
    field.style.borderColor = "#00ff00";
    error.innerHTML = "";
    errores[field_id] = false;
  } else if (fieldValue.trim().length === 0) {
    icon_error[contador].classList.add("invalid");
    field.style.borderColor = "#FF0000";
    error.innerHTML = "*Por favor llenar el campo";
    errores[field_id] = true;
  } else {
    icon_error[contador].classList.add("invalid");
    field.style.borderColor = "#ff0000";
    error.innerText = "Número Invalido";
    errores[field_id] = true;
  }

  if (fieldValue === "Ni") {
    icon_error[contador].classList.remove("invalid");
    field.style.borderColor = "#00ff00";
    error.innerHTML = "";
    errores[field_id] = false;
  }
  console.log(phone2);
  submitController();
};

const validateNumberPhone = (contador, error, phone, e) => {
  const field = e.target;
  const fieldValue = e.target.value;
  const field_id = e.target.id;
  if (fieldValue.trim().length === 0) {
    icon_error[contador].classList.add("invalid");
    field.style.borderColor = "#FF0000";
    error.innerHTML = "*Por favor llenar el campo";
    errores[field_id] = true;
  } else if (phone.isValidNumber()) {
    icon_error[contador].classList.remove("invalid");
    field.style.borderColor = "#00ff00";
    error.innerText = "";
    errores[field_id] = false;
  } else {
    icon_error[contador].classList.add("invalid");
    field.style.borderColor = "#FF0000";
    error.innerHTML = "Número Invalido";
    errores[field_id] = true;
  }
  if (fieldValue === "Ni") {
    icon_error[contador].classList.remove("invalid");
    field.style.borderColor = "#00ff00";
    error.innerHTML = "";
    errores[field_id] = false;
  }
  submitController();
};

const validateSelect = (contador, error, e) => {
  const field = e.target;
  const fieldValue = e.target.value;
  const field_id = e.target.id;
  if (fieldValue == -1) {
    icon_error[contador].classList.add("invalid");
    field.style.borderColor = "#FF0000";
    errores[field_id] = true;
    error.innerHTML = "*Por favor seleccionar sexo";
  } else {
    icon_error[contador].classList.remove("invalid");
    field.style.borderColor = "#00ff00";
    errores[field_id] = false;
    error.innerText = "";
  }
  submitController();
};

txtcorreoCliente.addEventListener("blur", (e) =>
  validateEmailB(2, error_correoCliente, e)
);
txtcorreoCliente.addEventListener("input", (e) =>
  validateEmailI(2, error_correoCliente, e)
);

txtfechaNacimiento.addEventListener("click", (e) =>
  validatefieldWhite(3, error_Nacimiento, e)
);
txtfechaNacimiento.addEventListener("change", (e) =>
  validatefieldWhite(3, error_Nacimiento, e)
);

txtEstatura.addEventListener("blur", (e) =>
  validatefieldWhiteNumber(4, 0, error_estatura, e)
);
txtEstatura.addEventListener("input", (e) =>
  validateNumberFloat(4, 0, error_estatura, e)
);
txtsexo.addEventListener("click", (e) => validateSelect(5, error_sexo, e));
txtsexo.addEventListener("change", (e) => validateSelect(5, error_sexo, e));

txtTelefono.addEventListener("blur", (e) =>
  validateNumberPhone(6, error_telefono, phoneInput, e)
);

txtTelefono.addEventListener("input", (e) =>
  validatePhoneNumberI(6, error_telefono, phoneInput, e)
);

txtnombresEmergencia.addEventListener("blur", (e) =>
  validatefield(9, error_nombreEm, e)
);
txtnombresEmergencia.addEventListener("input", (e) =>
  validatefieldLetters(9, error_nombreEm, e)
);

txtapellidosEmergencia.addEventListener("blur", (e) =>
  validatefield(10, error_apellidosEm, e)
);

txtapellidosEmergencia.addEventListener("input", (e) =>
  validatefieldLetters(10, error_apellidosEm, e)
);
txttelefonoEmergencia.addEventListener("blur", (e) =>
  validateNumberPhone(11, error_TelEm, phoneInputEmergency, e)
);
txttelefonoEmergencia.addEventListener("input", (e) =>
  validatePhoneNumberI(11, error_TelEm, phoneInputEmergency, e)
);

// QUINTO FORMULARIO NUTRICION
peso.addEventListener("blur", (e) =>
  validatefieldWhiteNumber(12, 1, erro_peso, e)
);
peso.addEventListener("input", (e) => validateNumberFloat(12, 1, erro_peso, e));
grasaCorp.addEventListener("blur", (e) =>
  validatefieldWhiteNumber(13, 2, error_grasaC, e)
);
grasaCorp.addEventListener("input", (e) =>
  validateNumberFloat(13, 2, error_grasaC, e)
);
aguaPorcentaje.addEventListener("blur", (e) =>
  validatefieldWhiteNumber(14, 3, error_agua, e)
);
aguaPorcentaje.addEventListener("input", (e) =>
  validateNumberFloat(14, 3, error_agua, e)
);
masaMuscular.addEventListener("blur", (e) =>
  validatefieldWhiteNumber(15, 4, error_masa, e)
);
masaMuscular.addEventListener("input", (e) =>
  validateNumberFloat(15, 4, error_masa, e)
);
valorFisico.addEventListener("blur", (e) =>
  validatefieldWhiteNumber(16, 5, error_Vfisico, e)
);
valorFisico.addEventListener("input", (e) =>
  validateNumberFloat(16, 5, error_Vfisico, e)
);
metabolismoB.addEventListener("blur", (e) =>
  validatefieldWhiteNumber(17, 6, errorMetabolismoB, e)
);
metabolismoB.addEventListener("input", (e) =>
  validateNumberFloat(17, 6, errorMetabolismoB, e)
);
edadMetabolica.addEventListener("blur", (e) =>
  validatefieldWhiteNumber(18, 7, error_edadM, e)
);
edadMetabolica.addEventListener("input", (e) =>
  validateNumberFloat(18, 7, error_edadM, e)
);
masaOsea.addEventListener("blur", (e) =>
  validatefieldWhiteNumber(19, 8, error_masaOs, e)
);
masaOsea.addEventListener("input", (e) =>
  validateNumberFloat(19, 8, error_masaOs, e)
);
GVisceral.addEventListener("blur", (e) =>
  validatefieldWhiteNumber(20, 9, error_visceral, e)
);
GVisceral.addEventListener("input", (e) =>
  validateNumberFloat(20, 9, error_visceral, e)
);

//ULTIMO FORMULARIO, MEDIDAS CORPORALES
window.addEventListener("load", function () {
  txtEstatura.addEventListener("change", function () {
    if (this.value) {
      estatura2.value = txtEstatura.value;
      estatura2.style.borderColor = "#00ff00";
      medidaB[10].classList.add("medidat");
    }
  });
});

estatura2.addEventListener("input", (e) =>
  validateNumberFloat(21, 10, error_est2, e)
);

pectoral.addEventListener("blur", (e) =>
  validatefieldWhiteNumber(22, 11, erro_pectoral, e)
);
pectoral.addEventListener("input", (e) =>
  validateNumberFloat(22, 11, erro_pectoral, e)
);
dorsal.addEventListener("blur", (e) =>
  validatefieldWhiteNumber(23, 12, error_dorsal, e)
);
dorsal.addEventListener("input", (e) =>
  validateNumberFloat(23, 12, error_dorsal, e)
);
biceps.addEventListener("blur", (e) =>
  validatefieldWhiteNumber(24, 13, error_biceps, e)
);
biceps.addEventListener("input", (e) =>
  validateNumberFloat(24, 13, error_biceps, e)
);

antebrazos.addEventListener("blur", (e) =>
  validatefieldWhiteNumber(25, 14, error_ant, e)
);
antebrazos.addEventListener("input", (e) =>
  validateNumberFloat(25, 14, error_ant, e)
);

cintura.addEventListener("blur", (e) =>
  validatefieldWhiteNumber(26, 15, erro_cintura, e)
);
cintura.addEventListener("input", (e) =>
  validateNumberFloat(26, 15, erro_cintura, e)
);
cadera.addEventListener("blur", (e) =>
  validatefieldWhiteNumber(27, 16, error_cadera, e)
);
cadera.addEventListener("input", (e) =>
  validateNumberFloat(27, 16, error_cadera, e)
);

muslo.addEventListener("blur", (e) =>
  validatefieldWhiteNumber(28, 17, error_muslo, e)
);
muslo.addEventListener("input", (e) =>
  validateNumberFloat(28, 17, error_muslo, e)
);

pantorrilla.addEventListener("blur", (e) =>
  validatefieldWhiteNumber(29, 18, error_pant, e)
);
pantorrilla.addEventListener("input", (e) =>
  validateNumberFloat(29, 18, error_pant, e)
);

window.addEventListener("load", function () {
  txtsexo.addEventListener("change", function () {
    if (this.value == 0) {
      ocultarS[0].style.display = "none";
      ocultarS[1].style.display = "none";
      ocultarS[2].style.display = "none";
    } else {
      ocultarS[0].style.display = "";
      ocultarS[1].style.display = "";
      ocultarS[2].style.display = "";
    }
  });
});

btn_adelante2.addEventListener("click", function (e) {
  e.preventDefault();
  movPag.style.marginLeft = "-16.67%";
  progressOptions[cont - 1].classList.add("active");
  // Num[cont - 1].classList.add("active");
  // progressText[cont - 1].classList.add("active");
  // progressCheck[cont - 1].classList.add("active");
  cont += 1;
});

btn_adelante3.addEventListener("click", function (e) {
  e.preventDefault();
  movPag.style.marginLeft = "-33.33%";
  progressOptions[cont - 1].classList.add("active");
  // progressText[cont - 1].classList.add("active");
  // progressCheck[cont - 1].classList.add("active");
  cont += 1;
});

btn_adelante4.addEventListener("click", function (e) {
  e.preventDefault();
  movPag.style.marginLeft = "-50%";
  progressOptions[cont - 1].classList.add("active");
  // Num[cont - 1].classList.add("active");
  // progressText[cont - 1].classList.add("active");
  // progressCheck[cont - 1].classList.add("active");
   cont += 1;
});

btn_adelante5.addEventListener("click", function (e) {
  e.preventDefault();
  movPag.style.marginLeft = "-66.67%";
  progressOptions[cont - 1].classList.add("active");
  // Num[cont - 1].classList.add("active");
  // progressText[cont - 1].classList.add("active");
  // progressCheck[cont - 1].classList.add("active");
   cont += 1;
});
btn_adelante6.addEventListener("click", function (e) {
  e.preventDefault();
  movPag.style.marginLeft = "-83.33%";
  progressOptions[cont - 1].classList.add("active");
  // Num[cont - 1].classList.add("active");
  // progressText[cont - 1].classList.add("active");
  // progressCheck[cont - 1].classList.add("active");
   cont += 1;
});

btn_final.addEventListener("click", function (e) {
  e.preventDefault();
  progressOptions[cont - 1].classList.add("active");
  // Num[cont - 1].classList.add("active");
  // progressText[cont - 1].classList.add("active");
  // progressCheck[cont - 1].classList.add("active");
  cont += 1;
   alert("FINALIZADO");
});

// BOTONES HACIA ATRAS
btn_atras1.addEventListener("click", function (e) {
  e.preventDefault();
  movPag.style.marginLeft = "0%";
  // Num[cont - 2].classList.remove("active");
  // progressText[cont - 2].classList.remove("active");
  // progressCheck[cont - 2].classList.remove("active");
  // cont -= 1;
});

btn_atras2.addEventListener("click", function (e) {
  e.preventDefault();
  movPag.style.marginLeft = "-16.67%";
  // Num[cont - 2].classList.remove("active");
  // progressText[cont - 2].classList.remove("active");
  // progressCheck[cont - 2].classList.remove("active");
  // cont -= 1;
});

btn_atras3.addEventListener("click", function (e) {
  e.preventDefault();
  movPag.style.marginLeft = "-33.33%";
  // Num[cont - 2].classList.remove("active");
  // progressText[cont - 2].classList.remove("active");
  // progressCheck[cont - 2].classList.remove("active");
  // cont -= 1;
});

btn_atras4.addEventListener("click", function (e) {
  e.preventDefault();
  movPag.style.marginLeft = "-50%";
  // Num[cont - 2].classList.remove("active");
  // progressText[cont - 2].classList.remove("active");
  // progressCheck[cont - 2].classList.remove("active");
  // cont -= 1;
});

btn_atras5.addEventListener("click", function (e) {
  e.preventDefault();
  movPag.style.marginLeft = "-66.67%";
  // Num[cont - 2].classList.remove("active");
  // progressText[cont - 2].classList.remove("active");
  // progressCheck[cont - 2].classList.remove("active");
  // cont -= 1;
});

// const AlertaFormValidacion = (e) => {
//   e.preventDefault();
//   Swal.fire({
//     title: "Error",
//     text: "Porfavor valide esa su mierda.",
//     imageUrl: "https://unsplash.it/400/200",
//     imageWidth: 400,
//     imageHeight: 200,
//     imageAlt: "Custom image",
//   });
//   console.log("alerta");
// };

// submitController = () => {
//   var boole;
//   if (
//     errores.txtnombresCliente ||
//     errores.txtxapellidoCliente ||
//     errores.txtcorreoCliente ||
//     errores.txtfechaNacimiento ||
//     errores.txtEstatura ||
//     errores.txtsexo ||
//     errores.txtTelefono ||
//     errores.txtnombresEmergencia ||
//     errores.txtapellidosEmergencia ||
//     errores.txttelefonoEmergencia
//   ) {
//     Siguiente.toggleAttribute("disabled", true);
//   } else {
//     Siguiente.toggleAttribute("disabled", false);
//   }
// };

// Siguiente.addEventListener("click", (e) => AlertaFormValidacion(e));
// Siguiente.addEventListener("click", function (e) {
//   e.preventDefault();

//   Swal.fire({
//   title: "Error",
//     text: "Porfavor valide esa su mierda.",
//     imageUrl: "https://unsplash.it/400/200",
//     imageWidth: 400,
//     imageHeight: 200,
//     imageAlt: "Custom image",
//   });
// });

btn_cancelar.addEventListener("click", function (e) {
  e.preventDefault();

  Swal.fire({
    title: "¿Desea cancelar el registro?",
    text: "Se perderán los datos, si es que ya llenó algunos.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#0072ff",
    cancelButtonColor: "#D2122E",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Sí, deseo salir",
  }).then((result) => {
    if (result.value) {
      location.reload();
      limpiar();
    }
  });
});

function limpiar() {
  txtnombresCliente.value = "";
  txtxapellidoCliente.value = "";
  txtcorreoCliente.value = "";
  txtfechaNacimiento.value = "";
  txtEstatura.value = "";
  txtTelefono.value = "";
  txtsexo.value = -1;
  edad.value = "";
  fechaInicio.value = "";
  txtnombresEmergencia.value = "";
  txtapellidosEmergencia.value = "";
  txttelefonoEmergencia.value = "";
}
