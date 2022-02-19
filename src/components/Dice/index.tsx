import React from "react";
import { useSpring, animated, config } from "@react-spring/web";

export interface DiceFace {
  img: string | null;
  text: string | null;
  backgroundColor: string | null;
  border: string | null;
}

interface Dice {
  size: number;
  n: number;
  counter: number;
  onClick?: () => void;
  faces: DiceFace[];
  margin: number;

  minRotation: boolean;
}

const random360 = (min = 1, max = 5) =>
  (Math.floor(Math.random() * max) + min) * 360;

const Dice = (props: Dice) => {
  const {
    size,
    n,
    counter = 0,
    onClick,
    faces,
    margin,
    minRotation = false,
  } = props;

  const width = size;
  const height = size;

  const rotations = [
    // { y: 180, x: 0, z: false, side: "back" },
    // { y: -90, x: false, z: 0, side: "left" },
    // { y: false, x: 90, z: 0, side: "top" },
    // { y: false, x: -90, z: 0, side: "bottom" },
    // { y: 90, x: false, z: 0, side: "right" },
    // { y: 0, x: 0, z: false, side: "front" },

    { y: 180, x: 0, z: 0, side: "back" },
    { y: -90, x: 0, z: 0, side: "left" },
    { y: 0, x: 90, z: 0, side: "top" },
    { y: 0, x: -90, z: 0, side: "bottom" },
    { y: 90, x: 0, z: 0, side: "right" },
    { y: 0, x: 0, z: 0, side: "front" },
  ];

  const { x, y, z, side } = rotations[n % 6];

  var xRotation = x + random360(); //: random360();
  var yRotation = y + random360(); //: random360();
  var zRotation = z + random360(); //: random360();

  // var xRotation = x !== false ? x + random360() : random360();
  // var yRotation = y !== false ? y + random360() : random360();
  // var zRotation = z !== false ? z + random360() : random360();
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
    }),
    [n, counter]
  );

  const transforms = [
    `rotateY(180deg) translateZ(${size / 2}px)`,
    `rotateY(90deg) translateZ(${size / 2}px)`,
    `rotateX(-90deg) translateZ(${size / 2}px)`,
    `rotateX(90deg) translateZ(${size / 2}px)`,
    `rotateY(-90deg) translateZ(${size / 2}px)`,
    `rotateY(0deg) translateZ(${size / 2}px)`,
  ];

  const Cube = (
    <div
      style={{
        width,
        height,
        perspective: size * 2,
      }}
      onClick={onClick}
    >
      <animated.div
        style={{
          transform,
          width,
          height,
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        {transforms.map((transform, i) => {
          let face = faces[i % faces.length];
          console.log(face);

          const { img, text, backgroundColor, border } = face;

          const style = {
            // margin: "auto",
            width,
            height,

            display: "grid",
            backgroundImage: img ? `url(${img})` : "",
            backgroundColor: backgroundColor || "",
            backgroundSize: `cover`,
            border: border || "",
            // boxSizing: "border-box",
          };

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                // display: "grid",
                width,
                height,
                transform,
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  ...style,
                  boxSizing: "border-box",
                  backgroundSize: 400,
                  backgroundPosition: "left bottom",
                }}
              >
                {text ? (
                  <span
                    style={{
                      margin: "auto",
                      fontSize: "3em",
                      textAlign: "center",
                      color: "white",
                      userSelect: "none",
                      fontFamily: "roboto",
                      fontWeight: "bold",
                      textShadow: "1px 1px 1px #000",
                    }}
                  >
                    {text}
                  </span>
                ) : null}
              </div>
            </div>
          );
        })}
      </animated.div>
    </div>
  );

  return Cube;
};

export default Dice;

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
