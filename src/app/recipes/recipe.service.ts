import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Lasanha',
      'Fitas colocadas em camadas, e entremeadas com recheio.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Lasagne_-_stonesoup.jpg/1024px-Lasagne_-_stonesoup.jpg',
      [
        new Ingredient('Pasta', 1),
        new Ingredient('Ham', 10),
        new Ingredient('Cheese', 10),
        new Ingredient('Meat', 1),
        new Ingredient('Tomato', 3),
      ]
    ),
    new Recipe(
      'Estrogonofe',
      'Cubos de carne servidos num molho de creme de leite.',
      'https://simplelivingrecipes.com/wp-content/uploads/2020/02/Brazilian-Stroganoff--500x500.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Onion', 3),
        new Ingredient('Champignon', 10),
        new Ingredient('Salt', 1),
        new Ingredient('Tomato', 3)
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(i: number) {
    return this.recipes[i];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
