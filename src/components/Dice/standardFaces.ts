import type { DiceFace } from "./";

const diceImages = [
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/0.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/1.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/2.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/3.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/4.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/5.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/6.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/7.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/8.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/9.png",
];

const image =
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*";

export const puppyFaces: DiceFace[] = [
  {
    img: "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/1.png",
    text: null,
    backgroundColor: "#000000",
    border: `2px solid black`,
    divStyle: {
      border: `1px solid black`,
      // backgroundColor: "#000000",
      backgroundImage: `url(${image})`,
      backgroundPosition: "left bottom",
    },
  },
  {
    img: "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/2.png",
    text: null,
    backgroundColor: "#000000",
    border: `2px solid black`,
    divStyle: {
      border: `1px solid black`,
      // backgroundColor: "#000000",
      backgroundImage: `url(${image})`,
      backgroundPosition: "right bottom",
    },
  },
  {
    img: "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/3.png",
    text: null,
    backgroundColor: "#000000",
    border: `1px solid black`,
    divStyle: {
      border: `1px solid black`,
      // backgroundColor: "#000000",
      backgroundImage: `url(${image})`,
      backgroundPosition: "left top",
    },
  },
  {
    img: "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/4.png",
    text: null,
    backgroundColor: "#000000",
    border: `1px solid black`,
    divStyle: {
      border: `1px solid black`,
      // backgroundColor: "#000000",
      backgroundImage: `url(${image})`,
      backgroundPosition: "right top",
    },
  },
  // {
  //   img: "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/5.png",
  //   text: null,
  //   backgroundColor: null,
  //   border: `2px solid black`,
  //   divStyle: {
  //     border: `2px solid black`,
  //     // backgroundColor: "#000000",
  //     backgroundImage: `url(${image})`,
  //     backgroundPosition: "left bottom",
  //   },
  // },
  // {
  //   img: "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/6.png",
  //   text: null,
  //   backgroundColor: null,
  //   border: `2px solid black`,
  //   divStyle: {
  //     border: `2px solid black`,
  //     // backgroundColor: "#000000",
  //     backgroundImage: `url(${image})`,
  //     backgroundPosition: "left bottom",
  //   },
  // },
];

export const standardFaces: DiceFace[] = [
  {
    img: "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/1.png",
    text: null,
    backgroundColor: "#000000",
    border: `2px solid black`,
    divStyle: {
      border: `1px solid black`,
      backgroundImage: `url(${diceImages[1]})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
  },
  {
    img: "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/2.png",
    text: null,
    backgroundColor: "#000000",
    border: `2px solid black`,
    divStyle: {
      border: `1px solid black`,
      backgroundImage: `url(${diceImages[2]})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
  },
  {
    img: "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/3.png",
    text: null,
    backgroundColor: "#000000",
    border: `1px solid black`,
    divStyle: {
      border: `1px solid black`,
      backgroundImage: `url(${diceImages[3]})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
  },
  {
    img: "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/4.png",
    text: null,
    backgroundColor: "#000000",
    border: `1px solid black`,
    divStyle: {
      border: `1px solid black`,
      backgroundImage: `url(${diceImages[4]})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
  },
  {
    img: "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/5.png",
    text: null,
    backgroundColor: null,
    border: `2px solid black`,
    divStyle: {
      border: `1px solid black`,
      backgroundImage: `url(${diceImages[5]})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
  },
  {
    img: "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/6.png",
    text: null,
    backgroundColor: null,
    border: `2px solid black`,
    divStyle: {
      border: `1px solid black`,
      backgroundImage: `url(${diceImages[6]})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
  },
];
