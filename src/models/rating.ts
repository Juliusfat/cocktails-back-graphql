
import * as  mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
    note: Number,
    explain: String,
    cocktailId: { type: Schema.Types.ObjectId, ref: 'Cocktail' }
});

export default mongoose.model('Rating', ratingSchema);