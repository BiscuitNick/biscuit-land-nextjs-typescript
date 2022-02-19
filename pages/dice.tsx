import { useState } from "react";
import type { NextPage } from "next";
import Dice from "../src/components/Dice";

//import { standardFaces } from "../src/components/Dice/standardFaces";
import { sixToNine } from "@biscuitnick/biscuit-library";

interface Props {}

const DiceIndex: NextPage<Props> = () => {
  const [n, set] = useState(0);
  const [counter, increment] = useState(0);

  return (
    <div>
      <Dice
        size={200}
        n={n}
        counter={0}
        onClick={() => {
          set(Math.floor(Math.random() * sixToNine.length));
          increment(counter + 1);
        }}
        faces={sixToNine}
        margin={0}
        minRotation={true}
      />
    </div>
  );
};

export default DiceIndex;
