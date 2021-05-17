/*
 * Road background
 * ============================================================================
 *
 */

export default class Road extends Phaser.Image {
  constructor(game, x, y) {
    super(game, x, y, "road");
    this.anchor.set(0.5);
    this.speed = 3;
    // this.scale.x = 0.22;
    // this.scale.y = 0.22;
  }

  update() {
    this.y += this.speed;
    if (this.y > 640) {
      this.y = 0;
    }
  }

  faster() {
    this.speed++;
  }
}
