//24. # webTechs arrayında olan elementlərin uzunluğu 4'dən böyük olanları yeni bir arraya yığın

const webTechs = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "JS",
    "Redux",
    "Node",
    "JS",
    "MongDB"
];
function filterLongTechs(techs) {
    return techs.filter(tech => tech.length > 4);
}
const longTechs = filterLongTechs(webTechs);
console.log(longTechs);