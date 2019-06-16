import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // recipes= ['rohit','sharma'];
  recipes:Recipe[] = [
    new Recipe("A test recipe", "This is a test", "https://thumbs.dreamstime.com/z/healthy-fruits-vegetables-border-frame-21437423.jpg"),
    new Recipe("A test recipe", "This is a test", "https://thumbs.dreamstime.com/z/healthy-fruits-vegetables-border-frame-21437423.jpg")
  ];
  // MyRecipe = this.recipes[0].name;
  constructor() {
    console.log(this.recipes);
   }

  ngOnInit() {
  }

}
