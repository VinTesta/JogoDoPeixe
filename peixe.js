const screenSize = {
  width: 800,
  height: 600
}

const listOfFishes = [
  {
    name: 'peixe_amarelo',
    url: 'assets/peixes/peixe_amarelo.png'
  },
  {
    name: 'concha',
    url: 'assets/peixes/concha.png'
  },
  {
    name: 'crustaceo',
    url: 'assets/peixes/crustaceo.png'
  }
]

/**
 * Class with the functions to generate a Scene
 */
class CeaScene extends Phaser.Scene {

  /**
   * Preload de assets and elements
   */
  preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    this.load.image('baiacu', 'assets/peixes/baiacu.png');
    this.load.image('logo-inteli', 'assets/logo-inteli_branco.png');

    this.preloadFishes();
  }

  /**
   * Insert elements in the display
   */
  create() {
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo-inteli').setScale(0.5);
    
    this.peixe = this.add.image(400, 300, 'baiacu');
    this.peixe.setFlip(true, false);

    this.createFishes()
  }
  
  /**
   * A loop to update the state of game
   */
  update() {
    this.peixe.x = this.input.x;
    this.peixe.y = this.input.y;
  }

  /**
   * Preload a list of fishes
   */
  preloadFishes() {
    listOfFishes.forEach((fish) => {
      this.load.image(fish.name, fish.url);
    });
  }

  /**
   * Create a list of fishes
   */
  createFishes() {
    listOfFishes.forEach((fish) => {
      const presetX = {min: 50, max: 750};
      const presetY = {min: 50, max: 550};
      const x = Math.random() * (presetX.max - presetX.min) + presetX.min; 
      const y = Math.random() * (presetY.max - presetY.min) + presetY.min; 
      console.log(x, y);
      this.add.image(x, y, fish.name);
    });
  }
}

/**
 * Generating game
 */
const game = new Phaser.Game({
    type: Phaser.AUTO,
    width: screenSize.width,
    height: screenSize.height,
    scene: CeaScene
});

let resposta = `
  Sim, eu já prograva antes. Trabalhei uns 3 anos na área, porém, sempre é legal ter uma experiencia nova
  com código, foi muito enriquecedor poder conhecer um pouco do Phaser.
  O Phaser parece uma framework fácil de usar. Nunca tinha achado uma ferramente
  para games direto em canvas e achei a experiencia de uso bem tranquila. Vou tentar usa-lo com o NPM.`

console.log(resposta);