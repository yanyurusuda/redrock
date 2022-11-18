const stu = {
    name: 'XING',
    hobby: ['play', 'run', 'sing'],
    address: {
        school: 'cqupt',
        home: 'ChongQing'
    },
    title: ['student',{year:2022}],
    skills: {
        speak() {
            this.name = 'LESLIE';
        }
    }
}
const {name,hobby,title} = stu;
const [h1,h2,h3] = hobby ;
const {address:{home : HOME } } = stu ;
const [,yea] = title;
const { year } =yea;
console.log(name);
console.log(h1,h2,h3);
console.log(HOME); 
console.log(year);
