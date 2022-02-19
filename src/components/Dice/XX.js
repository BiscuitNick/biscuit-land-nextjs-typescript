import React from "react";
import { useSpring, animated, config } from "@react-spring/web";

// const standardDice = [
//   "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/1.png",
//   "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/2.png",
//   "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/3.png",
//   "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/4.png",
//   "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/5.png",
//   "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/6.png",
// ];


const standardDiceFaces = [
  {
    img: "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/1.png",
    text: null,
    backgroundColor: null,
    border: null,
  },
  {
    img: "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/2.png",
    text: null,
    backgroundColor: null,
    border: null,
  },
  {
    img: "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/3.png",
    text: null,
    backgroundColor: null,
    border: null,
  },
  {
    img: "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/4.png",
    text: null,
    backgroundColor: null,
    border: null,
  },
  {
    img: "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/5.png",
    text: null,
    backgroundColor: null,
    border: null,
  },
  {
    img: "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/6.png",
    text: null,
    backgroundColor: null,
    border: null,
  },
];

const random360 = (min = 1, max = 5) =>
  (Math.floor(Math.random() * max) + min) * 360;

const Dice = (props) => {
  const {
    size = 200,
    n = Math.floor(Math.random() * 6),
    counter = 0,
    onClick,
    // border = props.border || `5px solid black`,
    // backgroundColor = props.background || `black`,

    faces = props.faces || standardDiceFaces,

    // images = props.images || standardDice,
    margin = props.margin || 0,

    minRotation = false,
    // maxRotation = !isNaN(props.maxRotation) ? props.maxRotation : 5,
  } = props;

  console.log(n + 1);

  const width = size;
  const height = size;

  const rotations = [
    { y: 180, x: 0, z: false, side: "back" },
    { y: -90, x: false, z: 0, side: "left" },
    { y: false, x: 90, z: 0, side: "top" },
    { y: false, x: -90, z: 0, side: "bottom" },
    { y: 90, x: false, z: 0, side: "right" },
    { y: 0, x: 0, z: false, side: "front" },
  ];

  const { x, y, z, side } = rotations[n % 6];

  var xRotation = x !== false ? x + random360() : random360();
  var yRotation = y !== false ? y + random360() : random360();
  var zRotation = z !== false ? z + random360() : random360();
  if (minRotation) {
    xRotation = x || 0;
    yRotation = y || 0;
    zRotation = z || 0;
  }

  const [{ transform }] = useSpring(
    () => ({
      transform: `translateZ(${
        -size / 2
      }px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) rotateZ(${zRotation}deg) `,
      // config: config.slow,
    }),
    [n, counter]
  );

  const faceProps = {
    position: "absolute",
    backgroundSize: "cover",
    // backgroundColor,
    // border,
    width,
    height,
  };

  // const faces = [
  //   {
  //     ...faceProps,
  //     transform: `rotateY(180deg) translateZ(${size / 2}px)`,
  //     backgroundImage: images ? `url(${images?.[0 % images.length]})` : null, //back
  //   },
  //   {
  //     ...faceProps,

  //     transform: `rotateY(90deg) translateZ(${size / 2}px)`,
  //     backgroundImage: images ? `url(${images?.[1 % images.length]})` : null, //right
  //   },
  //   {
  //     ...faceProps,

  //     transform: `rotateX(-90deg) translateZ(${size / 2}px)`,
  //     backgroundImage: images ? `url(${images?.[2 % images.length]})` : null, //bottom
  //   },
  //   {
  //     ...faceProps,

  //     transform: `rotateX(90deg) translateZ(${size / 2}px)`,
  //     backgroundImage: images ? `url(${images?.[3 % images.length]})` : null, //top
  //   },
  //   {
  //     ...faceProps,

  //     transform: `rotateY(-90deg) translateZ(${size / 2}px)`,
  //     backgroundImage: images ? `url(${images?.[4 % images.length]})` : null, //right
  //   },
  //   {
  //     ...faceProps,

  //     transform: `rotateY(0deg) translateZ(${size / 2}px)`,
  //     backgroundImage: images ? `url(${images?.[5 % images.length]})` : null, //front
  //   },
  // ];

  const faces = [
    {
      ...faceProps,
      transform: `rotateY(180deg) translateZ(${size / 2}px)`,
      backgroundImage: faces[0 % faces.length]?.img
        ? `url(${faces[0 % faces.length].img})`
        : null, //back
    },
    {
      ...faceProps,

      transform: `rotateY(90deg) translateZ(${size / 2}px)`,
      backgroundImage: faces[1 % faces.length]?.img
        ? `url(${faces[1 % faces.length].img})`
        : null, //back    },
    },

    {
      ...faceProps,

      transform: `rotateX(-90deg) translateZ(${size / 2}px)`,
      backgroundImage: faces[2 % faces.length]?.img
        ? `url(${faces[2 % faces.length].img})`
        : null, //back    },
    },

    {
      ...faceProps,

      transform: `rotateX(90deg) translateZ(${size / 2}px)`,
      backgroundImage: faces[3 % faces.length]?.img
        ? `url(${faces[3 % faces.length].img})`
        : null, //back    },
    },

    {
      ...faceProps,

      transform: `rotateY(-90deg) translateZ(${size / 2}px)`,
      backgroundImage: faces[4 % faces.length]?.img
        ? `url(${faces[4 % faces.length].img})`
        : null, //back    },
    },

    {
      ...faceProps,

      transform: `rotateY(0deg) translateZ(${size / 2}px)`,
      backgroundImage: faces[5 % faces.length]?.img
        ? `url(${faces[5 % faces.length].img})`
        : null, //back    },
    },
  ];

  const Cube = (
    <div
      style={{
        display: "grid",
        width,
        height,
        perspective: size * 2,
        margin,
      }}
      onClick={onClick}
    >
      <animated.div
        style={{
          transform,
          margin: "auto",
          width,
          height,
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        {faces.map((face, i) => (
          <div key={i} style={face} />
        ))}
      </animated.div>
    </div>
  );

  return Cube;
};

export default Dice;
