export interface getRatioParams {
  ratio: number;
  sum: number;
}

const getRatio = (params: getRatioParams) => {
  const { ratio, sum } = params;
  let a = (ratio * sum) / (ratio + 1);
  let b = sum / (ratio + 1);
  return [a, b];
};

export default getRatio;


