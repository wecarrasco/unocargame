/*
 * SplashScreen
 * ============================================================================
 *
 * Shows a busy, decorated image, containing a widget displaying the resource
 * loading progress rate.
 */

class SplashScreen extends Phaser.Group {
  constructor(game) {
    super(game);
    // this.stage.backgroundColor = "#052c57";
    this.classType = Phaser.Image;

    this.logo = this.create(
      window.innerWidth / 2,
      window.innerHeight / 2,
      "logoUNO"
    );
    this.logo.anchor.set(0.5, 0.5);
    // this.logo = this.create(0, 300, "logoUNO");
    this.progressBar = this.create(0, 200, "progress-bar");
  }
}

export default SplashScreen;
