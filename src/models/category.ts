
import * as  mongoose from 'mongoose';
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    coctaiRef: { type: Schema.Types.ObjectId, ref: 'Cocktail' },
    description: String,
});

export default mongoose.model('Category', categorySchema);