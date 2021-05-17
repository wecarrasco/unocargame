/*
 * Player
 * ============================================================================
 *
 */

export default class Player extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, "player");

    this.anchor.set(0.5);
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.collideWorldBounds = true;
    this.cursors = game.input.keyboard.createCursorKeys();
    this.touch = game.input.pointer1;
    this.pointer = game.input.activePointer;
    this.speed = 5;
    this.scale.x = 0.7;
    this.scale.y = 0.7;
    this.spacekey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this.spacekey.onDown.add(this.dodge, this);
  }

  update() {
    // console.log(this.touch);
    if (this.touch.isDown) {
      this.x = this.touch.x;
      this.y = this.touch.y;
    }
    if (this.cursors.left.isDown) {
      this.x -= this.speed;
    } else if (this.cursors.right.isDown) {
      this.x += this.speed;
    }

    if (this.cursors.up.isDown) {
      this.y -= this.speed;
    } else if (this.cursors.down.isDown) {
      this.y += this.speed;
    }
    if (this.pointer.isDown) {
      this.x = this.pointer.position.x;
      this.y = this.pointer.position.y;
    }
  }

  dodge() {}
}
