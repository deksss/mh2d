import Phaser from 'phaser'

export default class extends Phaser.Sprite {

  constructor ({ game, x, y, asset, owner }) {
    super(game, x, y, asset)
    this.anchor.setTo(-0.5, 0.5)
    this.scale.set(1.1)
    this.smoothed = true
    this.owner = owner
    game.physics.p2.enable(this, false)
  }

  update () {
    // this.body.setZeroVelocity()
    this.body.x = this.owner.body.x
    this.body.y = this.owner.body.y
    this.body.rotation = this.owner.body.rotation
  }

}
