const Canvas = (imgHTML, canvasDimension) => {
  // initiate canvas
  const canvas = document.createElement('canvas');
  canvas.width = canvasDimension.width;
  canvas.height = canvasDimension.height;
  const ctx = canvas.getContext('2d');

  const img = imgHTML;

  // find img ratio based on narrow side
  const hRatio = canvas.width / img.width;
  const vRatio = canvas.height / img.height;
  const scale = Math.min(hRatio, vRatio);

  // scaling up/down image
  const newImgDimension = {
    width: img.width * scale,
    height: img.height * scale,
  };

  // centering image on canvas
  const newImgAxis = {
    x: (canvas.width - newImgDimension.width) / 2,
    y: (canvas.height - newImgDimension.height) / 2,
  };

  ctx.drawImage(
    img,
    newImgAxis.x,
    newImgAxis.y,
    newImgDimension.width,
    newImgDimension.height,
  );

  return canvas;
};

module.exports = Canvas;
