import Phaser from 'phaser'

export default class extends Phaser.Sprite {

  constructor ({ game, x, y, asset, owner }) {
    super(game, x, y, asset)
    this.anchor.setTo(-0.5, 0.5)
    this.scale.set(1.1)
    this.smoothed = true
    this.owner = owner
    game.physics.p2.enable(this, false)
    console.log(this.body)
  //  this.body.setCircle(28)
  }

  update () {
    this.body.setZeroVelocity()
    this.body.velocity.x = this.owner.body.velocity.x
    this.body.velocity.y = this.owner.body.velocity.y
  }

}
