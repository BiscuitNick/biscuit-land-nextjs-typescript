const getStageData = (canvasRef: any) => {
  if (!canvasRef) {
    return null;
  }
  if (!canvasRef.current) return null;
  else {
    const stageData = canvasRef.current.getStage();
    return stageData;
  }
};

export default getStageData;
