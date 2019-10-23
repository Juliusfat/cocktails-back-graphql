import {categoryResolver} from './category';
import { ingredientResolver}  from './ingredient';
import { cocktailResolver } from './cocktail';

export const graphQlResolver = {
    ... categoryResolver,
    ... ingredientResolver,
    ... cocktailResolver
}

