import ApolloClient from 'apollo-boost';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: '/graphql'
});

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ApolloProvider client={client}>
      <div>
        <h1>Testing out Apollo / GraphQL!</h1>
      </div>
      </ApolloProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
