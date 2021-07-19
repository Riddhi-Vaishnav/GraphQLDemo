const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const mongoose = require('mongoose');


const app = express();
mongoose.connect('mongodb+srv://riddhivaishnav1130:Shdr3010@graphql.8nmvz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false});
//mongoose.connect('mongodb+srv://rvaishnav3010:Shdr3010@cluster0.zmypv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log('connected to  New Mongo Database');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});