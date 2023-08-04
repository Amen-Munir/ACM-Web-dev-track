
function callback(value)
{
    if (typeof value === "number" && value > 0)
        return true;
   
}
const varArr = [1, 2, "thi",-3];
const newArray = varArr.filter(callback);
console.log(newArray);
