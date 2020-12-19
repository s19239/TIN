function Student() {
    this.courses = [
        'BYT',
        'ZPR',
        'TIN'
    ];
}

function NewStudent(fn, ln, id) {
    Student.call(this);

    this.firstName = fn;
    this.lastName = ln;
    this.id = id;
}
NewStudent.prototype = new Student();

student1 = new NewStudent('Aliia', 'Baimuratova', 's19239');

console.log(student1);