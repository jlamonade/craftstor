import './App.css';
import { UserProvider } from './utils/UserContext';
import { setContext } from '@apollo/client/link/context'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import Signup from './pages/Signup';
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import ProjectForm from './components/ProjectForm'
import ProfileForm from './components/ProfileForm'
import Skills from './components/Skills'

const httpLink = createHttpLink({
  uri: '/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Switch>
          <UserProvider>
            <Route exact path='/' component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/projects" component={ProjectForm} />
            <Route exact path="/profile" component={ProfileForm} />
            <Route exact path="/skills" component={Skills} /> 
          </UserProvider>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
