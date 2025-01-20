import { useEffect, useRef } from "react";
import "./Background.css";
const SPEED = 0.02;
const C1 = 191;
const C2 = 64;

const Background = () => {
  const canvasRef = useRef(null);
  const color = (
    context: CanvasRenderingContext2D,
    { x, y, r, g, b }: { x: number, y: number, r: number, g: number, b: number }
  ) => {
    context.fillStyle = `rgb(${r}, ${g}, ${b})`;
    context.fillRect(x, y, 1, 1);
  };
  // const color = (
  //   context: CanvasRenderingContext2D,
  //   { x, y }: { x: number, y: number }
  // ) => {
  //   const gradient = context.createLinearGradient(0, 0, 32, 32);
  //   gradient.addColorStop(0, "#5c76ea");
  //   gradient.addColorStop(0.5, "#ffbe00");
  //   gradient.addColorStop(1, "#fe0057");

  //   context.fillStyle = gradient; // Gradient as the color
  //   context.fillRect(x, y, 1, 1);
  // };

  const R = (x: number, y: number, time: number) =>
    Math.floor(C1 + C2 * Math.cos((x * x - y * y) / 300 + time));
  const G = (x: number, y: number, time: number) =>
    Math.floor(
      C1 +
        C2 *
          Math.sin(
            (x * x * Math.cos(time / 4) + y * y * Math.sin(time / 3)) / 300
          )
    );
  const B = (x: number, y: number, time: number) =>
    Math.floor(
      C1 +
        C2 *
          Math.sin(
            5 * Math.sin(time / 9) +
              ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
          )
    );

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        let time = 0;

        const loop = () => {
          // Clear the canvas for the next frame
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Draw each pixel
          for (let x = 0; x <= 32; x++) {
            for (let y = 0; y <= 32; y++) {
              color(ctx, {
                x,
                y,
                r: R(x, y, time),
                g: G(x, y, time),
                b: B(x, y, time),
              });
            }
          }

          time += SPEED;

          // Schedule the next frame
          window.requestAnimationFrame(loop);
        };

        loop();
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={32}
      height={32}
      className="canvas-container"
    />
  );
};

export default Background;
