import { Component } from '@angular/core';
import {Plant} from "../plant";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  plants: Plant[] = [
    {
      name: "Birds Nest Fern",
      watered: false,
      fertilized: false,
      misted: false,
      waterDate: new Date,
      fertilizeDate: new Date,
      mistDate: new Date,
      inGarden: false,
      picture: "https://www.plantandflowerinfo.com/images/birds-nest-fern-plant.jpg"
    },
    {
      name: "Bromeliad Plant",
      watered: false,
      fertilized: false,
      misted: false,
      waterDate: new Date,
      fertilizeDate: new Date,
      mistDate: new Date,
      inGarden: false,
      picture: "https://www.plantandflowerinfo.com/images/neoregelia-bromeliad-plant.jpg"
    },
    {
      name: "Arboricola Plant",
      watered: false,
      fertilized: false,
      misted: false,
      waterDate: new Date,
      fertilizeDate: new Date,
      mistDate: new Date,
      inGarden: false,
      picture: "https://www.plantandflowerinfo.com/images/arboricola-braid-plant.jpg"
    },
    {
      name: "Zebra Plant",
      watered: false,
      fertilized: false,
      misted: false,
      waterDate: new Date,
      fertilizeDate: new Date,
      mistDate: new Date,
      inGarden: false,
      picture: "https://www.plantandflowerinfo.com/images/zebra-plant-indoor-house-plant.jpg"
    },
    {
      name: "Dieffenbachia House Plant",
      watered: false,
      fertilized: false,
      misted: false,
      waterDate: new Date,
      fertilizeDate: new Date,
      mistDate: new Date,
      inGarden: false,
      picture: "https://www.plantandflowerinfo.com/images/dieffenbachia-plant-large.jpg"
    },
    {
      name: "Anthurium Flowering Plant",
      watered: false,
      fertilized: false,
      misted: false,
      waterDate: new Date,
      fertilizeDate: new Date,
      mistDate: new Date,
      inGarden: false,
      picture: "https://www.plantandflowerinfo.com/images/anthurium-plant-flowers.jpg"
    }
  ]
  constructor() {}

}
