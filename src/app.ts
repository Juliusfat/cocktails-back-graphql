import * as express from 'express';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as mongoose from 'mongoose';
//import schema from './schema/schema'
import * as graphqlHTTP from 'express-graphql';
import { graphQlResolver} from './graphQL/resolvers';
import { schema } from './graphQL/schema/myShema'
//import uploadMiddleWare from './middlewares/uploadMiddleware';

require('dotenv').config();

const app =  express();

app.use(cors());

mongoose.connect(
    "mongodb+srv://"+process.env.MONGO_USER+":"+process.env.MONGO_PWD+"@node-graphql-cocktails-tyqky.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
    );
mongoose.connection.once('open', () => {
    console.log('connected to Mongo database');
});

app.use(morgan('dev'));

app.use('/uploads', express.static('static/images'));

//app.use('/graphql', uploadMiddleWare);

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema : schema,
    rootValue : graphQlResolver,
    graphiql: true
}));

export default app ;