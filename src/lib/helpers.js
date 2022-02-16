export const relativeWidthHeightXY = (sizeprops) => {
  //const xys = [.05,.05,.95,.95];
  const { baseWidth, baseHeight, rWidth, rHeight, rX, rY } = sizeprops;
  return {
    width: baseWidth * rWidth,
    height: baseHeight * rHeight,
    x: baseWidth * rX,
    y: baseHeight * rY,
  };
};

//ROTATION ==> Circle in a Circle for eye pupils
export const getRotation = (props) => {
  const { origin, target, threshold, range } = props;

  const deltaX = target[0] - origin[0];
  const deltaY = target[1] - origin[1];

  const deg = Math.atan2(deltaY, deltaX);
  const distance =
    Math.sqrt(deltaX * deltaX + deltaY * deltaY) > threshold
      ? range
      : (Math.sqrt(deltaX * deltaX + deltaY * deltaY) / threshold) * range;

  const x = distance * Math.cos(deg);
  const y = distance * Math.sin(deg);

  return { x: x, y: y };
};

export const countCharsInWords = (wordarray) => {
  let chartotal = 0;
  for (let i = 0; i < wordarray.length; i++) {
    chartotal += wordarray[i].length;
  }
  return chartotal;
};

export const stringToWordArray = (mystring) => {
  const rawwords = mystring.split(" ");
  var cleanwords = [];
  for (let i = 0; i < rawwords.length; i++) {
    let word = rawwords[i];
    if (word.length > 0) {
      cleanwords.push(word);
    }
  }
  return cleanwords;
};

export const stringToWordRows = (mystring, maxrows) => {
  const wordarray = stringToWordArray(mystring);
  const totalchars = countCharsInWords(mystring);
  var currentAverage = totalchars / maxrows;
  var completedrows = [];
  var tempsmall = [];
  var tempbig = [];

  for (let i = 0; i < wordarray.length; i++) {
    var remainingwords = wordarray.slice(i);
    const nextword = remainingwords[0];
    var nextnextword = false;
    if (remainingwords.length >= 2) {
      nextnextword = remainingwords[1];
      tempsmall.push(nextword);
      tempbig = tempsmall.concat(nextnextword);
      const smallchars = countCharsInWords(tempsmall);
      const bigchars = countCharsInWords(tempbig);
      if (smallchars > currentAverage) {
        completedrows.push(tempsmall);
        tempsmall = [];
      } else if (bigchars > currentAverage) {
        const smalltest =
          currentAverage - smallchars < bigchars - currentAverage;
        if (smalltest) {
          completedrows.push(tempsmall);
          tempsmall = [];
        }
      }
    } else {
      tempsmall.push(nextword);
      completedrows.push(tempsmall);
    }
  }

  return completedrows;
};

export const clamp = (number, boundOne, boundTwo) => {
  if (!boundTwo) {
    return Math.max(number, boundOne) === boundOne ? number : boundOne;
  } else if (Math.min(number, boundOne) === number) {
    return boundOne;
  } else if (Math.max(number, boundTwo) === number) {
    return boundTwo;
  }
  return number;
};

export function swap(array, moveIndex, toIndex) {
  /* #move - Moves an array item from one position in an array to another.
     Note: This is a pure function so a new array will be returned, instead
     of altering the array argument.
    Arguments:
    1. array     (String) : Array in which to move an item.         (required)
    2. moveIndex (Object) : The index of the item to move.          (required)
    3. toIndex   (Object) : The index to move item at moveIndex to. (required)
  */
  const item = array[moveIndex];
  const length = array.length;
  const diff = moveIndex - toIndex;

  if (diff > 0) {
    // move left
    return [
      ...array.slice(0, toIndex),
      item,
      ...array.slice(toIndex, moveIndex),
      ...array.slice(moveIndex + 1, length),
    ];
  } else if (diff < 0) {
    // move right
    const targetIndex = toIndex + 1;
    return [
      ...array.slice(0, moveIndex),
      ...array.slice(moveIndex + 1, targetIndex),
      item,
      ...array.slice(targetIndex, length),
    ];
  }
  return array;
}

export function slugify(str) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaeeeeiiiioooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return str;
}
