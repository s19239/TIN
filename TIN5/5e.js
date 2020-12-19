class Student {
    constructor(n, s, id, grades) {
        this.firstName = n;
        this.lastName = s;
        this.id = id;
        this.grades = grades;
        this.avg = this.calculateAvg();
    }

    getinfo() {
        console.log(`Firstname: ${this.firstName}\nLastname: ${this.lastName}\nId: ${this.id}\nAvg grade: ${this.avg}`);
    };

    get Avg() {
        return this.avg;
    };

    get FullName() {
        return this.firstName + ' ' + this.lastName;
    };

    set FullName(name) {
        let fn = name.split(' ');
        this.firstName = fn[0] || '';
        this.lastName = fn[1] || '';
    };

    calculateAvg() {
        let avg = 0;
        for (let i = 0; i < this.grades.length; i++) {
            avg += this.grades[i];
        }
        avg = avg / this.grades.length;
        return avg.toPrecision(2);
    }
}

s1 = new Student('Aliia', 'Baimuratova', 's19239', [4, 5, 4, 5, 4, 5])


s1.getinfo();
console.log(s1.Avg);
console.log(s1.FullName);
console.log();
s1.FullName='Alina Zakirova';
console.log(s1.FullName);

