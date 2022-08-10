const qrcode = require('qrcode-terminal'); // Api QR Code
const { Client } = require('whatsapp-web.js'); // Api 
const client = new Client(); 

client.on('qr', qr => {
    qrcode.generate(qr, {small: true}); // Geração do QR 
});



numeros = ['5511945274604', '5511945274603'] //Array de numeros
mensagem = ['Ola','Como você esta', 'Eu estou bem']  //Aray de mensagens




client.on('ready', () => {
    console.log('Client is ready!');
    for (let index1 = 0; index1 < numeros.length; index1++) {

        for (let index = 0; index < mensagem.length; index++) {
            client.sendMessage(numeros[index1] + "@c.us", mensagem[index]); 
        }
    }
});
client.initialize();
