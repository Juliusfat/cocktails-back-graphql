import { buildSchema } from 'graphql';

export const schema = buildSchema(`
    type Category {
        _id: ID!
        description: String!
    }

    type Ingredient {
        _id: ID!
        title: String!
        quantity: Int!
        unit: String!
        cocktailId: ID!
    }

    type Rating {
        _id: ID!
        note: Int!
        explain: String!
        cocktailId: ID!
    }

    type Cocktail {
        _id: ID!
        name: String!
        type: String!
        description: String!
        valid: Boolean!
        categoryId: Category!
        ingredientsRef: [Ingredient!]!
        ratingsRef: [Rating]
    }

    input CocktailInput{
        name: String!
        type: String!
        description: String!
        valid: Boolean!
        categoryId: ID!
    }

    input CategoryInput {
        description: String!
    }

    input IngredientInput {
        title: String!
        quantity: Int!
        unit: String!
    }

    input RatingInput {
        note: Int!
        explain: String!
    }

    type RootQuery {
        cocktail(_id:ID!): Cocktail!
        cocktails: [Cocktail!]!
        category(_id: ID!): Category!
        categories: [Category!]!
        ingredient(_id: ID!): Ingredient!
        ingredients: [Ingredient!]!

    }

    type RootMutation {
        addCategory( categoryInput : CategoryInput!) : Category
        removeCategory (_id: ID!) : Category
        updateCategory (_id : ID!, categoryInput : CategoryInput!) : Category
        updateIngredient (_id : ID!, ingredientInput : IngredientInput!) : Ingredient
        createIngredient (cocktailId: ID!, ingredientInput: IngredientInput!) : Ingredient
        removeIngredient (_id: ID!): Ingredient
        addCocktail( cocktailInput : CocktailInput!, ingredientInput: [IngredientInput!]!) : Cocktail
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);