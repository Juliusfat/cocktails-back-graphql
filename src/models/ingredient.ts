import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    title: String,
    quantity: Number,
    unit: String,
    cocktailId: { type: Schema.Types.ObjectId, ref: 'Cocktail' }
})

export default mongoose.model('Ingredient', ingredientSchema);