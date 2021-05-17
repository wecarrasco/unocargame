/*
 * Game state
 * ============================================================================
 *
 * A sample Game state, displaying the Phaser logo.
 */

import Road from "../objects/Road";
import Player from "../objects/Player";
import Enemies from "../objects/Enemies";
import ScoreBoard from "../objects/ScoreBoard";
import Boost from "../objects/Boost";

export default class Game extends Phaser.State {
  create() {
    const { centerX: x, centerY: y } = this.world;

    this.game.world.setBounds(0, 0, x * 2, y * 2);
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    //Load objects
    this.road = this.add.existing(new Road(this.game, x, y));
    this.player = this.add.existing(new Player(this.game, x, y * 1.5));
    this.enemies = this.add.existing(new Enemies(this.game, x * 2));
    this.scoreBoard = this.add.existing(new ScoreBoard(this.game, 0));
    this.boosts = this.add.existing(new Boost(this.game, x * 2));
    this.game.camera.follow(this.player);
  }

  update() {
    this.enemies.forEach((enemy) => {
      this.game.physics.arcade.overlap(
        this.player,
        enemy,
        this.accident,
        null,
        this
      );

      //Checking if this car was already scored
      if (!enemy.scored) {
        //We passed it or not
        if (this.player.y - enemy.y < 10 && this.player.y - enemy.y > 0) {
          enemy.scored = true;
          //Increase the score
          this.scoreBoard.updateScore(5);
        }
      }
    });

    this.boosts.forEach((boost) => {
      this.game.physics.arcade.overlap(
        this.player,
        boost,
        this.faster,
        null,
        this
      );
      // this.enemies.forEach((enemy) => {
      //   this.game.physics.arcade.overlap(
      //     enemy,
      //     boost,
      //     this.destroyBoost,
      //     null,
      //     this
      //   );
      // });

      //Checking if this car was already scored
      // if (!enemy.scored) {
      //   //We passed it or not
      //   if (this.player.y - enemy.y < 10 && this.player.y - enemy.y > 0) {
      //     enemy.scored = true;
      //     //Increase the score
      //     this.scoreBoard.updateScore(5);
      //   }
      // }
    });
  }

  accident() {
    //Accident? You are doomed :(
    this.state.start("GameOver");
  }

  faster() {
    this.road.faster();
    this.enemies.faster();
    this.boosts.boostReset(this.boosts.children[0]);
  }

  destroyBoost() {
    this.boosts.boostReset(this.boosts.children[0]);
  }
}
