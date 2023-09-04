var age = 10; //int
var salary = 15.00; //double

//console.log(`The variable type of age is ${typeof age}`);
//console.log(`The variable type of salary is ${typeof salary}`);

//var name = 'John Smith';

//console.log(`The variable type of name is ${typeof name}`);
const displaygreetings = function(name, year){
    console.log( `Happy new year ${year} ${name }`)

}

//console.log(`The variable type of dislaygreetings is ${typeof displaygreetings}`);

const displaygreetingwithemoji = function(name, year){
    console.log(`😃😃 Happy new year ${year} ${name}`)
}

const greet = function(name, year, func){
    func(name,year);
}
greet('Sam', 2023, displaygreetingwithemoji);
greet('Jane', 2023, displaygreetings);