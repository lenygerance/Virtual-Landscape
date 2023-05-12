import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un Sol
 */
export class Sol extends AbstractForm {
  // add default values to avoid errors on empty arguments
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 5,
    pesenteur = true,
    ordreConstruction = 10
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction)
  }

  

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    ctx.save()
   

    // On définit les styles
    ctx.fillStyle = this.fillColor
    ctx.lineWidth = this.strokeWidth

    // Debut de mon chef d'oeuvre
    ctx.beginPath();
    ctx.strokeStyle = this.strokeColor

    // pousse l'objet au bas de l'écran (je l'ai modif pour que l'objet s'affiche seulement en haut)
    let new_y = this.y

    
    ctx.moveTo(this.x + -100, this.y + 720, new_y);
    ctx.bezierCurveTo(this.x + 200, this.y + 630, this.x + 1040, this.y + 495, this.x + 1750, this.y + 720);
    ctx.fill();
    ctx.closePath()

    

    
    ctx.restore();
  }
  

  /**
   * get array of forms
   * @return {[Sol,...]}   
   */
  static buildForms() {
    const mySol = new Sol(0, 0, 0, 0, 'rgba(142, 67, 74, 255)', '', 2, true, 10)
    let max = ~~(Math.random() *0) + 1 // Le Sol est constament visible
    let forms = []
    for (let i = 0; i < max; i++) {
      forms.push(
        new Sol(
          mySol.x,
          mySol.y,
          mySol.width,
          mySol.height,
          mySol.fillColor,
          mySol.strokeColor,
          '',
        )
      )
    }
    // retourne mon tableau d'objets Sol
    return forms
  }

}
