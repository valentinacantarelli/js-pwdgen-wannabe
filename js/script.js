alert('Siamo qui per aiutarti a creare la password dei tuoi sogni! Dovrai rispondere solo a qualche domanda...iniziamo!')

var nome = prompt ('Dicci il tuo nome');

var cognome = prompt ('Ora il tuo cognome');

var colore  = prompt ('Ora invece il tuo colore preferito');

var animale = prompt ('E per ultimo il tuo animale preferito')

var password = nome + cognome + colore + animale;

document.getElementById ('psw').innerHTML += password + ('40') ;