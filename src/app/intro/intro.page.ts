import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
    tittle:"Noche de humor",
    description:"Los mejores del humor en VANrestaurantebar no te pierdas a luchotorreshumor joselodecolombia y elpupidequilla para reírse sin parar.",
    image:"../../assets/imagenes/NH.png",
    help_text: "Nos vemos este 23 de Noviembre Info al 3128665298"
    },

    {
    tittle:"Monster Truck",
    descripcion:"Llega a barranquilla el show más impactante en su exitosa gira por colombia las Monster Truck",
    image:"../../assets/imagenes/MT.png",
    help_text:" Boleteria en taqui.com.co almacenes okey sport y moys. Informes al 3186478605. Las Monster Truck en bquilla por primera vez"
    
      },

    {
     tittle:   "Homenaje a Martin Elias",
    descripcion:"14 de abril, 8pm",
     image:"../../assets/imagenes/ME.png",
        help_text:"VAN restaurante bar"
          }
      ]

  constructor() { }

  ngOnInit() {
  }

}
