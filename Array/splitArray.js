const students = [
  "Alice", "Bob", "Charlie", "Diana", "Ethan", 
  "Fiona", "George", "Hannah", "Ian", "Julia", 
  "Kevin", "Laura", "Michael", "Nina", "Oliver", 
  "Paula", "Quentin", "Rachel", "Steve", "Tina"
];

const room1 = students.slice(0, students.length/2)
const room2 = students.slice(students.length/2)


console.log(room1);
console.log(room2);