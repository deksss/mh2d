import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.image('human', 'assets/images/humanoid1.png')
    this.load.image('ground', 'assets/images/earth.png')
    this.load.image('weapon', 'assets/images/turret.png')
    this.load.image('monster-body', 'assets/images/body.png')
    this.load.image('monster-head', 'assets/images/body.png')
    this.load.image('monster-arm1', 'assets/images/body.png')
    this.load.image('monster-arm2', 'assets/images/body.png')
  }

  create () {
    this.state.start('Game')
  }

}
