/*
 * Enemies
 * ============================================================================
 */

//
//
export default class Enemies extends Phaser.Group {
  constructor(game, equis) {
    super(game, null, "enemies", false, true, Phaser.Physics.ARCADE);
    this.speed = 2;
    this.space = equis / 4;
    this.spawnPoints = [
      [this.space - 60, 0],
      [this.space * 2 - 60, 0],
      [this.space * 3 - 48, 0],
      [this.space * 4 - 48, 0],
    ];
    // this.spawnPoints = [
    //   [window.innerWidth / 4, 0],
    //   [window.innerWidth / 1.3, 0],
    //   [window.innerWidth * 1.3, 0],
    //   [window.innerWidth * 1.8, 0],
    // ];
    this.spawnTime = 2;
    this.enableBody = true;
    this.game.time.events
      .loop(Phaser.Timer.SECOND * this.spawnTime, this.spawner, this)
      .timer.start();
  }

  update() {
    this.game.physics.arcade.collide(this);
    this.children.forEach((enemy) => {
      enemy.y += this.speed;
    });
  }

  spawner() {
    let point = this.game.rnd.integerInRange(0, 3);
    let [x, y] = this.spawnPoints[point];
    let enemycar = this.create(x, y, "enemycar");
    enemycar.scored = false;
    enemycar.scale.x = 0.6;
    enemycar.scale.y = 0.6;
    enemycar.anchor.x = 0.5;
    enemycar.anchor.y = 0.5;
    enemycar.checkWorldBounds = true;
  }

  faster() {
    this.speed += 0.5;
  }

  carReset(enemy) {
    enemy.destroy();
  }
}
