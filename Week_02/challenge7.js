function checkDirection(arr) {
    var north = 0;
    var south = 0;
    var east = 0;
    var west = 0;
    if (arr.length === 10) {
        for (i = 0; i < arr.length; i++) {
            switch (arr[i]) {
                case 'n':
                    north++;
                    break;
                case 's':
                    south++;
                    break;
                case 'e':
                    east++;
                    break;
                case 'w':
                    west++;
                    break;
            

            }


        }
    }
    else
        return false;
    
    if (north === south && east === west)
        return true;
    else
        return false;
}
const arr = ['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's', 'e', 'w'	];
const isvalid = checkDirection(arr);
console.log(isvalid);
