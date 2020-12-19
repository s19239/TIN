function Student(n, s, id, grades) {
    this.firstName = n;
    this.lastName = s;
    this.id = id;
    this.grades = grades;
    this.avg = 0;

    {
        let avg = 0;
        let count = 0;
        for (i in this.grades) {
            avg += this.grades[i];
            count++;
        }
        avg = avg / count;
        this.avg = avg.toPrecision(2);
    }

    this.getInfo = function () {
        console.log(`Firstname: ${this.firstName}\nLastname: ${this.lastName}\nId: ${this.id}\nAvg grade: ${this.avg}`);
    }

    this.getAvg = function () {
        return this.avg;
    }

    this.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    }

    this.setFullName = function (name) {
        let n = name.split(' ');
        this.firstName = fn[0] || '';
        this.lastName = fn[1] || '';
    }

}

s1 = new Student('Aliia', 'Baimuratova', 's19239', [4, 5, 5, 5, 4, 5])


s1.getInfo();
console.log(s1.getAvg());
console.log(s1.getFullName());
console.log();

