import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProver} from 'react-apollo';



//components
import BookList from './components/BookList';

//Apollo Client setup
const client= new ApolloClient({
  uri:'http://localhost:4000/graphql',
})

class App extends Component{
  render(){
    return (
      <ApolloProver client= {client}>
        <div id="main">
          <h1> Ninja Reading</h1>
          <BookList/>
        </div>
      </ApolloProver>
    );

  } 
}


export default App;