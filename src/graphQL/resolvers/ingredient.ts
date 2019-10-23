import Ingredient from '../../models/ingredient';
import Cocktail from '../../models/cocktail';

export const ingredientResolver = {
    ingredients: async () => {
        try {
            return Ingredient.find();
        } catch (err) {
            throw err;
        }
    },

    ingredient: async (_id: any) => {
        try {
            return Ingredient.findById(_id);
        } catch (err) {
            throw err;
        }
    },

    updateIngredient: async (args: any) => {
        try {
            return Ingredient.findByIdAndUpdate(args._id, args.ingredientInput);
        } catch (err) {
            throw err;
        }
    },

    createIngredient: async (args: any) => {
        try {
            const newIngredient = new Ingredient({
                title: args.ingredientInput.title,
                quantity: args.ingredientInput.quantity,
                unit: args.ingredientInput.unit,
                cocktailId: args.cocktailId
            });

            const ingredient = await newIngredient.save();

            await Cocktail.findByIdAndUpdate(args.cocktailId,
                { '$push': { 'ingredientsRef': ingredient._id } },
                { 'new': true }
            );
            return ingredient;
        } catch (err) {
            throw err;
        }
    },

    removeIngredient: async (_id: any) => {
        try {
            const ingredient = await Ingredient.findOneAndRemove(_id);
            await Cocktail.findByIdAndUpdate(ingredient.get('cocktailId'),
                { '$pull': { 'ingredientsRef': ingredient._id } },
                { 'new': true }
            );
            return ingredient;
        } catch (err) {
            throw err;
        }
    }

}