import Category from '../../models/category';


export const categoryResolver = {
    categories: async () => {
        try {
            const categories = await Category.find();
            return categories;
        } catch (err) {
            throw err;
        }
    },
    category: async (_id) => {
        try {
            const category = await Category.findById(_id); 
            return category;
        } catch (err) {
            throw err;
        }
    },
    addCategory: async (args: any) => {
        try {
            const category = new Category({
                description: args.categoryInput.description
            })
            return category.save();
        } catch (err) {
            throw err;
        }
    },
    updateCategory: async (args: any) => {
        try {
            console.log(args);
            return Category.findByIdAndUpdate(args._id, args.categoryInput, { new: true});
        } catch (err) {
            throw err
        }
    },
    removeCategory: async (_id) => {
        try {
            return Category.findByIdAndRemove(_id);
        } catch (err) {
            throw err;
        }
    }
}