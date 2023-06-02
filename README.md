### How to use:

```
import Canvas from 'autofit-canvas';

const img = document.querySelector('img');
const canvas = Canvas(img, { width: 600, height: 600 });
const canvasDataURL = Canvas.toDataURL();
img.src = canvasDataURL;
```