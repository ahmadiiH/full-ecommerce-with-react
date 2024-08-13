import React, { useState } from 'react'
import loginicons from "../assest/signin.gif"
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Login = () => {
    const [showpassword, setShowpassword] = useState(true)
    const[data,setDATA] = useState({
        eamail: "",
        password : ""
    })
    const handleChange = (e) => {
        const {name,value} = e.target
        setDATA((preve)=> {
            return{
                ...preve,
                [name] : value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
    return (
        <section id='login'>
            <div className="mx-auto p-4 container">
                <div className=" bg-white p-5 max-w-sm mx-auto ">
                    <div className='w-20 h-20 mx-auto pt-2 pb-[5.5rem]'>
                        <img src={loginicons} alt="login icons" />
                    </div>
                    <form onSubmit={handleSubmit} className='mt-6'>
                        <div className='grid'>
                            <label >Email : </label>
                            <div className='bg-slate-100 p-2'>
                                <input onChange={handleChange} name='email' value={data.email} type='email' placeholder='enter your email ...' className='w-full outline-none bg-transparent h-full' /></div>
                        </div>
                        <div>
                            <label >Password : </label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input onChange={handleChange} name='password' value={data.password} type={showpassword ? "password": "text"} placeholder='enter your password ...' className='w-full outline-none bg-transparent h-full' />
                                <div className=' cursor-pointer' onClick={() => setShowpassword((pre)=>!pre)}>
                                    <span>  {showpassword ? <FaEye /> : <FaEyeSlash />}</span>
                                </div>
                            </div>
                            <Link to={"/forgot-password"} className='w-fit ml-auto block hover:underline hover:text-red-600'>forgot password</Link>
                        </div>
                        <button className='bg-red-600 hover:bg-red-700 w-full text-white px-5 max-w-32 mt-4 hover:scale-110 transition-all block mx-auto py-2 rounded-full'>Login</button>
                    </form>
                    <p className='my-4'>Dont ' have account ? <Link to={"/sign-up"} className=' hover:underline text-red-600 hover:text-red-700'> Sign up</Link></p>
                </div>

            </div>
        </section>
    )
}

export default Login