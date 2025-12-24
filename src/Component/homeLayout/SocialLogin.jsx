import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
           <h2 className='font-bold mb-5'>Login With</h2>
           <div className='space-y-3'>
            <button className='btn btn-outline w-full rounded-lg border-red-600 text-red-600 hover:bg-red-600 hover:text-white'>
                <FaGoogle />
                Login with Google</button>
            <button className='btn btn-outline w-full rounded-lg btn-primary'>
                <FaGithub/>
                Login with Github</button>
            </div> 
        </div>
    );
};

export default SocialLogin;