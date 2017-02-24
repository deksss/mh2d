/* globals __DEV__ */
import Phaser from 'phaser'
import Human from '../sprites/Human'
import Weapon from '../sprites/Weapon'
import Monster from '../sprites/Monster'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    const bannerText = 'Hunter game'
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)

    this.game.physics.startSystem(Phaser.Physics.P2JS)
    this.game.physics.p2.defaultRestitution = 0.9
    this.ground = this.game.add.tileSprite(0, 0, 800, 480, 'ground')
    this.ground.fixedToCamera = true

    this.human = new Human({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'human'
    })

    this.weapon = new Weapon({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'weapon',
      owner: this.human
    })

    this.monster = new Monster({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY,
      assets: {body: 'monster-body',
        head: 'monster-head',
        leg: 'monster-leg',
        arm: 'monster-arm'
      }
    })

    this.game.add.existing(this.human)
    this.game.add.existing(this.weapon)
    this.game.add.existing(this.monster)

    this.game.world.setBounds(0, 0, 1600, 1200)
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.human, 32, 32)
    }
  }
}
