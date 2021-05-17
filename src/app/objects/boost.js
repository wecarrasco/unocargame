/*
 * Boost
 * ============================================================================
 */

//
//
export default class Boost extends Phaser.Group {
  constructor(game, equis) {
    super(game, null, "uno", false, true, Phaser.Physics.ARCADE);
    this.speed = 2;
    this.space = equis / 4;
    this.spawnPoints = [
      [this.space - 60, 0],
      [this.space * 2 - 60, 0],
      [this.space * 3 - 48, 0],
      [this.space * 4 - 48, 0],
    ];
    // this.spawnPoints = [
    //   [70, 0],
    //   [180, 0],
    //   [310, 0],
    //   [390, 0],
    // ];
    this.enableBody = true;
    this.game.time.events
      .loop(Phaser.Timer.SECOND * 4, this.spawner, this)
      .timer.start();
  }

  update() {
    this.game.physics.arcade.collide(this);
    this.children.forEach((boost) => {
      boost.y += this.speed;
    });
  }

  spawner() {
    let point = this.game.rnd.integerInRange(0, 3);
    let [x, y] = this.spawnPoints[point];
    let boost = this.create(x, y, "uno");
    boost.scored = false;
    boost.scale.x = 0.6;
    boost.scale.y = 0.6;
    boost.anchor.x = 0.5;
    boost.anchor.y = 0.5;
    boost.checkWorldBounds = true;
  }

  boostReset(boost) {
    boost.destroy();
  }
}
