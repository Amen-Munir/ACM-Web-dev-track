// a string formatted as a list of names separated by commas except for the last two names,
// which should be separated by an ampersand.
// Fpr example:
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart

const list =
    ([{ name: 'Bart' }, {name: 'Lisa'}, {name: 'Maggie'}])

    
function formatted(someString)

{
    let name = '';
    
    for (i = 0; i < list.length; i++) {
        if (list.length === 1) {
            name = list[i].name;
            return name;
        }
    if (i === list.length - 2) {
        name += list[i].name;
        
    }
   else  if (i === list.length - 1)
        name += ' & '+list[i].name;
    else
        name += list[i].name + ',';
      

    }
    return name;
}
const formattedString = formatted(list);
console.log(formattedString);
