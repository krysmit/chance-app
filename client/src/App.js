import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBooks from './pages/SearchBooks';
import SavedJobs from './pages/SavedJobs';
import Navbar from './components/Navbar';
import Resume from './pages/Resume';
import JobList from './pages/JobList';
// import Home from './pages/home';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

function App() {
  return (
    <ApolloProvider client = {client}>
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={SearchBooks} />
          <Route exact path='/saved' component={SavedJobs} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/joblist' component={JobList} />
          

          {/* <Route exact path='/home' component={Home} /> */}
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
    </ApolloProvider>
  );
}

export default App;
