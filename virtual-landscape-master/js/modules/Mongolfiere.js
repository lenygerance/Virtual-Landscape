import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine une Mongolfiere
 */
export class Mongolfiere extends AbstractForm {
  //  Valeur par défault pour éviter les erreurs lors d'argurments vides
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
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

    // On définit les styles
    ctx.fillStyle = this.fillColor
    ctx.lineWidth = this.strokeWidth

    // Debut de mon chef d'oeuvre
    ctx.beginPath()
    ctx.strokeStyle = this.strokeColor

    // pousse l'objet au bas de l'écran (je l'ai modif pour que l'objet s'affiche seulement en haut)
    let new_y = this.y

    // Code pour la Mongolfiere
    ctx.fillRect(this.x +  100, this.y + 100, 5, 5, new_y);
    ctx.moveTo(this.x + 100, this.y + 95);
    ctx.bezierCurveTo(this.x + 50, this.y + 50, this.x + 155, this.y + 50, this.x + 105, this.y + 95);

    ctx.closePath()

   
    ctx.fill()
    
    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[Mongolfiere,...]}
   */
  static buildForms() {
    const myMongolfiere = new Mongolfiere(1100, 700, 1300, 500, 'rgba(0, 0, 0, 0.5)', '', 2, false, 2)
    let max = ~~(Math.random() * 0) + 7 // Entre [0 à 7] Mongolfieres crée
    let forms = []
    for (let i = 0; i < max; i++) {
      forms.push(
        new Mongolfiere(
          ~~(Math.random() * 3 * myMongolfiere.x + 10),
          ~~(Math.random() * myMongolfiere.y ),
          ~~(Math.random() * 3 * myMongolfiere.width + 900),
          ~~(Math.random() * myMongolfiere.height + 10),
          myMongolfiere.fillColor,
          myMongolfiere.strokeColor,
          '',
          
        )
      )
    }
    // retourne un tableau d'objets de type Mongolfiere
    return forms
  }

}
