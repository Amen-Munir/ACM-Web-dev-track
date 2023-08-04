// Write a function that takes a string as an argument and gives one string with
// even indexed characters in upper case and odd indexed characters in lower case.

function capatalize(anyString)
{
    var even = '';
   var  odd = '';
    for (i = 0; i<anyString.length; i++)
    {
         if(i%2 === 0)
         {
             even += anyString[i].toUpperCase();
             odd += anyString[i];
         }
        else
           { odd += anyString[i].toUpperCase();
            even += anyString[i];}
        
    }
    console.log(even + ' ' + odd);
}
capatalize('abcd');

