/*
 * The `app` module
 * ============================================================================
 *
 * This module provides the game initialization routine.
 */

// Required: import the Babel runtime module.
import "babel-polyfill";

// Import game states.
import * as states from "./app/states";

export function init() {
  const width = window.innerWidth;
  const game = new Phaser.Game(
    width < 480 ? width : 480,
    window.innerHeight,
    Phaser.AUTO
  );
  game.resolution = window.devicePixelRatio;
  // var game = new Phaser.Game(
  //   window.innerWidth,
  //   window.innerHeight,
  //   Phaser.CANVAS,
  //   "game"
  // );

  // Dynamically add all required game states.
  Object.keys(states).forEach((key) => game.state.add(key, states[key]));

  game.state.start("Boot");

  return game;
}
