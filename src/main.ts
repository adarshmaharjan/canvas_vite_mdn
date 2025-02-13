import "./style.css";
// import typescriptLogo from "./typescript.svg";
// import viteLogo from "/vite.svg";
// import { setupCounter } from "./counter.ts";

// document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `;

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

function fillRect() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  if (!canvas.getContext) {
    return;
  }
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return;
  }

  ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
  ctx.fillRect(10, 10, 50, 50);
  ctx.strokeRect(25, 25, 60, 50);
  ctx.fillRect(0, 0, 0, 0);
}

// Call the function
// fillrect();

function drawCustomShape() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  if (!canvas.getContext) {
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }
  ctx.beginPath();
  ctx.arc(75, 75, 75, 0, Math.PI * 2, true);
  ctx.moveTo(100, 75);

  ctx.arc(75, 75, 35, 0, Math.PI, false);
  // ctx.moveTo(65, 65);

  // ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
  // ctx.moveTo(95, 65);

  // ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
  ctx.stroke();
}
// draw shape
// drawCustomShape();

function drawLine() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  if (!canvas.getContext) {
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }
  ctx.beginPath();
  ctx.moveTo(10, 50);
  ctx.lineTo(700, 50);
  ctx.moveTo(50, 90);
  ctx.lineTo(280, 50);
  ctx.stroke();
}

// draw line
// drawLine();

function contextBeginPath() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;

  if (!canvas.getContext) {
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }
  ctx.beginPath();
  ctx.strokeStyle = "blue";
  ctx.moveTo(20, 20);
  ctx.lineTo(200, 20);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.moveTo(20, 20);
  ctx.lineTo(120, 100);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(120, 100);
  ctx.lineTo(200, 20);
  ctx.stroke();
}

// begin path
// contextBeginPath();

function drawTriangle() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  if (!canvas.getContext) {
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }
  ctx.beginPath();
  ctx.moveTo(0, 0);
  // ctx.lineTo(100, 100);
  // ctx.lineTo(100, 0);
  // ctx.fillStyle = "red";
  // ctx.fill();

  // test with stroke first
  ctx.lineTo(0, 100);
  ctx.lineTo(100, 0);
  ctx.lineTo(0, 0);
  ctx.fillStyle = "blue";
  ctx.fill();
  // ctx.stroke();
}
// draw triangle
// drawTriangle();

function drawPythagorasTriangle() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;

  if (!canvas.getContext) {
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 100);
  ctx.lineTo(100, 100);
  ctx.lineTo(0, 0);
  // ctx.stroke();
  ctx.fillStyle = "red";
  ctx.fill();
}
// draw pythagoras triangle in canvas
// drawPythagorasTriangle();

function drawLeftArrowTriangle() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  if (!canvas.getContext) {
    return;
  }
  const ctx = canvas.getContext("2d");
  // ctx.beginPath();
  // ctx.moveTo(0, 50);
  // ctx.lineTo(100, 0);
  // ctx.moveTo(0, 50);
  // ctx.lineTo(100, 100);
  // ctx.lineTo(100, 0);
  // ctx.fillStyle = "red";
  // ctx.fill();
  // ctx.stroke();
}
// draw left arrow triangle
// drawLeftArrowTriangle();

function tutorialBeginPath() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  if (!canvas.getContext) {
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }
  ctx.beginPath();
  ctx.arc(100, 100, 50, 0, Math.PI * 2);
  ctx.strokeStyle = "red";
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.arc(300, 300, 100, 0, Math.PI * 2);
  ctx.strokeStyle = "blue";
  ctx.stroke();
}

// begin path tutorial
// tutorialBeginPath();

function drawMyArc() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;

  if (!canvas.getContext) {
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }
  ctx.arc(100, 100, 100, (Math.PI / 180) * 90, 2 * Math.PI);
  ctx.stroke();
}
// draw arc
// drawMyArc();

