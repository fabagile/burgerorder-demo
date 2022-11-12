export class Ingredient {
    label = "";
    quantity? = 100;
    constructor(label:string, quantity?:number) {
        this.label = label
        this.quantity = quantity
    }
}
export class Burger {
    label=""
    ingredients: Ingredient[]= []
    constructor(label:string, ingredients:Ingredient[]) {
        this.label = label
        this.ingredients = ingredients
    }

}