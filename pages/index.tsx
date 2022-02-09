import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Biscuit from "../src/components/Biscuit";
import { applyDefaults } from "../src/lib/defaults";
import { useSetRecoilState } from "recoil";

interface Props {
  contentIDs: string[];
  contentObject: any;
}

const BiscuitIndex: NextPage<Props> = (props) => {
  const { contentIDs, contentObject } = props;

  console.log(props);

  return <Biscuit buildParams={{ contentIDs, contentObject }} />;
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

  const contentIDs: string[] = ["rect_0", "image_0", "eye_0", "eye_1"];
  const contentObject: any = {
    eye_0: {
      props: {
        w2h: 1,
        outerShape: "Rect",
        innerShape: "Rect",
        innerFill: "#000000",
        outerFill: "#ffffff",
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
        w2h: 1,
        innerShape: "Circle",
        outerShape: "Circle",
        innerRotation: 45,

        innerFill: "#00f200",
        outerFill: "#f20000",
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
        draggable: true,
      },
      relatives: {
        r_x: 0.5,
        r_y: 0.5,
        r_width: 1,
        r_height: 1,
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

  return {
    props: {
      contentObject,
      contentIDs,
      biscuitObject,
      biscuitIDs,
    },
  };
};

// export const getServerSideProps: GetServerSideProps = async (context: {
//   query: any;
// }) => {
//   const { query } = context;

//   const ids = Object.keys(query).filter((id) => contentIDs.includes(id));

//   const propKeys = [
//     "w2h",
//     "outerShape",
//     "outerFill",
//     "outerStroke",
//     "outerRotation",
//     "innerShape",
//     "innerFill",
//     "innerStroke",
//     "innerRotation",
//     "sensitivity",
//     "movementFactor",
//     "disableClick",

//     //rect keys

//     "fill",
//     "rotation",
//   ];
//   const relativeKeys = [
//     "r_x",
//     "r_y",
//     "r_outerSize",
//     "r_outer2inner",
//     "r_width",
//     "r_height",
//   ];

//   //TODO VALIDATE VALUES

//   ids.map((id) => {
//     const datapairs = query[id].split(",");

//     const relatives: any = {};
//     const props: any = {};
//     for (let i = 0; i < datapairs.length; i++) {
//       let key = datapairs[i]?.split("-")[0];
//       let val = datapairs[i]?.split("-")[1];

//       if (key && val) {
//         if (relativeKeys.includes(key) && !isNaN(Number(val))) {
//           relatives[key] = Number(val);
//         } else if (propKeys.includes(key) && val) {
//           props[key] = val;
//         }
//       }
//     }
//     let ogRelatives = contentObject[id as keyof typeof contentObject].relatives;
//     let ogProps = contentObject[id as keyof typeof contentObject].props;

//     contentObject[id as keyof typeof contentObject].relatives = {
//       ...ogRelatives,
//       ...relatives,
//     };

//     contentObject[id as keyof typeof contentObject].props = {
//       ...ogProps,
//       ...props,
//     };
//   });

//   const buildParams = {
//     contentIDs,
//     contentObject,
//   };

//   return {
//     props: {
//       buildParams,
//       query,
//     }, // will be passed to the page component as props
//   };
// };
