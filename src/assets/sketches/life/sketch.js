export default function createSketch(container) {
  return (p) => {
    const CELL_SIZE = 3;
    const BORDER_WIDTH = 6;
    const MARGIN = 0;

    let COLS, ROWS;
    let grid, nextGrid; // Uint8Array, ping-ponged
    let im1, ip1, jm1, jp1; // precomputed wrap-around index tables

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

    const idx = (i, j) => i * ROWS + j;

    const randomizeGrid = () => {
      for (let k = 0; k < grid.length; k++) grid[k] = p.random() < 0.5 ? 1 : 0;
    };

    p.setup = () => {
      // p.noSmooth();
      computeGridSize();
      const { W, H } = canvasDimensions();
      p.createCanvas(W, H);
      p.frameRate(15);
      buildIndexTables();
      allocGrids();
      randomizeGrid();
    };

    p.draw = () => {
      p.noStroke();

      for (let i = 0; i < COLS; i++) {
        const iL = im1[i],
          iR = ip1[i];
        for (let j = 0; j < ROWS; j++) {
          const jU = jm1[j],
            jD = jp1[j];

          // 8 direct lookups, no inner loop, no modulo in the hot path
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

          p.fill(amount * 60, amount * 60, amount * 60, 10 + cur * 64);
          p.rect(
            MARGIN + i * (CELL_SIZE + BORDER_WIDTH),
            MARGIN + j * (CELL_SIZE + BORDER_WIDTH),
            CELL_SIZE,
            CELL_SIZE,
          );

          nextGrid[idx(i, j)] = count === 3 ? 1 : count < 2 || count > 3 ? 0 : cur;
        }
      }

      // swap buffers instead of reallocating
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
    };
  };
}
