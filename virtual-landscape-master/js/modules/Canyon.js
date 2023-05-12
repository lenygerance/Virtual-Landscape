import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un Canyon 
 */
export class Canyon extends AbstractForm {
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
    ordreConstruction = 3
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction)
  }


  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    ctx.save()
    
    //colonne de pierre 

    ctx.beginPath();
    ctx.fillStyle = '#5c4c4e'; // 1ere couleur
    ctx.fillRect(this.x + 230, this.y + 370, 188, 20); 
    ctx.fillRect(this.x + 265, this.y +  345, 75, 25); 
    ctx.fillRect(this.x + 280, this.y + 330, 60, 25); 
    ctx.moveTo(this.x + 280, this.y + 330);
    ctx.lineTo(this.x + 265, this.y + 345);
    ctx.lineTo(this.x + 280, this.y + 345);
    ctx.moveTo(this.x + 340, this.y + 370);
    ctx.lineTo(this.x + 340, this.y + 330);
    ctx.lineTo(this.x + 380, this.y + 370);
    ctx.fill();
    ctx.closePath()

    ctx.beginPath();
    ctx.fillStyle = '#744a4b'; // 2eme couleur
    ctx.fillRect(this.x + 210, this.y + 390, 208, 30); 
    ctx.fillRect(this.x + 200, this.y + 400, 190, 15);
    ctx.fillRect(this.x + 195, this.y + 405, 190, 15);
    ctx.moveTo(this.x + 418, this.y +  390);
    ctx.lineTo(this.x + 418, this.y + 420);
    ctx.lineTo(this.x + 443, this.y + 420);
    ctx.fill();
    ctx.closePath()

    ctx.beginPath();
    ctx.fillStyle = '#5e4e51'; // 3eme couleur
    ctx.fillRect(this.x + 180, this.y + 420, 263, 25); 
    ctx.fillRect(this.x + 215, this.y + 430, 263, 15);
    ctx.moveTo(this.x + 443, this.y + 420);
    ctx.lineTo(this.x + 443, this.y + 431);
    ctx.lineTo(this.x + 453, this.y + 431);
    ctx.moveTo(this.x + 478, this.y + 430);
    ctx.lineTo(this.x + 478, this.y + 445);
    ctx.lineTo(this.x + 488, this.y + 445);
    ctx.fill();
    ctx.closePath()
    
    ctx.beginPath();
    ctx.fillStyle = '#7a4e4d'; // 4eme couleur
    ctx.fillRect(this.x + 180, this.y + 445, 308, 25);
    ctx.fillRect(this.x + 170, this.y + 470, 115, 35);
    ctx.fillRect(this.x + 375, this.y + 470, 113, 15);
    ctx.fillRect(this.x + 385, this.y + 480, 103, 15);
    ctx.fillRect(this.x + 395, this.y + 490, 118, 15);
    ctx.moveTo(this.x + 285, this.y + 470);
    ctx.lineTo(this.x + 320, this.y + 470);
    ctx.lineTo(this.x + 285, this.y + 505);
    ctx.moveTo(this.x + 360, this.y + 470);
    ctx.lineTo(this.x + 375, this.y + 470);
    ctx.lineTo(this.x + 375, this.y + 485);
    ctx.moveTo(this.x + 375, this.y + 485);
    ctx.lineTo(this.x + 385, this.y + 485);
    ctx.lineTo(this.x + 385, this.y +  495);
    ctx.moveTo(this.x + 385, this.y + 495);
    ctx.lineTo(this.x + 395, this.y + 495);
    ctx.lineTo(this.x + 395, this.y + 505);
    ctx.moveTo(this.x + 488, this.y + 480);
    ctx.lineTo(this.x + 488, this.y + 490);
    ctx.lineTo(this.x + 498, this.y + 490); 
    ctx.fill();
    ctx.closePath()

    ctx.beginPath();
    ctx.fillStyle = '#6f5653'; // 5eme couleur
    ctx.fillRect(this.x + 170, this.y + 505, 100, 30);
    ctx.fillRect(this.x + 425, this.y + 505, 100, 30);
    ctx.moveTo(this.x + 395, this.y + 505);
    ctx.lineTo(this.x + 425, this.y + 505);
    ctx.lineTo(this.x + 425, this.y + 535);
    ctx.moveTo(this.x + 270, this.y + 505);
    ctx.lineTo(this.x + 270, this.y + 520);
    ctx.lineTo(this.x + 285, this.y + 505);
    ctx.moveTo(this.x + 525, this.y + 514); 
    ctx.lineTo(this.x + 525, this.y + 502);
    ctx.lineTo(this.x + 495, this.y + 503);
    ctx.fill();
    ctx.closePath()

    ctx.beginPath();
    ctx.fillStyle = '#583e41'; // 6eme couleur
    ctx.fillRect(this.x + 170, this.y + 535, 100, 20);
    ctx.fillRect(this.x + 425, this.y + 535, 100, 20);
    ctx.moveTo(this.x + 270, this.y + 532); // effet de 3D
    ctx.lineTo(this.x + 270, this.y + 555);
    ctx.lineTo(this.x + 240, this.y + 535);
    ctx.moveTo(this.x + 525, this.y + 532); 
    ctx.lineTo(this.x + 525, this.y + 555);
    ctx.lineTo(this.x + 495, this.y + 535);
    ctx.fill();
    ctx.closePath()

    ctx.beginPath();
    ctx.fillStyle = '#614441'; // 7eme couleur
    ctx.fillRect(this.x + 170, this.y + 550, 100, 15);
    ctx.fillRect(this.x + 155, this.y + 555, 115, 15);
    ctx.fillRect(this.x + 425, this.y + 550, 100, 20);
    ctx.moveTo(this.x + 270, this.y + 547); // effet de 3D
    ctx.lineTo(this.x + 270, this.y + 570);
    ctx.lineTo(this.x + 240, this.y + 550);
    ctx.moveTo(this.x + 425, this.y + 545); //droite effet de mort
    ctx.lineTo(this.x + 432, this.y + 550);
    ctx.lineTo(this.x + 425, this.y + 550); // fin de leffet
    ctx.moveTo(this.x + 525, this.y + 547); 
    ctx.lineTo(this.x + 525, this.y + 570);
    ctx.lineTo(this.x + 495, this.y + 550);
    ctx.fill();
    ctx.closePath()

    ctx.beginPath();
    ctx.fillStyle = '#583e41'; // 8eme couleur
    ctx.fillRect(this.x + 135, this.y + 570, 135, 20);
    ctx.fillRect(this.x + 425, this.y + 570, 95, 20);
    //effet de 3d
    ctx.moveTo(this.x + 425, this.y + 565); 
    ctx.lineTo(this.x + 432, this.y + 570);
    ctx.lineTo(this.x + 425, this.y + 570);
    ctx.fill();
    ctx.closePath()


    ctx.beginPath();
    ctx.fillStyle = '#5c3f43'; // 9eme couleur
    ctx.fillRect(this.x + 135, this.y + 590, 148, 20);
    ctx.fillRect(this.x + 420, this.y + 590, 125, 20);
    ctx.fillRect(this.x + 542, this.y + 605, 21, 5);
    ctx.moveTo(this.x + 283, this.y + 587); // effet de 3D
    ctx.lineTo(this.x + 283, this.y + 610);
    ctx.lineTo(this.x + 265, this.y + 590);
    ctx.moveTo(this.x + 135, this.y + 585); 
    ctx.lineTo(this.x + 142, this.y + 590);
    ctx.lineTo(this.x + 135, this.y + 590);
    ctx.fill();
    ctx.closePath()

    ctx.beginPath();
    ctx.fillStyle = '#543c3c'; // 10eme couleur
    ctx.fillRect(this.x + 135, this.y + 610, 148, 40);
    ctx.fillRect(this.x + 120, this.y + 640, 148, 20);
    ctx.fillRect(this.x + 110, this.y + 650, 148, 20);
    ctx.fillRect(this.x + 400, this.y + 610, 148, 40);
    ctx.moveTo(this.x + 283, this.y + 602); // effet de 3D
    ctx.lineTo(this.x + 283, this.y + 630);
    ctx.lineTo(this.x + 252, this.y + 610);
    ctx.moveTo(this.x + 135, this.y + 605); 
    ctx.lineTo(this.x + 142, this.y + 610);
    ctx.lineTo(this.x + 135, this.y + 610);
    ctx.fill();
    ctx.closePath()

    //sable

    //sable exterieur
    ctx.beginPath(); // 1er en partant de la gauche
    ctx.fillStyle = '#c68c74'; 
    ctx.moveTo(this.x + 100, this.y + 700);
    ctx.lineTo(this.x + 100, this.y + 655);
    ctx.lineTo(this.x + 110, this.y + 670);
    ctx.moveTo(this.x + 135, this.y + 620);
    ctx.lineTo(this.x + 100, this.y + 655);
    ctx.lineTo(this.x + 110, this.y + 670);
    ctx.moveTo(this.x + 135, this.y + 620);
    ctx.lineTo(this.x + 145, this.y + 635);
    ctx.lineTo(this.x + 110, this.y + 670);
    ctx.fill();
    ctx.closePath()

    ctx.beginPath(); // 2eme 
    ctx.fillStyle = '#c68c74'; 
    ctx.moveTo(this.x + 135, this.y + 570);
    ctx.lineTo(this.x + 170, this.y + 535);
    ctx.lineTo(this.x + 185, this.y + 545);
    ctx.moveTo(this.x + 135, this.y + 570);
    ctx.lineTo(this.x + 140, this.y + 585);
    ctx.lineTo(this.x + 185, this.y + 545);
    ctx.fill();
    ctx.closePath()

    ctx.beginPath(); // 3eme 
    ctx.fillStyle = '#c68c74'; 
    ctx.moveTo(this.x + 170, this.y + 470);
    ctx.lineTo(this.x + 180, this.y + 460);
    ctx.lineTo(this.x + 175, this.y + 478);
    ctx.moveTo(this.x + 185, this.y + 470);
    ctx.lineTo(this.x + 180, this.y + 460);
    ctx.lineTo(this.x + 175, this.y + 478);
    ctx.fill();
    ctx.closePath()

    ctx.beginPath(); // 4eme 
    ctx.fillStyle = '#c68c74'; 
    ctx.moveTo(this.x + 230, this.y + 370);
    ctx.lineTo(this.x + 265, this.y + 370);
    ctx.lineTo(this.x + 235, this.y + 385);
    ctx.moveTo(this.x + 262, this.y + 385);
    ctx.lineTo(this.x + 265, this.y + 370);
    ctx.lineTo(this.x + 235, this.y + 385);
    ctx.moveTo(this.x + 180, this.y + 420);
    ctx.lineTo(this.x + 230, this.y + 370);
    ctx.lineTo(this.x + 235, this.y + 385);
    ctx.moveTo(this.x + 180, this.y + 420);
    ctx.lineTo(this.x + 187, this.y + 427);
    ctx.lineTo(this.x + 235, this.y + 385);
    ctx.fill();
    ctx.closePath()

    ctx.beginPath(); // 5eme 
    ctx.fillStyle = '#c68c74'; 
    ctx.moveTo(this.x + 265, this.y + 345);
    ctx.lineTo(this.x + 280, this.y + 330);
    ctx.lineTo(this.x + 282, this.y + 350);
    ctx.moveTo(this.x + 340, this.y + 330);
    ctx.lineTo(this.x + 280, this.y + 330);
    ctx.lineTo(this.x + 282, this.y + 350);
    ctx.moveTo(this.x + 340, this.y + 330);
    ctx.lineTo(this.x + 320, this.y + 350);
    ctx.lineTo(this.x + 282, this.y + 350);
    ctx.fill();
    ctx.closePath()

    ctx.beginPath(); // 6eme 
    ctx.fillStyle = '#c68c74'; 
    ctx.moveTo(this.x + 380, this.y + 370);
    ctx.lineTo(this.x + 418, this.y + 370);
    ctx.lineTo(this.x + 390, this.y + 385);
    ctx.moveTo(this.x + 380, this.y + 370);
    ctx.lineTo(this.x + 365, this.y + 385);
    ctx.lineTo(this.x + 390, this.y + 385);
    ctx.fill();
    ctx.closePath()

    ctx.beginPath(); // 7eme 
    ctx.fillStyle = '#c68c74'; 
    ctx.moveTo(this.x + 453, this.y + 430);
    ctx.lineTo(this.x + 478, this.y + 430);
    ctx.lineTo(this.x + 488, this.y + 445);
    ctx.moveTo(this.x + 453, this.y + 430);
    ctx.lineTo(this.x + 458, this.y + 450);
    ctx.lineTo(this.x + 488, this.y + 445);
    ctx.moveTo(this.x + 453, this.y + 430);
    ctx.lineTo(this.x + 458, this.y + 450);
    ctx.lineTo(this.x + 440, this.y + 450);
    ctx.fill();
    ctx.closePath()

    ctx.beginPath(); // 8eme 
    ctx.fillStyle = '#c68c74'; 
    ctx.moveTo(this.x + 500, this.y + 490);
    ctx.lineTo(this.x + 513, this.y + 490);
    ctx.lineTo(this.x + 525, this.y + 502);
    ctx.moveTo(this.x + 500, this.y + 490);
    ctx.lineTo(this.x + 498, this.y + 512);
    ctx.lineTo(this.x + 525, this.y + 502);
    ctx.moveTo(this.x + 500, this.y + 490);
    ctx.lineTo(this.x + 498, this.y + 512);
    ctx.lineTo(this.x + 478, this.y + 512);
    ctx.fill();
    ctx.closePath()


    ctx.beginPath(); // 9eme
    ctx.fillStyle = '#c68c74'; 
    ctx.moveTo(this.x + 563, this.y + 605);
    ctx.lineTo(this.x + 525, this.y + 558);
    ctx.lineTo(this.x + 500, this.y + 570);
    ctx.moveTo(this.x + 563, this.y + 605);
    ctx.lineTo(this.x + 540, this.y + 610);
    ctx.lineTo(this.x + 500, this.y + 570);
    ctx.fill();
    ctx.closePath()

    //sable interieur
    ctx.beginPath(); // 1er
    ctx.fillStyle = '#c68c74'; 
    ctx.moveTo(this.x + 283, this.y + 585);
    ctx.lineTo(this.x + 270, this.y + 570);
    ctx.lineTo(this.x + 240, this.y + 585);
    ctx.moveTo(this.x + 283, this.y + 585);
    ctx.lineTo(this.x + 250, this.y + 598);
    ctx.lineTo(this.x + 240, this.y + 585);
    ctx.fill();
    ctx.closePath()

    ctx.beginPath(); // 2eme
    ctx.fillStyle = '#c68c74'; 
    ctx.moveTo(this.x + 282, this.y + 610);
    ctx.lineTo(this.x + 242, this.y + 625);
    ctx.lineTo(this.x + 285, this.y + 655);
    ctx.moveTo(this.x + 310, this.y + 635);
    ctx.lineTo(this.x + 282, this.y + 610);
    ctx.lineTo(this.x + 285, this.y + 655);
    ctx.fill();
    ctx.closePath()


    ctx.beginPath(); // 3eme
    ctx.fillStyle = '#c68c74'; 
    ctx.moveTo(this.x + 425, this.y + 585);
    ctx.lineTo(this.x + 400, this.y + 610);
    ctx.lineTo(this.x + 412, this.y + 622);
    ctx.moveTo(this.x + 425, this.y + 585);
    ctx.lineTo(this.x + 432, this.y + 595);
    ctx.lineTo(this.x + 412, this.y + 622);
    ctx.fill();
    ctx.closePath()



    //colonne n2

    ctx.beginPath();
    ctx.fillStyle = '#624847'; //1ere couleur
    ctx.fillRect(this.x + 1060, this.y + 485, 30, 15); 
    ctx.closePath()

    ctx.beginPath();
    ctx.fillStyle = '#564044'; // 2ere couleur
    ctx.fillRect(this.x + 1060, this.y + 500, 30, 25);
    ctx.moveTo(this.x + 1050, this.y + 522); //effet de 3D
    ctx.lineTo(this.x + 1050, this.y + 500); 
    ctx.lineTo(this.x + 1070, this.y + 525);
    ctx.moveTo(this.x + 1050, this.y + 522);
    ctx.lineTo(this.x + 1050, this.y + 500); 
    ctx.lineTo(this.x + 1070, this.y + 505);
    ctx.moveTo(this.x + 1110, this.y + 505);
    ctx.lineTo(this.x + 1100, this.y + 525);
    ctx.lineTo(this.x + 1110, this.y + 523);
    ctx.fill();
    ctx.closePath()
    
  
    ctx.beginPath();
    ctx.fillStyle = '#745550'; // 3ere couleur
    ctx.fillRect(this.x + 1060, this.y + 525, 40, 25); 
    ctx.moveTo(this.x + 1050, this.y + 522); //effet de 3D
    ctx.lineTo(this.x + 1050, this.y + 547); 
    ctx.lineTo(this.x + 1070, this.y + 550); 
    ctx.moveTo(this.x + 1050, this.y + 522); 
    ctx.lineTo(this.x + 1050, this.y + 547); 
    ctx.lineTo(this.x + 1070, this.y + 525); 

    ctx.moveTo(this.x + 1110, this.y + 523);
    ctx.lineTo(this.x + 1100, this.y + 549);
    ctx.lineTo(this.x + 1110, this.y + 547);
    ctx.moveTo(this.x + 1100, this.y + 523);
    ctx.lineTo(this.x + 1100, this.y + 550);
    ctx.lineTo(this.x + 1110, this.y + 523);
    ctx.fill();
    ctx.closePath()
    


    ctx.beginPath();
    ctx.fillStyle = '#604b4a'; // 4ere couleur
    ctx.fillRect(this.x + 1060, this.y + 550, 40, 25); 
    ctx.moveTo(this.x + 1050, this.y + 547); //effet de 3D
    ctx.lineTo(this.x + 1050, this.y + 567); 
    ctx.lineTo(this.x + 1070, this.y + 550);
    ctx.moveTo(this.x + 1050, this.y + 547); //effet de 3D
    ctx.lineTo(this.x + 1050, this.y + 567); 
    ctx.lineTo(this.x + 1070, this.y + 567);

    ctx.moveTo(this.x + 1110, this.y + 547);
    ctx.lineTo(this.x + 1100, this.y + 549);
    ctx.lineTo(this.x + 1100, this.y + 580);
    ctx.moveTo(this.x + 1110, this.y + 547);
    ctx.lineTo(this.x + 1110, this.y + 580);
    ctx.lineTo(this.x + 1100, this.y + 580);
    ctx.fill();
    ctx.closePath()
   




    ctx.beginPath();
    ctx.fillStyle = '#5d4344'; // 5ere couleur
    ctx.fillRect(this.x + 1040, this.y + 575, 80, 25);
    ctx.rect(this.x + 1110, this.y + 595, 40, 25);
    ctx.fillRect(this.x + 1040, this.y + 575, 82, 25);
    ctx.moveTo(this.x + 1028, this.y + 600); 
    ctx.lineTo(this.x + 1027, this.y + 580);
    ctx.lineTo(this.x + 1060, this.y + 600);
    ctx.fill();
    ctx.closePath()
    
    

    ctx.beginPath();
    ctx.fillStyle = '#6a4b48'; // 6ere couleur
    ctx.fillRect(this.x + 1030, this.y + 600, 120, 25); 
    ctx.closePath()

    // Sable

    ctx.beginPath(); // 1er en partant de la gauche
    ctx.fillStyle = '#cf9379'; 
    ctx.moveTo(this.x + 1028, this.y + 580); 
    ctx.lineTo(this.x + 1048, this.y + 595);
    ctx.lineTo(this.x + 1050, this.y + 560);
    ctx.moveTo(this.x + 1072, this.y + 570); 
    ctx.lineTo(this.x + 1048, this.y + 595);
    ctx.lineTo(this.x + 1050, this.y + 560);
    ctx.fill();
    ctx.closePath()
   

    ctx.beginPath(); // 2eme en partant de la gauche
    ctx.fillStyle = '#d3977f'; 
    ctx.moveTo(this.x + 1060, this.y + 485);
    ctx.lineTo(this.x + 1050, this.y + 500);
    ctx.lineTo(this.x + 1090, this.y + 485);
    ctx.moveTo(this.x + 1065, this.y + 510);
    ctx.lineTo(this.x + 1050, this.y + 500);
    ctx.lineTo(this.x + 1090, this.y + 485);
    ctx.moveTo(this.x + 1075, this.y + 505);
    ctx.lineTo(this.x + 1050, this.y + 500);
    ctx.lineTo(this.x + 1090, this.y + 485);
    ctx.fill();
    ctx.closePath()

    ctx.beginPath(); // 3eme en partant de la gauche
    ctx.fillStyle = '#cf937b'; 
    ctx.moveTo(this.x + 1110, this.y + 505);
    ctx.lineTo(this.x + 1090, this.y + 505); 
    ctx.lineTo(this.x + 1087, this.y + 530);
    ctx.moveTo(this.x + 1110, this.y + 505);
    ctx.lineTo(this.x + 1095, this.y + 530); 
    ctx.lineTo(this.x + 1087, this.y + 530);
    ctx.fill();
    ctx.closePath()

    ctx.beginPath(); // 4eme en partant de la gauche
    ctx.fillStyle = '#ca8f77'; 
    ctx.moveTo(this.x + 1150, this.y + 595);
    ctx.lineTo(this.x + 1110, this.y + 560);
    ctx.lineTo(this.x + 1100, this.y + 570);
    ctx.moveTo(this.x + 1150, this.y + 595);
    ctx.lineTo(this.x + 1130, this.y + 604);
    ctx.lineTo(this.x + 1100, this.y + 570);
    ctx.fill();
    ctx.closePath()
    
    ctx.restore();
  }
  

  /**
   * get array of forms
   * @return {[Canyon,...]}
   */
  static buildForms() {
    // create a new rectangle object using the Immeuble class
    const myCanyon = new Canyon(0, 0, 0, 0, '', '', 2, true, 3)
    let max = ~~(Math.random() * 0) + 1  // Mes Colonnes sont uniques
    let forms = []
    for (let i = 0; i < max; i++) {
      forms.push(
        new Canyon(
          myCanyon.x,
          myCanyon.y,
          myCanyon.width,
          myCanyon.height,
          myCanyon.fillColor,
          myCanyon.strokeColor,
          '',
         
        )
      )
    }
    // retourne un tableau d'objets Canyon
    return forms
  }

}
