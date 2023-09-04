
//function greetthestudent(studentname){
    //return `Hello there $(studentname)`;
// }  
   // fat arrow function

//const greetthestudent = function (studentname){//parameter //anonymous function //expression
    //return `Hello there ${studentname}`;
//}
//const greetthestudent = (studentname)=>{//parameter //anonymous function //expression
  //  return `Hello there ${studentname}`;
//}

const greetthestudent = studentname => `Hello there ${studentname}`;
//const fullname = function(firstname, middlename, lastname){
  //  return `${lastname}, ${middlename}, ${firstname}`;
//}
//const fullname = (firstname, middlename, lastname)=>{
  //  return `${lastname}, ${middlename}, ${firstname}`;
//}
const fullname = (firstname, middlename, lastname) =>`${lastname}, ${middlename}, ${firstname}`;


const titlename = fullname('Mary', 'R', 'Jane');
console.log(titlename)


//const student = 'Mary Jane';
//const greet = greetthestudent(student); //argument
//console.log(greet);

//console.log(message+ ' ' +studentname);
//console.log(message+ ' ' +studentname2);


   



