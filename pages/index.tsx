import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { applyDefaults, BiscuitBoard, BiscuitEditor } from "../src";

interface Props {
  contentIDs: string[];
  contentObject: any;
}

const BiscuitIndex: NextPage<Props> = (props) => {
  const { contentIDs, contentObject } = props;
  const [isReady, setReady] = useState(false);

  console.log(contentObject);

  useEffect(() => {
    setReady(true);
  }, []);

  // console.log(props);

  return isReady ? (
    <>
      <BiscuitBoard buildParams={{ contentIDs, contentObject }} />
      <div style={{ position: "absolute", left: 0, top: 0 }}>
        <BiscuitEditor />
      </div>
    </>
  ) : (
    <div>Waiting for Client...</div>
  );
};

export default BiscuitIndex;

export const getStaticProps: GetStaticProps = () => {
  const biscuitIDs: string[] = ["biscuit_0"];
  const biscuitObject: any = {
    biscuit_0: {
      contentIDs: ["rect_0", "image_0", "eye_0", "eye_1"],
      contentObject: {
        eye_0: {
          props: {
            w2h: 1,
            outerShape: "Rect",
            innerShape: "Rect",
            innerFill: "#00f200",
            outerFill: "#f20000",
          },
          relatives: {
            r_outerSize: 0.08,
            r_x: 0.4,
            r_y: 0.3,
            r_outer2inner: 0.5,
          },
        },
        eye_1: {
          props: {
            w2h: 1,
            innerShape: "Circle",
            outerShape: "Circle",
            innerRotation: 45,

            innerFill: "#00f200",
            outerFill: "#f20000",
          },
          relatives: {
            r_outerSize: 0.08,
            r_x: 0.6,
            r_y: 0.3,
            r_outer2inner: 0.5,
          },
        },
        rect_0: {
          props: {
            rotation: 0,
            draggable: true,
            fill: "#3300ff",
            // stroke: "",
            // handleClick: (e: { target: { attr: any } }) =>
            // console.log(e.target.attr),
          },
          relatives: {
            r_x: 0.5,
            r_y: 0.5,
            r_width: 2,
            r_height: 1,
          },
        },
        image_0: {
          props: {
            rotation: 0,
          },
          relatives: {
            r_x: 0.5,
            r_y: 0.5,
            r_width: 1,
            r_height: 1,
          },
        },
      },
    },
    biscuit_1: {
      contentIDs: ["image_0", "eye_0", "eye_1"],
      contentObject: {
        eye_0: {
          props: {
            w2h: 1,
            outerShape: "Rect",
            innerShape: "Rect",
            innerFill: "#00f200",
            outerFill: "#f20000",
          },
          relatives: {
            r_outerSize: 0.08,
            r_x: 0.4,
            r_y: 0.3,
            r_outer2inner: 0.5,
          },
        },
        eye_1: {
          props: {
            w2h: 1,
            innerShape: "Circle",
            outerShape: "Circle",
            innerRotation: 45,

            innerFill: "#00f200",
            outerFill: "#f20000",
          },
          relatives: {
            r_outerSize: 0.08,
            r_x: 0.6,
            r_y: 0.3,
            r_outer2inner: 0.5,
          },
        },
        rect_0: {
          props: {
            rotation: 0,
            draggable: true,
            fill: "#3300ff",
            // stroke: "",
            // handleClick: (e: { target: { attr: any } }) =>
            // console.log(e.target.attr),
          },
          relatives: {
            r_x: 0.5,
            r_y: 0.5,
            r_width: 2,
            r_height: 1,
          },
        },
        image_0: {
          props: {
            rotation: 0,
            src: "https://res.cloudinary.com/drk1nv578/image/upload/t_optimized/v1612050978/biscuitland/biscuitnoshadow_e49tg3.png",
          },
          relatives: {
            r_x: 0.5,
            r_y: 0.5,
            r_width: 1,
            r_height: 1,
          },
        },
      },
    },
  };
  //https://www.themarysue.com/wp-content/uploads/2020/04/meme-jealous-girlfriend-background.jpeg
  //https://pbs.twimg.com/media/EUfR-F1XQAAT__R?format=jpg&name=small
  const contentIDs: string[] = [
    "rect_0",
    // "image_0",
    // "image_1",
    "text_0",
    "text_1",
    "text_2",
    "text_3",
    "text_4",
    "text_5",
    "text_6",
    "text_7",
    "text_8",
    "text_9",
    // "eye_0",
    // "eye_1",
  ];
  const contentObject: any = {
    eye_0: {
      props: {
        // w2h: 1,
        // outerShape: "Rect",
        // innerShape: "Rect",
        // innerFill: "#000000",
        // outerFill: "#ffffff",
        draggable: true,
      },
      relatives: {
        r_outerSize: 0.08,
        r_x: 0.4,
        r_y: 0.3,
        r_outer2inner: 0.5,
      },
    },
    eye_1: {
      props: {
        // w2h: 1,
        // innerShape: "Circle",
        // outerShape: "Circle",
        // innerRotation: 45,
        // innerFill: "#00f200",
        // outerFill: "#f20000",
        draggable: true,
      },
      relatives: {
        r_outerSize: 0.08,
        r_x: 0.6,
        r_y: 0.3,
        r_outer2inner: 0.5,
      },
    },
    rect_0: {
      props: {
        rotation: 0,
        draggable: true,
        fill: "#ef5e5d",

        // stroke: "",

        // handleClick: (e: { target: { attr: any } }) =>
        // console.log(e.target.attr),
      },
      relatives: {
        r_x: 0.5,
        r_y: 0.5,
        r_width: 0.7,
        r_height: 0.95,
      },
    },
    image_0: {
      props: {
        rotation: 0,
        draggable: true,
        src: "https://pbs.twimg.com/media/EUfR-F1XQAAT__R?format=jpg&name=medium",
      },
      relatives: {
        r_x: 0.5,
        r_y: 0.5,
        r_width: 1,
        r_height: 1,
      },
    },
    image_1: {
      props: {
        rotation: 0,
        draggable: true,
        src: "https://res.cloudinary.com/drk1nv578/image/upload/t_optimized/v1612050978/biscuitland/biscuitnoshadow_e49tg3.png",
      },
      relatives: {
        r_x: 0.5,
        r_y: 0.5,
        r_width: 1,
        r_height: 1,
      },
    },
    text_0: {
      relatives: {
        r_x: 0.5,
        r_y: 0.17,
        r_width: 0.65,
        r_height: 0.25,
      },
      props: {
        fontFamily: "Bebas Neue",
        fontStyle: "",
        textContent: "GOODBOY",
        fill: "#439ec5",
        // strokeWidthFactor: 0,
        strokeWidthFactor: 0.01,
        stroke: "#000000",
        // strokeEnabled: false,
      },
    },
    text_1: {
      relatives: {
        r_x: 0.31,
        r_y: 0.055,
        r_width: 0.3,
        r_height: 0.03,
      },
      props: {
        fontFamily: "roboto",
        strokeEnabled: false,
        fontStyle: "",
        textContent: "The #1 Dog Magazine for Dogs",
        fill: "#000000",
      },
    },
    text_2: {
      relatives: {
        r_x: 0.275,
        r_y: 0.36,
        r_width: 0.2,
        r_height: 0.2,
      },
      props: {
        fontFamily: "Bebas Neue",
        fontStyle: "",
        textContent: "10 FOODS YOUR DOG CRAVES",
        fill: "#f6f6af",
        strokeWidthFactor: 0.02,
        stroke: "#000000",
        align: "left",
      },
    },
    text_3: {
      relatives: {
        r_x: 0.31,
        r_y: 0.49,
        r_width: 0.2,
        r_height: 0.05,
      },
      props: {
        fontFamily: "Bebas Neue",
        fontStyle: "",
        textContent: "Plus...",
        fill: "#ffffff",
        strokeWidthFactor: 0.02,
        stroke: "#000000",
        align: "left",
        strokeEnabled: false,
      },
    },
    text_4: {
      relatives: {
        r_x: 0.275,
        r_y: 0.59,
        r_width: 0.2,
        r_height: 0.2,
      },
      props: {
        fontFamily: "Roboto Condensed",
        fontStyle: "bold",
        textContent: "Why 80% of Dogs Hate Mustard",
        fill: "#f6f6af",
        strokeWidthFactor: 0.02,
        stroke: "#000000",
        align: "left",
      },
    },
    text_5: {
      relatives: {
        r_x: 0.7,
        r_y: 0.4,
        r_width: 0.2,
        r_height: 0.15,
      },
      props: {
        fontFamily: "Roboto Condensed",
        fontStyle: "bold",
        textContent: "Good Boy of the Week Winner",
        fill: "#f6f6af",
        strokeWidthFactor: 0.02,
        stroke: "#000000",
        align: "left",
      },
    },
    text_6: {
      relatives: {
        r_x: 0.7,
        r_y: 0.3,
        r_width: 0.16,
        r_height: 0.06,
      },
      props: {
        fontFamily: "Bebas Neue",
        fontStyle: "",
        textContent: "Revealed...",
        fill: "#ffffff",
        strokeWidthFactor: 0.02,
        stroke: "#000000",
        align: "right",
        strokeEnabled: false,
      },
    },
    text_7: {
      relatives: {
        r_x: 0.7,
        r_y: 0.56,
        r_width: 0.2,
        r_height: 0.15,
      },
      props: {
        fontFamily: "Roboto Condensed",
        fontStyle: "bold",
        textContent: "Our Guide to getting rid of the UPS man for good!",
        fill: "#f6f6af",
        strokeWidthFactor: 0.02,
        stroke: "#000000",
        align: "left",
      },
    },
    text_8: {
      relatives: {
        r_x: 0.63,
        r_y: 0.69,
        r_width: 0.25,
        r_height: 0.06,
      },
      props: {
        fontFamily: "Bebas Neue",
        fontStyle: "",
        textContent: "AND!!",
        fill: "#ffffff",
        strokeWidthFactor: 0.02,
        stroke: "#000000",
        align: "left",
        strokeEnabled: false,
      },
    },
    text_9: {
      relatives: {
        r_x: 0.67,
        r_y: 0.72,
        r_width: 0.3,
        r_height: 0.15,
      },
      props: {
        fontFamily: "Roboto Condensed",
        fontStyle: "bold",
        textContent: "Canada's Hottest Dogs",
        fill: "#f6f6af",
        strokeWidthFactor: 0.02,
        stroke: "#000000",
        align: "right",
      },
    },
  };

  biscuitIDs.forEach((biscuitID) => {
    let biscuit = biscuitObject[biscuitID];
    let { contentIDs, contentObject } = biscuit;
    contentIDs.forEach((id: string) => {
      let item = contentObject[id];
      let mergedWithDefaults = applyDefaults({ contentID: id, ...item });
      biscuitObject[biscuitID].contentObject[id] = mergedWithDefaults;
    });
  });

  contentIDs.forEach((id: string) => {
    let item = contentObject[id];
    let mergedWithDefaults = applyDefaults({ contentID: id, ...item });

    contentObject[id] = mergedWithDefaults;
  });

  console.log(contentObject);

  return {
    props: {
      contentObject,
      contentIDs,
      biscuitObject,
      biscuitIDs,
    },
  };
};
