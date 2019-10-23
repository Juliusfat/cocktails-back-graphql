import Cocktail from '../../models/cocktail';
import Ingredient from '../../models/ingredient';

export const cocktailResolver = {
    cocktails: async () => {
        try {
            const cocktails = await Cocktail.find().populate('ingredientsRef').populate('categoryId');
            return cocktails;
        } catch (err) {
            throw err;
        }
    },

    cocktail: async (_id) => {
        try {
            const cocktail = await Cocktail.findById(_id)
                .populate('ingredientsRef').populate('categoryId');
            return cocktail;
        } catch (err) {
            throw err;
        }
    },

    addCocktail: async (args: any) => {
        try {
            const newCocktail = new Cocktail({
                name: args.cocktailInput.name,
                type: args.cocktailInput.type,
                description: args.cocktailInput.description,
                valid: false,
                categoryId: args.cocktailInput.categoryId,
            })
            const cocktail = await newCocktail.save();

            args.ingredientInput.forEach(async ingredient => {
                const myIngredient = new Ingredient({
                    title: ingredient.title,
                    quantity: ingredient.quantity,
                    unit: ingredient.unit,
                    cocktailId: cocktail._id
                })
                const ingredientSave = await myIngredient.save();

                await Cocktail.findByIdAndUpdate(cocktail._id,
                    { '$push': { 'ingredientsRef': ingredientSave._id } },
                    { 'new': true }
                );
            });

            return cocktail;
        } catch (err) {
            throw err;
        }
    }
}