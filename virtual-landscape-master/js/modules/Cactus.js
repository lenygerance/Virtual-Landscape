import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un triangle
 */
export class Cactus extends AbstractForm {
  // add default values to avoid errors on empty arguments
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 5,
    pesenteur = false,
    ordreConstruction = 3,
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction)
  }


  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    ctx.save()

    ctx.beginPath(); //base cactus (1er cactus en partant de la gauche)
    ctx.lineWidth = 20;
    ctx.strokeStyle = '#41473d';
    ctx.moveTo(this.x + 90, this.y + 700);
    ctx.lineTo(this.x + 90, this.y + 575);
    ctx.lineCap = "round"
    ctx.moveTo(this.x + 90, this.y + 575);
    ctx.lineTo(this.x + 90, this.y + 465);
    ctx.moveTo(this.x + 90, this.y + 575); //bras cactus gauche
    ctx.lineTo(this.x + 50, this.y + 535);
    ctx.moveTo(this.x + 50, this.y + 535); 
    ctx.lineTo(this.x + 50, this.y + 485);
    ctx.moveTo(this.x + 90, this.y + 600); //bras cactus droit
    ctx.lineTo(this.x + 120, this.y + 575);
    ctx.moveTo(this.x + 120, this.y + 575);
    ctx.lineTo(this.x + 120, this.y + 545);
    ctx.stroke();
    ctx.closePath()

    ctx.beginPath(); //base cactus (2eme)
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#646d46';
    ctx.moveTo(this.x + 450, this.y + 417);
    ctx.lineTo(this.x + 450, this.y + 545);
    ctx.lineCap = "round";
    ctx.moveTo(this.x + 450, this.y + 402); //tete cactus
    ctx.lineTo(this.x + 450, this.y + 370);
    ctx.stroke();
    ctx.closePath()

    ctx.beginPath(); // fleur
    ctx.fillStyle = '#8c5360';
    ctx.beginPath();
    ctx.moveTo(this.x + 450, this.y + 357);
    ctx.lineTo(this.x + 440, this.y + 347);
    ctx.lineTo(this.x + 460, this.y + 347);
    ctx.fill();
    ctx.moveTo(this.x + 450, this.y + 337);
    ctx.lineTo(this.x + 440, this.y + 347);
    ctx.lineTo(this.x + 460, this.y + 347);
    ctx.fill();
    ctx.closePath()


    ctx.beginPath(); //base cactus (3eme)
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#646d46';
    ctx.moveTo(this.x + 475, this.y + 416);
    ctx.lineTo(this.x + 472, this.y + 545);
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.closePath()

    ctx.beginPath(); // fleur
    ctx.fillStyle = '#8c5360';
    ctx.beginPath();
    ctx.moveTo(this.x + 475, this.y + 397);
    ctx.lineTo(this.x + 465, this.y + 387);
    ctx.lineTo(this.x + 485, this.y + 387);
    ctx.fill();
    ctx.moveTo(this.x + 475, this.y + 377);
    ctx.lineTo(this.x + 465, this.y + 387);
    ctx.lineTo(this.x + 485, this.y + 387);
    ctx.fill();
    ctx.closePath()

    ctx.beginPath(); //base cactus (4eme)
    ctx.lineWidth = 20;
    ctx.strokeStyle = '#5f6348';
    ctx.moveTo(this.x + 1000, this.y + 680);
    ctx.lineTo(this.x + 990, this.y + 525);
    ctx.lineCap = "round";
    ctx.moveTo(this.x + 989, this.y + 506); //tete cactus
    ctx.lineTo(this.x + 987, this.y + 485);
    ctx.stroke();
    ctx.closePath()

    ctx.beginPath(); //base cactus (5eme)
    ctx.lineWidth = 20;
    ctx.strokeStyle = '#5f6348';
    ctx.moveTo(this.x + 1030, this.y + 680);
    ctx.lineTo(this.x + 1025, this.y + 565);
    ctx.lineCap = "round";
    ctx.moveTo(this.x + 1025, this.y + 546); //tete cactus
    ctx.lineTo(this.x + 1027, this.y + 520);
    ctx.stroke();
    ctx.closePath()

    //Les 3 derniers cactus

    ctx.beginPath(); //base cactus (6eme)
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#646d46';
    ctx.moveTo(this.x + 1335, this.y + 690);
    ctx.lineTo(this.x + 1330, this.y + 630);
    ctx.moveTo(this.x + 1330, this.y + 615);
    ctx.lineTo(this.x + 1330, this.y + 600);
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.closePath()

    ctx.beginPath(); // fleur
    ctx.fillStyle = '#8c5360';
    ctx.beginPath();
    ctx.moveTo(this.x + 1330, this.y + 587);
    ctx.lineTo(this.x + 1320, this.y + 577);
    ctx.lineTo(this.x + 1340, this.y + 577);
    ctx.fill();
    ctx.moveTo(this.x + 1330, this.y + 567);
    ctx.lineTo(this.x + 1320, this.y + 577);
    ctx.lineTo(this.x + 1340, this.y + 577);
    ctx.fill();
    ctx.closePath()

    ctx.beginPath(); //base cactus (7eme)
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#646d46';
    ctx.moveTo(this.x + 1355, this.y + 690);
    ctx.lineTo(this.x + 1355, this.y + 602);
    ctx.moveTo(this.x + 1355, this.y + 587); 
    ctx.lineTo(this.x + 1355, this.y + 560);
    ctx.moveTo(this.x + 1356, this.y + 545); //tete
    ctx.lineTo(this.x + 1357, this.y + 510);
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.closePath()

    ctx.beginPath(); // fleur
    ctx.fillStyle = '#8c5360';
    ctx.beginPath();
    ctx.moveTo(this.x + 1357, this.y + 497);
    ctx.lineTo(this.x + 1347, this.y + 487);
    ctx.lineTo(this.x + 1367, this.y + 487);
    ctx.fill();
    ctx.moveTo(this.x + 1357, this.y + 477);
    ctx.lineTo(this.x + 1347, this.y + 487);
    ctx.lineTo(this.x + 1367, this.y + 487);
    ctx.fill();
    ctx.closePath()

    ctx.beginPath(); //base cactus (8eme)
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#646d46';
    ctx.moveTo(this.x + 1380, this.y + 690);
    ctx.lineTo(this.x + 1382, this.y + 620);
    ctx.moveTo(this.x + 1382, this.y + 605);
    ctx.lineTo(this.x + 1382, this.y + 590);
    ctx.moveTo(this.x + 1382, this.y + 575); //tete
    ctx.lineTo(this.x + 1383, this.y + 560);
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.closePath()

    ctx.beginPath(); // fleur
    ctx.fillStyle = '#8c5360';
    ctx.beginPath();
    ctx.moveTo(this.x +1385, this.y + 545);
    ctx.lineTo(this.x +1375, this.y + 535);
    ctx.lineTo(this.x +1395, this.y + 535);
    ctx.fill();
    ctx.moveTo(this.x +1385, this.y + 525);
    ctx.lineTo(this.x +1375, this.y + 535);
    ctx.lineTo(this.x + 1395, this.y + 535);
    ctx.fill();
    ctx.closePath()
    

    ctx.restore()
  }
  

  /**
   * get array of forms
   * @return {[Cactus,...]}
   */
  static buildForms() {
    // create a new rectangle object using the Immeuble class
    const myCactus = new Cactus(0, 0, 0, 0, '', '', 2, true, 3)
    let max = ~~(Math.random() * 0) + 1 // Les cactus sont constament visible
    let forms = []
    for (let i = 0; i < max; i++) {
      forms.push(
        new Cactus(
          myCactus.x,
          myCactus.y,
          myCactus.width,
          myCactus.height,
          myCactus.fillColor,
          myCactus.strokeColor,
          '',
        )
      )
    }
    // retourne mes tableau d'objets Cactus
    return forms
  }

}
