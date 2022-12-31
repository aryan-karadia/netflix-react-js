import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user, signUp } = UserAuth();
    const Navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signUp(email, password)
            Navigate('/')
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <>
            <div className='w-full h-screen'>
                <img className='hidden sm:block absolute w-full h-full object-cover opacity-50 ' src="https://assets.nflxext.com/ffe/siteui/vlv3/5e48e7b6-350d-48d9-96d6-de8ca173c89f/598617d3-a31c-4df8-8410-fe9dd22f0562/CA-en-20221219-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
                <div className='fixed w-full h-full px-4 py-24'>
                        <div className=' max-w-[450px] h-[600px] mx-auto bg-black/75 text-white rounded-lg'>
                            <div className='max-w-[320px] mx-auto py-16'>
                                <h1 className='text-3xl font-bold '>Sign Up</h1>
                                
                                <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                                    <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-neutral-600 rounded' type="email" placeholder='Email' autoComplete='email'/>
                                    <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-neutral-600 rounded' type="password" placeholder='Password' autoComplete='current-password'/>
                                    <button className='bg-red-600 px-6 py-3 my-6 rounded cursor-pointer text-white font-bold'>Sign Up</button>
                                    <div className='flex justify-between items-center text-sm text-neutral-400'>
                                        <p><input className='mr-2' type="checkbox" />Remember Me</p>
                                        <p>Need Help?</p>
                                    </div>
                                    <p className='py-3'><span className='text-neutral-400'>Already have an account? <a className='text-white' href="/login">Sign in.</a></span></p>
                                </form>
                            </div>
                        </div>
                    
                </div>
            </div>
        </>
    );
}

export default Signup;