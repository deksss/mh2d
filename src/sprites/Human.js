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
    let rotation = null
    if (this.cursors.left.isDown) {
      this.body.moveLeft(200)
      rotation = 3
    } else if (this.cursors.right.isDown) {
      this.body.moveRight(200)
      rotation = 0
    } else {
    }

    if (this.cursors.up.isDown) {
      this.body.moveUp(200)
      if (rotation === null) {
        rotation = -1.5
      } else if (rotation === 3) {
        rotation = -2
      } else if (rotation === 0) {
        rotation = -0.5
      }
    } else if (this.cursors.down.isDown) {
      this.body.moveDown(200)
      if (rotation === null) {
        rotation = 1.5
      } else if (rotation === 3) {
        rotation = 2
      } else if (rotation === 0) {
        rotation = 0.5
      }
    }

    this.body.rotation = rotation === null ? this.body.rotation : rotation

    if (!this.game.camera.atLimit.x) {
      this.game.ground.tilePosition.x -= (this.body.velocity.x * this.game.time.physicsElapsed)
    }

    if (!this.game.camera.atLimit.y) {
      this.game.ground.tilePosition.y -= (this.body.velocity.y * this.game.time.physicsElapsed)
    }
  }

}
