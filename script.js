// script.js : 내 영화 평점 통계(콘솔판)
// // 작성자 : 장성민 (2351044)
const titles = ["제목1", "제목2", "제목3", "제목4", "제목5"];
const ratings = [8.4, 7.9, 9.0, 6.5, 8.1];
const years = [2014, 2019, 1994, 2023, 2008];
let sum = 0;

//합계 구하기
for (let i = 0; i < ratings.length; i++) {
  sum = sum + ratings[i];
}
console.log("합계:", sum);

//평균 구하기
const average = sum / ratings.length;
console.log("평균:", average);

//최댓값 구하기
let max = ratings[0];
let maxIndex = 0;
let count = 0;
for (let i = 0; i < ratings.length; i++) {
  if (ratings[i] >= 8) count++; //평점 8이상의 개수
  if (ratings[i] > max) {
    //최대 평점/그 인덱스 구하기
    max = ratings[i];
    maxIndex = i;
  }
}
console.log("최고:", titles[maxIndex], max);
console.log("8점 이상:", count + "편");
