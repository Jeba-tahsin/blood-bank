import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>

        <Switch>
        <Route exact path='/'>
            <Home></Home>
         </Route>
         <Route path='/home'>
            <Home></Home>
         </Route>
         <Route path='/about'>
          <About></About>
         </Route>
         <Route path='/blog'>
           <Blog></Blog>
         </Route>
         <Route path='/login'>
           <Login></Login>
         </Route>
         <Route path='/signUp'>
           <SignUp></SignUp>
         </Route>
         <Route path='*'>
           <NotFound></NotFound>
         </Route>
        </Switch>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
