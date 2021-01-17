# Yohane Commands
Ini adalah direktori berisikan command yohane.

## FAQ

Q: Kenapa ada `/**` nya?
<br>
A: Itu dipake pas saya rewrite code nya lewat Visual Studio Code. Biar intellisense(bisa dibilang auto-correct)nya muncul.

Q: Nanti kalo mau bikin command baru, gimana caranya?
<br>
A: Bikin file baru, namanya terserah. Terus, pake template command ini
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