function drawSmiley() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  if (!canvas.getContext) {
    return;
  }
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }
  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true);

  ctx.moveTo(110, 75);
  ctx.arc(75, 75, 35, 0, Math.PI, false);

  ctx.moveTo(65, 65);
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true);

  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
  ctx.stroke();
}

// draw smiley
// drawSmiley();

function drawMultipleTriangle() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;

  if (!canvas.getContext) {
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(100, 0);
  ctx.lineTo(0, 100);
  ctx.lineTo(0, 0);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(0, 125);
  ctx.lineTo(100, 125);
  ctx.lineTo(100, 75);
  ctx.closePath();
  ctx.stroke();
}
// draw multiple triangle
// drawMultipleTriangle();

function drawCircles() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }
  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      ctx.beginPath();
      const x = 25 + j * 50;
      const y = 25 + i * 50;

      const radius = 20;
      const startAngle = 0;

      const endAngle = Math.PI + Math.PI * j;
      const counterClockWise = i % 2 !== 0;

      ctx.arc(x, y, radius, startAngle, endAngle, counterClockWise);
      if (i > 1) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
    }
  }
}

// draw circles
// drawCircles();

function quadraticBezierCurveImplementation() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }

  ctx.beginPath();
  ctx.moveTo(75, 25);
  ctx.quadraticCurveTo(25, 25, 25, 62.5);
  ctx.quadraticCurveTo(25, 100, 50, 100);
  ctx.quadraticCurveTo(50, 120, 30, 125);
  ctx.quadraticCurveTo(60, 120, 65, 100);
  ctx.quadraticCurveTo(125, 100, 125, 62.5);
  ctx.quadraticCurveTo(125, 25, 75, 25);
  ctx.stroke();
}

// implement quadratic bezier curve
// quadraticBezierCurveImplementation();

function drawHeart() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }

  ctx.beginPath();
  ctx.moveTo(75, 40);
  ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
  ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
  ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
  ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
  ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
  ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
  ctx.fill();
}
// implement cubic bezier curve
// drawHeart();

function drawPacman() {
  function roundedRect({
    ctx,
    x,
    height,
    radius,
    width,
    y,
  }: {
    ctx: CanvasRenderingContext2D;
    x: number;
    y: number;
    width: number;
    height: number;
    radius: number;
  }) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + height, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);

    ctx.stroke();
  }

  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return;
  }
  roundedRect({
    ctx,
    x: 12,
    y: 12,
    width: 184,
    height: 168,
    radius: 15,
  });
  roundedRect({
    ctx,
    x: 19,
    y: 19,
    width: 170,
    height: 154,
    radius: 9,
  });

  roundedRect({ ctx, x: 53, y: 53, width: 49, height: 33, radius: 10 });
  roundedRect({
    ctx,
    x: 53,
    y: 119,
    width: 49,
    height: 16,
    radius: 6,
  });
  roundedRect({
    ctx,
    x: 135,
    y: 53,
    width: 49,
    height: 33,
    radius: 10,
  });
  roundedRect({
    ctx,
    x: 135,
    y: 119,
    width: 25,
    height: 49,
    radius: 10,
  });

  ctx.beginPath();
  ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
  ctx.lineTo(31, 37);
  ctx.fill();

  for (let i = 0; i < 8; i += 1) {
    ctx.fillRect(51 + i * 16, 35, 4, 4);
  }

  for (let i = 0; i < 6; i += 1) {
    ctx.fillRect(115, 51 + i * 16, 4, 4);
  }

  for (let i = 0; i < 8; i += 1) {
    ctx.fillRect(51 + i * 16, 99, 4, 4);
  }

  ctx.beginPath();
  ctx.moveTo(83, 116);
  ctx.lineTo(83, 102);
  ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
  ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
  ctx.lineTo(111, 116);
  ctx.lineTo(106.333, 111.333);
  ctx.lineTo(101.666, 116);
  ctx.lineTo(97, 111.333);
  ctx.lineTo(92.333, 116);
  ctx.lineTo(87.666, 111.333);
  ctx.lineTo(83, 116);
  ctx.fill();
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.moveTo(91, 96);
  ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
  ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
  ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
  ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
  ctx.moveTo(103, 96);
  ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
  ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
  ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
  ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
  ctx.fill();
}

