//atm pincode validation using regular expression

const regexp = /^[0-9]{4,6}$/;
const atmPin = 1234;
function isValid(pin)
{
    if(regexp.test(pin))
        return true;
    else
        return false;
}
const isvalid = isValid(atmPin);
console.log(isvalid);