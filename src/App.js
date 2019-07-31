import React from "react";
import {
  Route,
  Switch,
  Link
} from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import {
  auth,
  createUserProfileDocument
} from "./firebase/firebase.utils";
import "./App.css";
// to store auth user state, we create a class component instead of
// functional component.
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          console.log(snapShot.data())
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state.currentUser)
          })
        })
      } else {
        this.setState({
          currentUser: userAuth
        })
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return ( <
      div >
      <
      Header currentUser = {
        this.state.currentUser
      }
      />   <
      Switch >
      <
      Route exact path = "/"
      component = {
        HomePage
      }
      />  <
      Route path = "/shop"
      component = {
        ShopPage
      }
      />  <
      Route path = "/signin"
      component = {
        SignInSignUpPage
      }
      />  < /
      Switch > <
      /div>
    );
  }
}

export default App;