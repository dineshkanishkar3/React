import React,{useState,useContext} from 'react'
import Footer from '../components/footer'
import FireBaseContext from '../context/firebase'
function LogIn(){
    const {firebase} = useContext(FireBaseContext)

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

    const isInvalid = password==='' || email===''
    
    function handleSubmit(){
        
    }

    return(
        <>
        <div className='flex bg-blue-600 flex-'>
        <div>
            <img src='/images/iphone-with-profile.jpg'/>
        </div>
        <form onSubmit={handleSubmit}>
            <img src = '/images/logo.png'/>
            <input type='text'/>
            <input type='password'/>
            <button>Log In</button>
        </form>
        </div>
         {/* <Footer/> */}
        </>
    )
    }

export default LogIn