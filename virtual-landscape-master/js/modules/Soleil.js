import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un Soleil
 */
export class Soleil extends AbstractForm {
  // Valeur par défault pour éviter les erreurs lors d'argurments vides
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur = false,
    ordreConstruction = 1
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
    ctx.beginPath()
    ctx.strokeStyle = this.strokeColor


    // pousse l'objet au bas de l'écran (je l'ai modif pour que l'objet s'affiche seulement en haut)
    let new_y = this.y

    // Code pour le Soleil
    ctx.arc(this.x + 765, this.y + 475, 120, 0, Math.PI * 2, true, new_y); 
    ctx.fill()
    ctx.closePath()


    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[Soleil,...]}
   */
  static buildForms() {
    const mySoleil = new Soleil(0, 100, 0, 900, '#ffc761', '', 2, false, 1)
    let max = ~~(Math.random() * 2) // Le Soleil à 1 chance sur 2 d'apparaitre
    let forms = []
    for (let i = 0; i < max; i++) {
      forms.push(
        new Soleil(
          mySoleil.x,
          mySoleil.y,
          mySoleil.width,
          mySoleil.height,
          mySoleil.fillColor,
          mySoleil.strokeColor,
          '',
          
        )
      )
    }
    // retourne un tableau d'objets de type Mongolfiere
    return forms
  }

}
