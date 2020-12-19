const laptop = {
brand : 'acer',
color : 'black',
price : 1000,
available: true,
 changeprice: function(num) { 
   this.price=num;
  console.log('New price is' + this.price);
  },
  changeA: function(bool) { 
   this.available=bool;
  console.log('This obj is available ' + this.available);
  }
};
console.log(laptop);
laptop.changeprice(900);
laptop.changeA(false);
console.log(laptop);

function showProps(obj) {
  const args = Object.keys(obj)
    for (i in args)
        if (typeof obj[args[i]] === 'function')
            console.log(obj[args[i]])
        else console.log(`(${typeof obj[args[i]]})${args[i]}: ${obj[args[i]]}`)
}
showProps(laptop);