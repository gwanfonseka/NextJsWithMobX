// mealsStore.js
import { makeAutoObservable } from "mobx";
import axios from "axios";

const BASE_PATH = 'http://localhost:3001';

export default class MealsStore {
    meals = [];

    constructor() {
        makeAutoObservable(this);
        this.initializeMeals();
    }

    initializeMeals = async () => {
        const response = await axios.get(`${BASE_PATH}/dummyMeals`);
        this.meals = response.data;
    }

    updateMeals = (newMeals) => {
        this.meals = newMeals;
    }
}