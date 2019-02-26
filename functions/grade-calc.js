// Strudent's score, Total possible score
// 15/20 = 70
// You got a C (75%)
// 90-100 A, 80-89 B, 70-79 C, 60-69 D, 0-59 F

const calcGrade = function (studentScore, totalScore) {
  const percentage = ( studentScore / totalScore ) * 100
  let grade = ''
  if (percentage >= 90 && percentage <=100){
    grade = 'A'
  } else if (percentage >= 80 && percentage <= 89){
    grade = 'B'
  } else if (percentage >= 70 && percentage <= 79){
    grade = 'C'
  } else if (percentage >= 60 && percentage <= 69){
    grade = 'D'
  } else if (percentage >= 0 && percentage <= 59){
    grade = 'F'
  } else {
    return 'Invalid entries'
  }
  return `You got a ${grade} (${percentage}%)`
}

const testScore = calcGrade(92, 100)
console.log(testScore)