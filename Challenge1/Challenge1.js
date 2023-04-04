FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'
let RSA = 'South Africa'
let NAM = 'Namibia'
let currency = null
let customers = '1'


if (location === RSA) { 
      shipping === 400 && currency === 'R' 
}
if (location === NAM){     
      shipping = 600
} else {
shipping = 800
}



let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * 2
let batteries = 35 * 2
let pens = 5 * 20

shipping = null
currency = 'R'

if (shoes + batteries + pens + shirts > 1000     ) {
	if (location = NAM && customers < 2) {
			if (location === RSA)
		    shipping = 0 || calcShipping
		}
	}

if (shipping = 0 && customers !== 1) { 
      console.log(WARNING) 
}

if (location === 'NK') {console.log(WARNING)} 
console.log('Price:', currency, shoes + batteries + pens + shirts + shipping + toys)



