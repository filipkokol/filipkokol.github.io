export default function createSketch(container) {
  return (p) => {
    const CELL_SIZE = 3;
    const BORDER_WIDTH = 6;
    const MARGIN = 0;

    let COLS, ROWS;
    let grid, nextGrid;
    let im1, ip1, jm1, jp1;
    let canvasBuffer; // persistent RGB buffer we manually alpha-blend into
    let pw, ph; // pixel-density-adjusted canvas dimensions

    const computeGridSize = () => {
      const { offsetWidth, offsetHeight } = container;
      COLS = Math.max(1, Math.floor((offsetWidth - 2 * MARGIN + BORDER_WIDTH) / (CELL_SIZE + BORDER_WIDTH)));
      ROWS = Math.max(1, Math.floor((offsetHeight - 2 * MARGIN + BORDER_WIDTH) / (CELL_SIZE + BORDER_WIDTH)));
    };

    const canvasDimensions = () => ({
      W: CELL_SIZE * COLS + BORDER_WIDTH * (COLS - 1) + 2 * MARGIN,
      H: CELL_SIZE * ROWS + BORDER_WIDTH * (ROWS - 1) + 2 * MARGIN,
    });

    const buildIndexTables = () => {
      im1 = new Int32Array(COLS);
      ip1 = new Int32Array(COLS);
      for (let i = 0; i < COLS; i++) {
        im1[i] = (i - 1 + COLS) % COLS;
        ip1[i] = (i + 1) % COLS;
      }
      jm1 = new Int32Array(ROWS);
      jp1 = new Int32Array(ROWS);
      for (let j = 0; j < ROWS; j++) {
        jm1[j] = (j - 1 + ROWS) % ROWS;
        jp1[j] = (j + 1) % ROWS;
      }
    };

    const allocGrids = () => {
      grid = new Uint8Array(COLS * ROWS);
      nextGrid = new Uint8Array(COLS * ROWS);
    };

    const allocPixelBuffer = () => {
      const d = p.pixelDensity();
      pw = p.width * d;
      ph = p.height * d;
      // start black, same as an un-cleared canvas would effectively converge to
      canvasBuffer = new Uint8ClampedArray(pw * ph * 3);
    };

    const idx = (i, j) => i * ROWS + j;

    const randomizeGrid = () => {
      for (let k = 0; k < grid.length; k++) grid[k] = p.random() < 0.5 ? 1 : 0;
    };

    p.setup = () => {
      // p.pixelDensity(1); // keep 1:1, matches perf win from step 1
      // p.noSmooth();
      computeGridSize();
      const { W, H } = canvasDimensions();
      p.createCanvas(W, H);
      p.frameRate(15);
      buildIndexTables();
      allocGrids();
      randomizeGrid();
      allocPixelBuffer();
    };

    // let prevScrollY = 0;
    p.draw = () => {
      // if (Math.abs(window.scrollY - prevScrollY) > 5) {
      //   prevScrollY = window.scrollY;
      //   return;
      // }

      p.loadPixels();
      const d = p.pixelDensity();
      const cs = Math.floor(CELL_SIZE * d);

      for (let i = 0; i < COLS; i++) {
        const iL = im1[i],
          iR = ip1[i];
        for (let j = 0; j < ROWS; j++) {
          const jU = jm1[j],
            jD = jp1[j];

          const count =
            grid[idx(iL, jU)] +
            grid[idx(i, jU)] +
            grid[idx(iR, jU)] +
            grid[idx(iL, j)] +
            grid[idx(iR, j)] +
            grid[idx(iL, jD)] +
            grid[idx(i, jD)] +
            grid[idx(iR, jD)];

          const cur = grid[idx(i, j)];
          const amount = cur * count;

          const target = amount * 60;
          const a = (10 + cur * 64) / 255;

          const px = Math.floor((MARGIN + i * (CELL_SIZE + BORDER_WIDTH)) * d);
          const py = Math.floor((MARGIN + j * (CELL_SIZE + BORDER_WIDTH)) * d);

          // sample ONE pixel from the buffer to compute the blend once for the whole cell
          const sampleBufPos = (py * pw + px) * 3;
          const r = canvasBuffer[sampleBufPos] * (1 - a) + target * a;
          const g = canvasBuffer[sampleBufPos + 1] * (1 - a) + target * a;
          const b = canvasBuffer[sampleBufPos + 2] * (1 - a) + target * a;

          // build small row templates once per cell, then blit rows with .set() (native, fast)
          const rgbRow = new Uint8ClampedArray(cs * 3);
          const rgbaRow = new Uint8ClampedArray(cs * 4);
          for (let x = 0; x < cs; x++) {
            rgbRow[x * 3] = r;
            rgbRow[x * 3 + 1] = g;
            rgbRow[x * 3 + 2] = b;
            rgbaRow[x * 4] = r;
            rgbaRow[x * 4 + 1] = g;
            rgbaRow[x * 4 + 2] = b;
            rgbaRow[x * 4 + 3] = 255;
          }

          for (let y = 0; y < cs; y++) {
            const rowY = py + y;
            canvasBuffer.set(rgbRow, (rowY * pw + px) * 3);
            p.pixels.set(rgbaRow, (rowY * pw + px) * 4);
          }

          nextGrid[idx(i, j)] = count === 3 ? 1 : count < 2 || count > 3 ? 0 : cur;
        }
      }
      p.updatePixels();

      const tmp = grid;
      grid = nextGrid;
      nextGrid = tmp;
    };

    p.windowResized = () => {
      computeGridSize();
      const { W, H } = canvasDimensions();
      p.resizeCanvas(W, H);
      buildIndexTables();
      allocGrids();
      randomizeGrid();
      allocPixelBuffer(); // buffer size changed, reset trails
    };
  };
}