// draw pacman
// drawPacman();

function drawIlluminatiTriangle() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return;
  }
  const sideLength = 300;
  const secondarySideLength = 100;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(sideLength, 0);
  ctx.lineTo(sideLength / 2, sideLength);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  const secondaryStartingPoint = sideLength / 3;
  ctx.moveTo(secondaryStartingPoint, secondaryStartingPoint);
  ctx.lineTo(
    secondarySideLength + secondaryStartingPoint,
    secondaryStartingPoint
  );

  ctx.lineTo(secondarySideLength + secondaryStartingPoint / 2, 30);
  ctx.closePath();
  ctx.fillStyle = "lightGreen";
  ctx.fill();
}

// implement triangle with a spaced triangle
// drawIlluminatiTriangle();

function triangleWithHole() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }
    ctx.beginPath();

    // Outer shape clockwise ⟳
    ctx.moveTo(0, 0);
    ctx.lineTo(150, 0);
    ctx.lineTo(75, 129.9);

    // Inner shape anticlockwise ↺
    ctx.moveTo(75, 20);
    ctx.lineTo(50, 60);
    ctx.lineTo(100, 60);

    ctx.fill();
  }
}

// draw triangle with hole
// triangleWithHole();

function implementPath2D() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return;
  }

  const rectangle = new Path2D();
  rectangle.rect(0, 0, 50, 50);
  ctx.stroke(rectangle);

  const circle = new Path2D();
  circle.arc(100, 25, 25, 0, 2 * Math.PI);
  ctx.fill(circle);
}

// implement path 2d
// implementPath2D()

// * Canvas styling

