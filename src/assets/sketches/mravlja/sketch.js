import { state } from './classes/state.js';

import Ants from './classes/Ant.js';
import Cursor from './classes/Cursor.js';
import Food from './classes/Food.js';

export default function createSketch(container) {
  return (p) => {
    const cursor = new Cursor(p);
    const food = new Food(p);
    const ants = new Ants(p, food);

    p.setup = () => {
      const { offsetWidth, offsetHeight } = container;
      p.createCanvas(offsetWidth, offsetHeight);
    };

    p.draw = () => {
      state.dt = p.deltaTime / 1000; // speed & timing independent of framerate

      p.background('ivory');

      if (!state.isMobile) {
        cursor.update();
      }
      cursor.draw();

      food.update();
      food.draw();

      ants.update();
      ants.draw();
    };

    console.log(p);

    p.mouseClicked = () => {
      console.log('ADS');
      state.mouseHasBeenClicked = true;

      if (cursorIsOffCanvas()) return;

      const cursorPos = state.isMobile ? cursor.mousePos : cursor.pos;
      food.placeNew(cursorPos);

      return false;
    };

    p.windowResized = () => setCanvasSize();

    const setCanvasSize = () => {
      console.log('set size');
      const { offsetWidth, offsetHeight } = container;
      p.resizeCanvas(offsetWidth, offsetHeight);
    };

    const cursorIsOffCanvas = () => {
      const { mousePos } = cursor;
      return mousePos.x < 0 || mousePos.x > p.width || mousePos.y < 0 || mousePos.y > p.height;
    };
  };
}
