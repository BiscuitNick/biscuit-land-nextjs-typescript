import { useState } from "react";
import type { NextPage } from "next";
import Dice from "../src/components/Dice";

import { standardFaces } from "../src/components/Dice/standardFaces";
// import { sixToNine } from "@biscuitnick/biscuit-library";

interface Props {}

const DiceIndex: NextPage<Props> = () => {
  const [n, set] = useState([2, 3, 0, 1]);
  const [counter, increment] = useState(0);
  const size = 400;

  const handleClick = () => {
    let randoms = n.map((num) => Math.floor(Math.random() * 4));
    set(randoms);
    increment(counter + 1);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `${size}px ${size}px`,
        gridTemplateRows: `${size}px ${size}px`,
      }}
    >
      <Dice
        size={size}
        n={n[0]}
        counter={counter}
        onClick={handleClick}
        faces={standardFaces}
        margin={0}
        minRotation={false}
      />
      <Dice
        size={size}
        n={n[1]}
        counter={counter}
        onClick={handleClick}
        faces={standardFaces}
        margin={0}
        minRotation={false}
      />
      <Dice
        size={size}
        n={n[2]}
        counter={counter}
        onClick={handleClick}
        faces={standardFaces}
        margin={0}
        minRotation={false}
      />
      <Dice
        size={size}
        n={n[3]}
        counter={counter}
        onClick={handleClick}
        faces={standardFaces}
        margin={0}
        minRotation={false}
      />
    </div>
  );
};

export default DiceIndex;
