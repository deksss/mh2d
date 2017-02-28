import Phaser from 'phaser'

const combat = function (game) {
  const boundsMonster = game.monster.getBounds()
  const boundsWeapon = game.weapon.getBounds()
  const hit = Phaser.Rectangle.intersects(boundsMonster, boundsWeapon)
  if (game.weapon.canHit && hit) {
    game.monster.HP = game.monster.HP > 0 ? game.monster.HP - 1 : 0
    game.weapon.canHit = false
  }
  return game
}

export default combat
