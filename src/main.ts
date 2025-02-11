import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

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
  if (!canvas.getContext) {
    return;
  }
  const ctx = canvas.getContext("2d");
}
