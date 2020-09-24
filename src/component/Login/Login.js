import React, { useContext, useState } from 'react';
import { Button,Card } from 'react-bootstrap';
import './Login.css'
import Menu from '../Menu/Menu';
import { useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firbase.Config';
import {UserContext} from '../../App';



const Login = () => {
    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        isSignedIn:false,
        name : '',
        email: '',
        password:'',
        photo:'',
        error: '',
    })
    // gmail log in
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    var { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name : displayName , email}
            setLoggedInUser(signedInUser);
            history.replace(from);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
           
          });
    }
    // facebook log in 
    const handleFacebookSignIn = () =>{
        const fbProvider = new firebase.auth.FacebookAuthProv();        firebase.auth().signInWithPopup(fbProvider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log('fb user :', user)
            
            
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    //manual log in 
    const handleBlur = (e) => {
        let isFieldValid = true ;
        if(e.target.name === 'email'){
            isFieldValid =  /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
        
    }
    const handleSubmit = (e) =>{
        console.log(user.email, user.password)
        if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then( res => {
                const newUserInfo = {...user};
                newUserInfo.error = '';
                setUser(newUserInfo);
                updateUserName(user.name);
                console.log('sign in user ', res.user);
            })
            .catch( error => {
                // Handle Errors here.
                const newUserInfo = {...user};
                newUserInfo.error = error.massage;
                setUser(newUserInfo);
                // ...
              });
        }

        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.Menupassword)
            .then(res => {
                history.replace(from)
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
              });
        }
        e.preventDefault();
    }
    
        const updateUserName  = name =>{
            const  user = firebase.auth().currentUser;

            user.updateProfile({
            displayName: name,
            }).then(function() {
            console.log('userName updated successfully')
            }).catch(function(error) {
            console.log(error)
            });
        }



    return (
    <>
        <Menu></Menu>
        <div className = "LoginCard" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '60vh'}}>
                <Card style={{ width: '22rem' }} >
                    <Card.Body>
                        <input  type="checkbox" onChange={() =>setNewUser(!newUser)} name="newUser" id=""/>
                        <label htmlFor = "newUser ">New User Sign In</label>
                        <form onSubmit = {handleSubmit}>
                           {newUser && <input name = "name"  onBlur = {handleBlur} type = "text" placeholder = "Your Name" requaired/>}
                            <br/>
                            <input name = "email"  onBlur = {handleBlur} type = "email" placeholder = "email" requaired/>
                            <br/>
                            <input name = "password"  onBlur = {handleBlur} type = "password" placeholder = "password" requaired/>
                            <br/>
                           <input onClick = {`/ShundarHotel`} type = "submit" value = {newUser ? 'Sign Up' : 'Sign In'}/>
                            
                        </form>
                        
                    </Card.Body>
                </Card>
                
        </div>

      
       <Button  variant="outlined" size="lg" block className = "FbBtn"  onClick = {handleGoogleSignIn} >
            Continue with Gmail
        </Button>
        


       
        <Button  variant="outlined" size="lg" block className = "FbBtn"
        onClick = {handleFacebookSignIn}>
            Continue with facebook
        </Button>


        
    </>
    );
};

export default Login;


