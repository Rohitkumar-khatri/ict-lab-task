function getGrade(marks) {
  if (marks < 0 || marks > 100) {
    console.log("Invalid marks");
  } else if (marks >= 90) {
    console.log("A");
  } else if (marks >= 80) {
    console.log("B");
  } else if (marks >= 70) {
    console.log("C");
  } else if (marks >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
}

getGrade(95);
getGrade(82);
getGrade(71);
getGrade(55);
getGrade(120);
