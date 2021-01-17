# Yohane Events
Ini adalah direktori berisikan event yohane.

## FAQ

Q: Nanti kalo mau nge listen event lain, gimana caranya?
<br>
A: Bikin file baru, namanya terserah. Terus, pake template event ini
```javascript
module.exports = {
  name: "namaEvent", //NAMA EVENT DISESUAIKAN DENGAN YANG ADA DI DOCS DJS
  run: async (client, ...args) => {
    //Code taruh disini.
    //parameter client: client dari bot tersebut
    //parameter ...args: isi dari ...args ini bergantung kepada properti yang ada di event tersebut. Apabila anda bingung, bisa di cek di docs DJS
  }
}
```
