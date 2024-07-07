//23. # studentlərin ortalama score'nu yeni bir arrayda yığın

let students = [
    { name: "Ali", scores: [90, 85, 92] },
    { name: "Davud", scores: [100, 100, 100] },
    { name: "Mammal", scores: [75, 80, 85] },
    { name: "Camil", scores: [90, 95, 85] }
];

function calculateAverageScores(students) {
    return students.map(student => {
        let total = student.scores.reduce((acc, score) => acc + score, 0);
        let average = total / student.scores.length;
        return average;
    });
}
console.log(calculateAverageScores(students));