import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine une Lune
 */
export class Lune extends AbstractForm {
  //  Valeur par défault pour éviter les erreurs lors d'argurments vides
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 5,
    pesenteur = false,
    ordreConstruction = 2
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction)
  }


  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    ctx.save()
    ctx.beginPath();

    // On définit les styles
    ctx.fillStyle = this.fillColor
    ctx.lineWidth = this.strokeWidth

    // Debut de mon chef d'oeuvre
   
    ctx.strokeStyle = this.strokeColor

    // pousse l'objet au bas de l'écran (je l'ai modif pour que l'objet s'affiche seulement en haut)
    let new_y = this.y

    ctx.arc(this.x + 205, this.y + 45, 500, 0, Math.PI * 2, true);  // Lune
    ctx.fill();
    ctx.closePath()

    ctx.restore()
  }
  

  /**
   * get array of forms
   * @return {[Lune,...]}
   */
  static buildForms() {
    const myLune = new Lune(110, 75, 0, 100, 'white', '', 2, true, 2)
    let max = ~~(Math.random() * 2) //La lune à 1 chance sur 2 d'apparaitre
    let forms = []
    for (let i = 0; i < max; i++) {
      forms.push(
        new Lune(
          myLune.x,
          myLune.y,
          myLune.width,
          myLune.height,
          myLune.fillColor,
          myLune.strokeColor,
          '',
        )
      )
    }
    // Retourne mon tableau d'objets Lune
    return forms
  }

}
