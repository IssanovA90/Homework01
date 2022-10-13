let summa = +prompt('сумма в кошельке?')
let chocalate =+prompt('цена шоколадки')
let result = summa / chocalate
let result1 = summa % chocalate
alert("можно купить " + (Math.floor(result)) + " шоколадок");
alert('осталось ' + result1);