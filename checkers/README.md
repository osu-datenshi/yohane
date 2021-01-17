# Yohane Message Checkers
Ini adalah direktori berisikan function untuk mengecek pesan yang dikirim oleh user.

## Template
```javascript
module.exports = async (client, message) => {
  //Code taruh disini.
  //parameter client: client dari bot tersebut
   //parameter message: message/pesan yang akan di cek
}
```


```javascript
module.exports = {
  name: "namaCommand", //NAMA COMMAND TIDAK BOLEH ADA SPASI, INI DIGUNAKAN UNTUK PEMANGGILAN COMMAND.
  run: async (client, message, args) => {
    //Code taruh disini.
    //parameter client: client dari bot tersebut
    //parameter message: message/pesan yang memanggil command tersebut
    //parameter args: argument yang diberikan oleh pemanggil command. Contoh, saat orang melakukan "@uwu owo ehe", maka isi dari argsnya adalah owo dan ehe.
  }
}
```
