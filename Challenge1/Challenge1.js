WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'
const RSA = 'RSA'
const NAM = 'NAM'

let shipping = 0
let currency = '$'

if (location === RSA) { 
      shipping = 400  
      currency = 'R' 
} else if (location === NAM){
      shipping = 600 
      currency = currency
     } 

else {
       shipping 
       currency 
}

const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * 'NONE_SELECTED'
const batteries = 35 * 2
const pens = 5 * 'NONE_SELECTED' 



if (shoes + batteries + pens + shirts > 1000 ) {
	if (location = NAM || RSA) {
		    shipping = 0;
		}
	}


if (shipping = 0 && customers !== 1) { console.log(WARNING) }

location = 'NAM' ? console.log(FREE_WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)

customers = '1'

currency = null