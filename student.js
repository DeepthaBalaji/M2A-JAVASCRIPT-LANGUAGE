var students = [];

var student = {
    name: 'Joan Smith',
    birthyear: 2000,
    course: 'IFT 544',
    grade:90,
    active: true,
    age: function calculate() {
        if (this.active){
        return 2023 - this.birthyear;
        }
    }

}

var student2 = {
    name: 'Andy Moore',
    birthyear: 2001,
    course: 'IFT 544',
    grade: 100,
    active: false,
    age: function() {
        if (this.active){
        return 2023 - this.birthyear;
        }
        else{
            return 0;
        }
    }
}

students.push(student);
students.push(student2);
students.forEach((item) => console.log(item.age()));

console.log(students);
//console.log(student['name']);
//console.log(student.name);
//console.log(student2.age());
//console.log(student.age());