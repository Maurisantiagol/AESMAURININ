let formulario = document.getElementById("formulario");

function Cifrado(event) {
    var Password = formulario.Password.value.length;
    const contenido = document.getElementById("subir_archivo");

    if(document.getElementById('128').checked == true){
        if (Password == 16) {
            if(contenido.value == "") {
                alert("Necesitas añadir un archivo valido para cifrar");
                formulario.setAttribute("action", "/index");
            }else{
            formulario.setAttribute("action", "/cifrar");
            }
        } else {
            alert("ingrese una contraseña de 16 caracteres ni mas ni menos");
            formulario.setAttribute("action", "/index");
    
        }
    }else
    if(document.getElementById('192').checked == true){
        if (Password == 24) {
            if(contenido.value == "") {
                alert("Necesitas añadir un archivo valido para cifrar");
                formulario.setAttribute("action", "/index");
            }else{
            formulario.setAttribute("action", "/cifrar");
            }
    
        } else {
            alert("ingrese una contraseña de 24 caracteres ni mas ni menos");
            formulario.setAttribute("action", "/index");
    
        }
    }else
    if(document.getElementById('256').checked == true){
        if (Password == 32) {
            if(contenido.value == "") {
                alert("Necesitas añadir un archivo valido para cifrar");
                formulario.setAttribute("action", "/index");
            }else{
            formulario.setAttribute("action", "/cifrar");
            }
    
        } else {
            alert("ingrese una contraseña de 32 caracteres ni mas ni menos");
            formulario.setAttribute("action", "/index");
    
        }
    }
    


    /*
    if (Password == 8) {
        formulario.setAttribute("action", "/cifrar");

    } else {
        alert("ingrese una contraseña de 8 caracteres ni mas ni menos");
        formulario.setAttribute("action", "/index");

    }*/
}
function Decifrado(event) {
    var Password = formulario.Password.value.length;
    const contenido = document.getElementById("subir_archivo");


    if(document.getElementById('128').checked == true){
        if (Password == 16) {
            if(contenido.value == "") {
                alert("Necesitas añadir un archivo valido para cifrar");
                formulario.setAttribute("action", "/index");
            }else{
            formulario.setAttribute("action", "/descifrar");
            }
    
        } else {
            alert("ingrese una contraseña de 16 caracteres ni mas ni menos");
            formulario.setAttribute("action", "/index");
    
        }
    }else
    if(document.getElementById('192').checked == true){
        if (Password == 24) {
            if(contenido.value == "") {
                alert("Necesitas añadir un archivo valido para cifrar");
                formulario.setAttribute("action", "/index");
            }else{
            formulario.setAttribute("action", "/descifrar");
            }
    
        } else {
            alert("ingrese una contraseña de 24 caracteres ni mas ni menos");
            formulario.setAttribute("action", "/index");
    
        }
    }else
    if(document.getElementById('256').checked == true){
        if (Password == 32) {
            if(contenido.value == "") {
                alert("Necesitas añadir un archivo valido para cifrar");
                formulario.setAttribute("action", "/index");
            }else{
            formulario.setAttribute("action", "/descifrar");
            }
    
        } else {
            alert("ingrese una contraseña de 32 caracteres ni mas ni menos");
            formulario.setAttribute("action", "/index");
    
        }
    }


    /* if (Password == 8) {
         formulario.setAttribute("action", "/descifrar");
     } else {
         alert("ingrese una contraseña de 8 caracteres ni mas ni menos");
         formulario.setAttribute("action", "/index");
 
     }*/

}







































































































/*
const crypto = require('crypto');
const fs = require('fs');
let archivo, mensaje;
    archivo = "prueba.txt";
    mensaje = fs. readFileSync(archivo, 'utf8');
    console.log("El contenido del txt es: ");
    console.log(mensaje);
    console.log("");
const config = {
    cryptkey: "5TGB&YHN7UJM(IK<5TGB&YHN",//24
    iv: "!QAZ2WSX"//8
};

function encryptText(text){
    //console.log(config.cryptkey);
    const cipher = crypto.createCipheriv('des-ede3-cbc', config.cryptkey, config.iv);
    let crypted = cipher.update(text,'utf8','binary');
    crypted += cipher.final('binary');
    crypted = new Buffer.from(crypted, 'binary').toString('base64');
    return crypted;
}

function decryptText(text){
    // que sea texto válido
    if (text === null || typeof text === 'undefined' || text === '') {return text;};
    text = new Buffer.from(text, 'base64').toString('binary');
    const decipher = crypto.createDecipheriv('des-ede3-cbc', config.cryptkey, config.iv);
    let dec = decipher.update(text,'binary','utf8');
    dec += decipher.final('utf8');
    return dec;
}


a = encryptText(mensaje);
console.log("Enc: " + a);

b = decryptText(a);
console.log("Dec: " + b);




*/




