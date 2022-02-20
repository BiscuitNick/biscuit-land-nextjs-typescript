import type { NextPage } from "next";
import { useState } from "react";
import SetOrder from "../src/components/Inputs/SetOrder";
// interface Props {
//   contentIDs: string[];
//   contentObject: any;
// }

const contentObject = {
  one: { name: "one", stroke: "#00ff00" },
  two: { name: "TWO", stroke: "#ff00ff" },
  three: { name: "one", stroke: "#00ff00" },
  four: { name: "TWO", stroke: "#ff00ff" },
};

const ContentOrderIndex: NextPage = () => {
  const contentIDs = ["one", "two", "three", "four"];
  const [contentOrder, updateOrder] = useState(contentIDs.map((x, i) => i));

  return (
    <SetOrder
      contentStack={contentIDs}
      listOrder={contentOrder}
      id={"contentOrder"}
      contentObject={contentObject}
      //   contentIndex={0}aa
      update={(nums, ids) => console.log(nums.map((n) => ids[n]))}
    />
  );
};

export default ContentOrderIndex;
