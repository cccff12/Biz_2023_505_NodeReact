import uuid from "react-uuid";
const sampleBucketList = ["개발자되기", "리액트 정복", "Spring 정복하기"];

export const bucketLoader = () => {
  // bucket에 sampleBucketList를 담아서 json 타입으로 리턴
  return { bucketList: sampleBucketList };
};

export const bucketAction = () => {
  console.log("action");
  console.log(sampleBucketList.push(uuid()));
  return sampleBucketList.push(uuid());
};
