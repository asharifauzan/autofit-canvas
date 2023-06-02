const Canvas = (imgHTML, dimension) => {
  const img = imgHTML;

  const canvas = document.createElement('canvas');
  canvas.width = dimension.width;
  canvas.height = dimension.height;
  const ctx = canvas.getContext('2d');

  const hRatio = dimension.width / img.width;
  const vRatio = dimension.height / img.height;
  const scalingTime = Math.min(
    hRatio,
    vRatio,
  );

  const outputDimension = {
    width: img.height * scalingTime,
    height: img.height * scalingTime,
  };
  const outputAxis = {
    x: (dimension.width - outputDimension.width) / 2,
    y: (dimension.height - outputDimension.height) / 2,
  };

  ctx.drawImage(
    img,
    outputAxis.x,
    outputAxis.y,
    outputDimension.width,
    outputDimension.height,
  );

  return canvas;
};

module.exports = Canvas;
