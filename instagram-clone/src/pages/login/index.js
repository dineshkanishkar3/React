import React,{useState,useContext} from 'react'
import Footer from '../../components/footer'
import FireBaseContext from '../../context/firebase'
import './login.css'

function LogIn(){
    const {firebase} = useContext(FireBaseContext)

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

    const isInvalid = password==='' || email===''
    
    function handleSubmit(event){
        event.preventDefalut();
        
    }

    return(
        <div className='main-container'>
        <div className='container' >
        <div>
            <img src='/images/iphone-with-profile.jpg' className='jumbotron'/>
        </div>
        <div className='form-container'>
        <form onSubmit={()=>handleSubmit} className="">
            <img src = '/images/logo.png'/>
            <input type='text'className='' placeholder='Email'/>
            <input type='password' className='' placeholder='Password'/>
            <button id='login-but'>Log In</button>
        </form>
        <p className='or'>OR</p>
        <div className='fb-signup'><img src='/images/facebook.svg' className='fb-signup-logo' /><p>Log in with Facebook</p></div>
        <a className='forgot-password'>Forgot password?</a>
        </div>
        </div>
        <div className='container'>
            <p className='signup'>Don't have an account? <a className='signup-link'>Signup</a></p>
        </div>
        <div className='app-links'>
            <h3 className='app-text'>Get the app.</h3>
            <div className='app-icons'>
                <img src='\images\app-store.png'/>
                <img src='\images\play-store.png'/>
            </div>
        </div>
         {/* <Footer/> */}
        </div>
    )
    }

export default LogIn