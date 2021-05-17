/*
 * GameOver state
 *
 * game over state
 */

export default class GameOver extends Phaser.State {
  create() {
    this.stage.backgroundColor = "#052c57";
    let style = {
      font: "bold 20px Arial",
      fill: "#fff",
      boundsAlignH: "center",
      boundsAlignV: "middle",
      wordWrap: true,
      wordWrapWidth: 400,
    };

    this.unoImage = this.add.image(
      this.world.centerX,
      this.world.centerY / 2,
      "logoUNO"
    );
    this.unoImage.anchor.set(0.5, 0.5);

    this.text = this.add.text(
      this.world.centerX,
      this.world.centerY,
      "¡Juego terminado!",
      style
    );
    this.text.anchor.set(0.5, 0.5);
    this.continue = this.add.text(
      this.world.centerX,
      this.world.centerY + 100,
      "Presiona Espacio o toca la pantalla para reiniciar.",
      style
    );
    this.continue.anchor.set(0.5, 0.5);
    this.link = this.add.text(
      this.world.centerX,
      this.world.centerY * 1.8,
      "https://www.uno-terra.com/",
      style
    );
    this.link.anchor.set(0.5, 0.5);
    this.link.inputEnabled = true;
    this.link.events.onInputDown.add(this.down, this);
  }

  update() {
    if (
      this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) ||
      this.game.input.pointer1.isDown
    ) {
      this.state.start("Game");
    }
  }

  down(e) {
    window.open("https://www.uno-terra.com/", "_blank");
  }
}
