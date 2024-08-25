//Closure = A function uses varible in its literal scope
let name = 'Tom';

function myFunc(){
    console.log(name);
}

name = 'andy'

myFunc();   //Output: andy

name = 'rachael'

myFunc();   //Output: rachael
