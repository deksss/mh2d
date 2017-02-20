import Phaser from 'phaser'

export default class extends Phaser.Sprite {

  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.scale.set(1.1)
    this.smoothed = false
    game.physics.p2.enable(this, false)
    this.body.setCircle(28)
    game.camera.follow(this)
    this.rotationOffset = -90
    this.cursors = game.input.keyboard.createCursorKeys()
  }

  update () {
    this.body.setZeroVelocity()

    if (this.cursors.left.isDown) {
      this.body.moveLeft(200)
      this.body.rotation = 3
      //  this.body.rotateLeft(100)
    } else if (this.cursors.right.isDown) {
      // this.body.rotateRight(100)
      this.body.moveRight(200)
      this.body.rotation = 0
    } else {
      // this.body.setZeroRotation()
    }

    if (this.cursors.up.isDown) {
      this.body.moveUp(200)
      this.body.rotation = -1.5
      //  this.body.thrust(50)
    } else if (this.cursors.down.isDown) {
      this.body.moveDown(200)
      // this.body.reverse(50)
      this.body.rotation = 1.5
    }

    if (!this.game.camera.atLimit.x) {
      this.game.ground.tilePosition.x -= (this.body.velocity.x * this.game.time.physicsElapsed)
    }

    if (!this.game.camera.atLimit.y) {
      this.game.ground.tilePosition.y -= (this.body.velocity.y * this.game.time.physicsElapsed)
    }
  }

}