function drawColorPallet() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return;
  }

  for (let i = 0; i < 6; i += 1) {
    for (let j = 0; j < 6; j += 1) {
      ctx.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)} ${Math.floor(
        255 - 42.5 * j
      )} 0)`;

      ctx.fillRect(j * 25, i * 25, 25, 25);
    }
  }
}

// drawColorPallet();

function drawColorfulSquares() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }
  for (let i = 0; i < 6; i += 1) {
    for (let j = 0; j < 6; j += 1) {
      ctx.strokeStyle = `rgb(0 , ${Math.floor(255 - 42.5 * i)} , ${
        255 * 42.6 * j
      })`;
      ctx.beginPath();
      ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
      ctx.stroke();
    }
  }
}

// drawColorfulSquares();

function implementGlobalTransparency() {
  const ctx = (
    document.getElementById("canvas") as HTMLCanvasElement
  ).getContext("2d");
  if (!ctx) {
    return;
  }

  ctx.fillStyle = "#FD0";
  ctx.fillRect(0, 0, 75, 75);
  ctx.fillStyle = "#6C0";
  ctx.fillRect(75, 0, 75, 75);
  ctx.fillStyle = "#09f";
  ctx.fillRect(0, 75, 75, 75);
  ctx.fillStyle = "#F30";
  ctx.fillRect(75, 75, 75, 75);

  ctx.fillStyle = "#fff";
  ctx.globalAlpha = 0.2;

  for (let i = 0; i < 7; i += 1) {
    ctx.beginPath();
    ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
    ctx.fill();
  }
}

// implementGlobalTransparency();

function rgbWithAlphaTransparency() {
  const ctx = (
    document.getElementById("canvas") as HTMLCanvasElement
  ).getContext("2d");

  if (!ctx) {
    return;
  }
  ctx.fillStyle = "rgb(255 221 0)";
  ctx.fillRect(0, 0, 150, 37.5);

  ctx.fillStyle = "rgb(102 204 0)";
  ctx.fillRect(0, 37.5, 150, 37.5);

  ctx.fillStyle = "rgb(0 153 255)";
  ctx.fillRect(0, 75, 150, 37.5);

  ctx.fillStyle = "rgb(255 51 0)";
  ctx.fillRect(0, 112.5, 150, 37.5);

  for (let i = 0; i < 10; i += 1) {
    ctx.fillStyle = `rgb(255 255 255 /${(i + 1) / 10})`;
    for (let j = 0; j < 4; j += 1) {
      ctx.fillRect(i * 15, j * 37.5, 15, 37.5);
    }
  }
}

// rgbWithAlphaTransparency();

function lineWidthImplementation() {
  const ctx = (
    document.getElementById("canvas") as HTMLCanvasElement
  ).getContext("2d");

  if (!ctx) {
    return;
  }

  for (let i = 0; i < 10; i += 1) {
    ctx.lineWidth = 1 + i;

    ctx.beginPath();
    ctx.moveTo(5 + i * 15, 5);
    ctx.lineTo(5 + i * 15, 140);
    ctx.stroke();
  }
}

// lineWidthImplementation();

function generateCrispLine() {
  const ctx = (
    document.getElementById("canvas") as HTMLCanvasElement
  ).getContext("2d");

  if (!ctx) {
    return;
  }
  // create vertical line
  ctx.lineWidth = 10;
  for (let i = 0; i < 10; i += 1) {
    ctx.beginPath();
    ctx.moveTo(10 + i * 20, 0);
    ctx.lineTo(10 + i * 20, 200);
    ctx.stroke();
  }

  ctx.lineWidth = 10;

  for (let i = 0; i < 10; i += 1) {
    ctx.beginPath();
    ctx.moveTo(0, 10 + i * 20);
    ctx.lineTo(200, 10 + i * 20);
    ctx.stroke();
  }
}

// generateCrispLine();

function drawSmallLines() {
  const ctx = (
    document.getElementById("canvas") as HTMLCanvasElement
  ).getContext("2d");

  if (!ctx) {
    return;
  }
  ctx.lineWidth = 1;
  for (let i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.moveTo(5 + i * 14, 5);
    ctx.lineTo(5 + i * 14, 140);
    ctx.stroke();
  }

  for (let i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.moveTo(5, 5 + i * 14);
    ctx.lineTo(140, 5 + i * 14);
    ctx.stroke();
  }
}

// implement small line
// drawSmallLines();

function implementLineCap() {
  const ctx = (
    document.getElementById("canvas") as HTMLCanvasElement
  ).getContext("2d");

  if (!ctx) {
    return;
  }

  ctx.strokeStyle = "#09f";
  ctx.beginPath();

  ctx.moveTo(10, 10);
  ctx.lineTo(140, 10);
  ctx.moveTo(10, 140);
  ctx.lineTo(140, 140);
  ctx.stroke();

  ctx.strokeStyle = "#000";
  ["butt", "round", "square"].forEach((lineCap, i) => {
    ctx.lineWidth = 15;

    ctx.lineCap = lineCap as CanvasLineCap;

    ctx.beginPath();

    ctx.moveTo(25 + i * 50, 10);

    ctx.lineTo(25 + i * 50, 140);
    ctx.stroke();
  });
}

// implement line cap
// implementLineCap();

function strokedArrow() {
  const ctx = (
    document.getElementById("canvas") as HTMLCanvasElement
  ).getContext("2d");

  if (!ctx) {
    return;
  }
  ctx.lineWidth = 10;
  ["round", "bevel", "miter"].forEach((lineJoin, i) => {
    ctx.lineJoin = lineJoin as CanvasLineJoin;
    ctx.beginPath();
    ctx.moveTo(-5, 5 + i * 40);
    ctx.lineTo(35, 45 + i * 40);
    ctx.lineTo(75, 5 + i * 40);
    ctx.lineTo(115, 45 + i * 40);
    ctx.lineTo(155, 5 + i * 40);
    ctx.stroke();
  });
}

// implement line join
strokedArrow();
