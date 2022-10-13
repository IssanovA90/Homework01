let usb = +prompt("Укажите обьем флешки в ГБ");
const flash = 820;
let result = usb * 1000 / 820
alert(Math.floor(result));