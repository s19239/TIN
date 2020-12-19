function Student(n, s, id, grades) {
    this.firstName = n;
    this.lastName = s;
    this.id = id;
    this.grades = grades;

    this.getStudent = function () {
        let avg = 0;
        let count = 0;
        for (i in this.grades) {
            avg += this.grades[i];
            count++;
        }
        avg = avg / count;
        console.log(`Firstname: ${this.firstName}\nLastname: ${this.lastName}\nId: ${this.id}\nAvg grades: ${avg.toPrecision(2)}\n`);
    }
}

student1 = new Student('Aliia', 'Baimuratova', 's19239', [5,4,3,5,5,4,4,5])
student2 = new Student('Piotr', 'Pawlowski', 's19256', [4,4,5,5,5,4,4,4])


student1.getStudent();
student2.getStudent();
