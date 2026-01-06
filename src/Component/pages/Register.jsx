import React from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { use } from 'react';

const Register = () => {
    const {creatUser,setUser}=use(AuthContext)
    const handleRegister= (e) =>{
        e.preventDefault();
        const form =e.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
       
        creatUser(email,password)
        .then(result=> {
            const user=result.user;
          setUser(user)
            
        })  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
alert (errorMessage)
  });
    }
    return (
       <div className='flex justify-center min-h-screen items-center'>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl  py-2">
            <h2 className='text-2xl font-bold text-center py-2'>
                Register your Account
            </h2>
            <hr className='w-[80%] mx-auto text-gray-200 ' />
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
              <label className="label font-semibold text-black">Your Name</label>
              <input type="text" placeholder='Enter Your Name' name="name" className='input' required/>
              <label className="label font-semibold text-black">Photo URL</label>
              <input type="text" placeholder='Enter Your photo url' name="photo"  className='input' required/>
          <label className="label font-semibold text-black">Email Address</label>
          <input type="email" className="input" placeholder="Email Address" name='email'required />
          <label className="label font-semibold text-black">Password</label>
          <input type=" password" className="input" placeholder="Enter Your Password" name='password' required/>
          <div className='flex items-center gap-2 mt-2'><input type="checkbox" name="" id="" required /> Accept Term & Conditions</div>
          <button type="submit" className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
    </div>
        </div>
    );
};

export default Register;