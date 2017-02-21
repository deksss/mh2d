import Phaser from 'phaser'

export default class extends Phaser.Sprite {

  constructor ({ game, x, y, asset, owner }) {
    super(game, x, y, asset)
    this.anchor.setTo(-0.5, 0.5)
    this.scale.set(1.1)
    this.smoothed = true
    this.owner = owner
    game.physics.p2.enable(this, false)
    this.atackKey = game.input.keyboard.addKey(Phaser.Keyboard.Z)

    this.atakTime = 500
    this.atakFinishedTime = null
    this.inAtack = false
  }

  update () {
    // this.body.setZeroVelocity()
    this.body.x = this.owner.body.x
    this.body.y = this.owner.body.y
    this.body.rotation = this.owner.body.rotation

    if (this.atackKey.isDown && !this.inAtack) {
      this.atakFinishedTime = this.game.time.now + this.atakTime
      this.inAtack = true
      console.log('ATACK!')
    }

    if (this.game.time.now < this.atakFinishedTime) {
      if (this.anchor.x > -1) {
        this.anchor.setTo(this.anchor.x - 0.05, 0.5)
      }
    } else {
      this.inAtack = false
      this.anchor.setTo(-0.1, 0.5)
    }
  }
}
