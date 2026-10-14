import { useEffect, useRef } from 'react';

const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5].map(v => v / 16);

function hash(x, y) {
  let n = x * 374761393 + y * 668265263;
  n = (n ^ (n >> 13)) * 1274126177;
  return ((n ^ (n >> 16)) & 255) / 255;
}

function smooth(t) {
  return t * t * (3 - 2 * t);
}

function noise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = smooth(x - xi), yf = smooth(y - yi);
  const a = hash(xi, yi), b = hash(xi + 1, yi), c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1);
  return a + (b - a) * xf + (c - a) * yf + (a - b - c + d) * xf * yf;
}

const canvasStyle = {
  position: 'fixed',
  inset: 0,
  width: '100%',
  height: '100%',
  imageRendering: 'pixelated',
  pointerEvents: 'none',
  zIndex: -1,
};

// Black -> base -> white, evenly spaced.
function shades([r, g, b], steps) {
  const mid = (steps - 1) / 2;
  return Array.from({ length: steps }, (_, k) => {
    const target = k < mid ? 0 : 255;
    const t = Math.abs(k - mid) / mid;
    return [r, g, b].map(c => Math.round(c + (target - c) * t));
  });
}

// Animated dithered noise drawn behind the page. Only the lit pixels are painted,
// so the body background shows through everywhere else.
export default function NoiseBackground({ color = [21, 9, 31], steps = 7, opacity = 0.22, scale = 4, speed = 1 }) {
  const canvasRef = useRef(null);
  const [r, g, b] = color;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const alpha = Math.round(opacity * 255);
    const palette = shades([r, g, b], steps);
    let w, h, img, frame;

    function resize() {
      w = canvas.width = Math.ceil(window.innerWidth / scale);
      h = canvas.height = Math.ceil(window.innerHeight / scale);
      img = ctx.createImageData(w, h);
    }

    function draw(t) {
      const data = img.data;
      const time = t * 0.00015 * speed;
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const v = noise(x * 0.03 + time, y * 0.03) * 0.65 + noise(x * 0.08 - time, y * 0.08 + time) * 0.35;
          // Value noise clusters around 0.5, so stretch it before picking a colour
          // or the outer palette entries would barely appear.
          const hue = Math.min(Math.max((noise(x * 0.012 - time * 0.5, y * 0.012 + 50) - 0.2) / 0.6, 0), 0.999);
          const shade = palette[Math.floor(hue * palette.length)];
          const i = (y * w + x) * 4;
          data[i] = shade[0];
          data[i + 1] = shade[1];
          data[i + 2] = shade[2];
          data[i + 3] = v * 0.55 > BAYER[(y & 3) * 4 + (x & 3)] ? alpha : 0;
        }
      }
      ctx.putImageData(img, 0, 0);
      if (!reduceMotion) frame = requestAnimationFrame(draw);
    }

    function onResize() {
      resize();
      if (reduceMotion) draw(0);
    }

    resize();
    frame = requestAnimationFrame(draw);
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', onResize);
    };
  }, [r, g, b, steps, opacity, scale, speed]);

  return <canvas ref={canvasRef} style={canvasStyle} aria-hidden="true" />;
}
