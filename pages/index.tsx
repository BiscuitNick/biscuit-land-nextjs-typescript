import type { GetServerSideProps, NextPage } from "next";
import Biscuit from "../src/components/Biscuit";

interface Props {
  buildParams?: any;
  query: any;
}

const BiscuitIndex: NextPage<Props> = (props) => {
  const { buildParams, query } = props;
  console.log(props);
  console.log(query);

  const contentObject = {
    eye_0: {
      props: {
        w2h: 1,
        outerShape: "Rect",
        innerShape: "Rect",
        innerFill: "#00f200",
      },
      relatives: {
        r_outerSize: 0.08,
        r_x: 0.4,
        r_y: 0.3,
        r_outer2inner: 0.5,
      },
    },
    eye_1: {
      props: { w2h: 1, innerShape: "Circle", innerRotation: 45 },
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
        stroke: "",
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
  };

  return <Biscuit buildParams={{ ...buildParams, contentObject }} />;
};

export default BiscuitIndex;

export const getServerSideProps: GetServerSideProps = async (context: {
  query: any;
}) => {
  const { query } = context;
  const contentIDs = ["rect_0", "eye_0", "eye_1"];
  const contentObject = {
    eye_0: {
      props: { w2h: 1, outerShape: "Circle" },
      relatives: {
        r_outerSize: 0.08,
        r_x: 0.4,
        r_y: 0.3,
        r_outer2inner: 0.5,
      },
    },
    eye_1: {
      props: { w2h: 1, innerShape: "Circle", innerRotation: 45 },
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
        fill: "red",
        stroke: "red",
        // handleClick: (e: { target: { attr: any } }) =>
        // console.log(e.target.attr),
      },
      relatives: {
        r_x: 0.5,
        r_y: 0.5,
        r_width: 1,
        r_height: 0.5,
      },
    },
  };

  const ids = Object.keys(query).filter((id) => contentIDs.includes(id));

  const propKeys = [
    "w2h",
    "outerShape",
    "outerFill",
    "outerStroke",
    "outerRotation",
    "innerShape",
    "innerFill",
    "innerStroke",
    "innerRotation",
    "sensitivity",
    "movementFactor",
    "disableClick",

    //rect keys

    "fill",
    "rotation",
  ];
  const relativeKeys = [
    "r_x",
    "r_y",
    "r_outerSize",
    "r_outer2inner",
    "r_width",
    "r_height",
  ];

  //TODO VALIDATE VALUES

  ids.map((id) => {
    const datapairs = query[id].split(",");

    const relatives: any = {};
    const props: any = {};
    for (let i = 0; i < datapairs.length; i++) {
      let key = datapairs[i]?.split("-")[0];
      let val = datapairs[i]?.split("-")[1];

      if (key && val) {
        if (relativeKeys.includes(key) && !isNaN(Number(val))) {
          relatives[key] = Number(val);
        } else if (propKeys.includes(key) && val) {
          props[key] = val;
        }
      }
    }
    let ogRelatives = contentObject[id as keyof typeof contentObject].relatives;
    let ogProps = contentObject[id as keyof typeof contentObject].props;

    contentObject[id as keyof typeof contentObject].relatives = {
      ...ogRelatives,
      ...relatives,
    };

    contentObject[id as keyof typeof contentObject].props = {
      ...ogProps,
      ...props,
    };
  });

  const buildParams = {
    contentIDs,
    contentObject,
  };

  return {
    props: {
      buildParams,
      query,
    }, // will be passed to the page component as props
  };
};
