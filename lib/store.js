import MealsStore from "./stores/mealStore";

export default class AppStore { // Make sure to use 'export default'
  constructor() {
    this.mealsStore = new MealsStore();
  }
}