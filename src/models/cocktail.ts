import * as  mongoose from 'mongoose';
const Schema = mongoose.Schema;

const cocktailSchema = new Schema({
    name: String,
    type: String,
    description: String,
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category' },
    valid: Boolean,
    ingredientsRef: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }],
    ratingsRef: [{ type: Schema.Types.ObjectId, ref: 'Rating' }]
});

export default mongoose.model('Cocktail', cocktailSchema);