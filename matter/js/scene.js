class SceneA extends Phaser.Scene {
    constructor() {
        super();
        
    }
    preload() {
        this.load.image('crate', 'assets/crate.png');
    }
    create() {
        this.matter.world.setBounds();
        let box;
        for (let i = 0; i < 22; i++){
            const x = Phaser.Math.Between(0, config.width);
            const y = Phaser.Math.Between(0, config.height);
            box = this.matter.add.sprite(x, y, 'crate');
            box.setMass(10)
            box.setFriction(0.5);
            box.setBounce(1.5);

            const body = Phaser.Physics.Matter.Matter.Bodies.rectangle(
                x, y, box.width, box.height, { chamfer: {radius:20}}
            )

            box.setExistingBody(body);
            if (i % 2 == 1) {
                box.setScale(2)
            }
        }
        this.matter.add.mouseSpring();
    }
}
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'phaser-example',
  pixelArt: true,
  physics: {
    default: 'matter',
    matter: {
      gravity: {
        y: 1
      },
      debug: true
    }
  },
  scene:[SceneA]
};
var game = new Phaser.Game(config);

