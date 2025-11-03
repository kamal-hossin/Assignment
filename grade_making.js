

function getGrade(mark) {
  let grade, gpa;

  if (mark >= 80 && mark <= 100) {
    grade = "A+";
    gpa = 5.00;
  } 
  else if (mark >= 70) {
    grade = "A";
    gpa = 4.00;
  } 
  else if (mark >= 60) {
    grade = "A-";
    gpa = 3.50;
  } 
  else if (mark >= 50) {
    grade = "B";
    gpa = 3.00;
  } 
  else if (mark >= 40) {
    grade = "C";
    gpa = 2.00;
  } 
  else if (mark >= 33) {
    grade = "D";
    gpa = 1.00;
  } 
  else if (mark >= 0) {
    grade = "F";
    gpa = 0.00;
  } 
  else {
    grade = "Invalid";
    gpa = "N/A";
  }

  return { grade, gpa };
}

let mark = 76;
let result = getGrade(mark);

console.log(`Mark: ${mark}`);
console.log(`Grade: ${result.grade}`);
console.log(`GPA: ${result.gpa}`);
