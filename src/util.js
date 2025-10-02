import emotion1 from "./img/emotion1.png";
import emotion2 from "./img/emotion2.png";
import emotion3 from "./img/emotion3.png";
import emotion4 from "./img/emotion4.png";
import emotion5 from "./img/emotion5.png";

// export function getImg(emotionId) {
//     switch (targetEmoionId) {
//     case "1":
//         return emotion1;
//     case "2":
//         return emotion2;
//     case "3":
//         return emotion3;
//     case "4":
//         return emotion4;
//     case "1":
//         return emotion5;
//     default:
//         return null;
// }

export const getEmotionImgById = (emotionId) => {
  const targetEmoionId = String(emotionId);

  switch (targetEmoionId) {
    case "1":
      return emotion1;
    case "2":
      return emotion2;
    case "3":
      return emotion3;
    case "4":
      return emotion4;
    case "5":
      return emotion5;
    default:
      return null;
  }
};

export const getFormattedDate = (targetDate) => {
  //yyyy-mm-dd 포맷 변경 함수
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1; //월 + 1 -> 올바른 월값 출력
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};

export const emotionList = [
  {
    id: 1,
    name: "완전 좋음",
    img: getEmotionImgById(1),
  },
  {
    id: 2,
    name: "좋음",
    img: getEmotionImgById(2),
  },
  {
    id: 3,
    name: "보통",
    img: getEmotionImgById(3),
  },
  {
    id: 4,
    name: "나쁨",
    img: getEmotionImgById(4),
  },
  {
    id: 5,
    name: "완전 나쁨",
    img: getEmotionImgById(5),
  },
];

//date->pivotDate->pivotDate : 10월 -> 10월1일~10월31일 사이에 속한 일기만 필터링
//getMonthRangeByDate->pivotDate가 인수로 들어오면 해당 월의 시작일과 마지막일만 반환
export const getMonthRangeByDate = (date) => {
  const beginTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getTime();
  const endTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime(); //다음달의 0일의 23시59분59초->이번달의 마지막 날
  return { beginTimeStamp, endTimeStamp };
};
