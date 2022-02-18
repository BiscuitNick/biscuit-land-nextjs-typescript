import type { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";

import { applyDefaults } from "@biscuitnick/biscuit-library";
import axios from "axios";

import BiscuitBoard from "../src/components/Konva/Boards/BiscuitBoard";

const APITOKEN = process.env.APITOKEN;

interface Props {
  contentIDs: string[];
  contentObject: any;
}

const BiscuitIndex: NextPage<Props> = (props) => {
  const { contentIDs, contentObject } = props;
  const [isReady, setReady] = useState(false);

  console.log(contentIDs, contentObject);

  useEffect(() => {
    setReady(true);
  }, []);

  return isReady ? (
    <>
      <BiscuitBoard contentIDs={contentIDs} contentObject={contentObject} />
    </>
  ) : (
    <div>Waiting for Client...</div>
  );
};

export default BiscuitIndex;

export async function getStaticProps<GetStaticProps>() {
  // async function fetchData() {
  const response = await axios.get(
    "http://localhost:1337/api/biscuits?populate=*",
    {
      headers: {
        Authorization: `Bearer ${APITOKEN}`,
      },
    }
  );

  const {
    data: { data },
  } = response;
  const { contentIDs, contentArray } = data[0].attributes;

  const contentObject: any = {};
  contentArray.forEach((item: any) => {
    const { contentID } = item;
    Object.keys(item).forEach((key) => {
      if (item[key] === null) {
        delete item[key];
      }
    });
    const mergeDefaults = applyDefaults(item);
    contentObject[contentID] = { ...mergeDefaults, contentID };
  });

  // contentIDs.forEach((id: string) => {
  //   let item = contentObject[id];
  //   let mergedWithDefaults = applyDefaults({ contentID: id, ...item });

  //   contentObject[id] = mergedWithDefaults;
  // });

  return {
    props: {
      contentObject,
      contentIDs,
    },
  };
}

// const contentIDs: string[] = [
//   "rect_0",
//   //   "image_0",
//   "image_1",
//   "text_0",
//   "text_1",
//   "text_2",
//   "text_3",
//   "text_4",
//   "text_5",
//   "text_6",
//   "text_7",
//   "text_8",
//   "text_9",
//   // "image_1",
//   // "eye_0",
//   // "eye_1",
// ];
// const contentObject: any = {
//   eye_0: {
//     // w2h: 1,
//     // outerShape: "Rect",
//     // innerShape: "Rect",
//     // innerFill: "#000000",
//     // outerFill: "#ffffff",
//     draggable: true,
//     r_outerSize: 0.08,
//     r_x: 0.4,
//     r_y: 0.3,
//     r_outer2inner: 0.5,
//   },
//   eye_1: {
//     // w2h: 1,
//     // innerShape: "Circle",
//     // outerShape: "Circle",
//     // innerRotation: 45,
//     // innerFill: "#00f200",
//     // outerFill: "#f20000",
//     draggable: true,
//     r_outerSize: 0.08,
//     r_x: 0.6,
//     r_y: 0.3,
//     r_outer2inner: 0.5,
//   },
//   rect_0: {
//     rotation: 0,
//     draggable: true,
//     fill: "#ef5e5d",
//     r_x: 0.5,
//     r_y: 0.5,
//     r_width: 0.7,
//     r_height: 0.95,
//   },
//   image_0: {
//     rotation: 0,
//     draggable: true,
//     src: "https://pbs.twimg.com/media/EUfR-F1XQAAT__R?format=jpg&name=medium",
//     r_x: 0.5,
//     r_y: 0.5,
//     r_width: 0.5,
//     r_height: 0.5,
//   },
//   image_1: {
//     rotation: 0,
//     draggable: true,
//     src: "https://res.cloudinary.com/drk1nv578/image/upload/t_optimized/v1612050978/biscuitland/biscuitnoshadow_e49tg3.png",
//     r_x: 0.5,
//     r_y: 0.5,
//     r_width: 0.5,
//     r_height: 0.5,
//   },
//   text_0: {
//     r_x: 0.5,
//     r_y: 0.17,
//     r_width: 0.65,
//     r_height: 0.25,
//     fontFamily: "Bebas Neue",
//     fontStyle: "",
//     textContent: "GOODBOY",
//     fill: "#439ec5",
//     // strokeWidthFactor: 0,
//     strokeWidthFactor: 0.01,
//     stroke: "#000000",
//     draggable: true,

//     // strokeEnabled: false,
//   },
//   text_1: {
//     r_x: 0.31,
//     r_y: 0.055,
//     r_width: 0.3,
//     r_height: 0.03,
//     fontFamily: "roboto",
//     strokeEnabled: false,
//     fontStyle: "",
//     textContent: "The #1 Dog Magazine for Dogs",
//     fill: "#000000",
//     draggable: true,
//   },
//   text_2: {
//     r_x: 0.275,
//     r_y: 0.36,
//     r_width: 0.2,
//     r_height: 0.2,
//     fontFamily: "Bebas Neue",
//     fontStyle: "",
//     textContent: "10 FOODS YOUR DOG CRAVES",
//     fill: "#f6f6af",
//     strokeWidthFactor: 0.02,
//     stroke: "#000000",
//     align: "left",
//     draggable: true,
//   },
//   text_3: {
//     r_x: 0.31,
//     r_y: 0.49,
//     r_width: 0.2,
//     r_height: 0.05,
//     fontFamily: "Bebas Neue",
//     fontStyle: "",
//     textContent: "Plus...",
//     fill: "#ffffff",
//     strokeWidthFactor: 0.02,
//     stroke: "#000000",
//     align: "left",
//     strokeEnabled: false,
//     draggable: true,
//   },
//   text_4: {
//     r_x: 0.275,
//     r_y: 0.59,
//     r_width: 0.2,
//     r_height: 0.2,
//     fontFamily: "Roboto Condensed",
//     fontStyle: "bold",
//     textContent: "Why 80% of Dogs Hate Mustard",
//     fill: "#f6f6af",
//     strokeWidthFactor: 0.02,
//     stroke: "#000000",
//     align: "left",
//     draggable: true,
//   },
//   text_5: {
//     r_x: 0.7,
//     r_y: 0.4,
//     r_width: 0.2,
//     r_height: 0.15,
//     fontFamily: "Roboto Condensed",
//     fontStyle: "bold",
//     textContent: "Good Boy of the Week Winner",
//     fill: "#f6f6af",
//     strokeWidthFactor: 0.02,
//     stroke: "#000000",
//     align: "left",
//     draggable: true,
//   },
//   text_6: {
//     r_x: 0.7,
//     r_y: 0.3,
//     r_width: 0.16,
//     r_height: 0.06,
//     fontFamily: "Bebas Neue",
//     fontStyle: "",
//     textContent: "Revealed...",
//     fill: "#ffffff",
//     strokeWidthFactor: 0.02,
//     stroke: "#000000",
//     align: "right",
//     strokeEnabled: false,
//   },
//   text_7: {
//     r_x: 0.7,
//     r_y: 0.54,
//     r_width: 0.2,
//     r_height: 0.15,
//     fontFamily: "Roboto Condensed",
//     fontStyle: "bold",
//     textContent: "Guide to getting rid of the UPS man for good!",
//     fill: "#f6f6af",
//     strokeWidthFactor: 0.02,
//     stroke: "#000000",
//     align: "left",
//     draggable: true,
//   },
//   text_8: {
//     r_x: 0.72,
//     r_y: 0.64,
//     r_width: 0.25,
//     r_height: 0.06,
//     fontFamily: "Bebas Neue",
//     fontStyle: "",
//     textContent: "AND!!",
//     fill: "#ffffff",
//     strokeWidthFactor: 0.02,
//     stroke: "#000000",
//     align: "left",
//     strokeEnabled: false,
//     draggable: true,
//   },
//   text_9: {
//     r_x: 0.67,
//     r_y: 0.72,
//     r_width: 0.3,
//     r_height: 0.15,
//     fontFamily: "Roboto Condensed",
//     fontStyle: "bold",
//     textContent: "Worlds Sexiest Dogs!s",
//     fill: "#f6f6af",
//     strokeWidthFactor: 0.02,
//     stroke: "#000000",
//     align: "left",
//   },
// };
