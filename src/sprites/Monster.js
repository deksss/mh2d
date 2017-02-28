import Phaser from 'phaser'

export default class extends Phaser.Group {

  constructor ({ game, x, y, assets }) {
    super(game)
    game.physics.p2.enable(this, false)

    this.HP = 100

    this.x = 300
    this.y = 200

    this.pivot.x = 300
    this.pivot.y = 300

    // Monster components.
    this.head = this.create(120, 150, assets.head)
    this.armL = this.create(50, 175, assets.arm)
    this.armR = this.create(200, 175, assets.arm)
    this.legR = this.create(50, 300, assets.leg)
    this.bodyPart = this.create(100, 200, assets.body)
    this.legL = this.create(200, 300, assets.leg)

    this.head.scale.set(2)
    this.armL.scale.set(1)
    this.armR.scale.set(1)
    this.legR.scale.set(1.5)
    this.bodyPart.scale.set(3)
    this.legL.scale.set(1.5)
  }

  update () {
  }
}
