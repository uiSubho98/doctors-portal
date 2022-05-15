import React from 'react';
import  auth  from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [signInWithGoogle, guser, gloading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const navigate = useNavigate()


      let signInErrorMessage;

      if(error || gError || updateError){
        signInErrorMessage=<p className='text-red-500'>{error?.message || gError?.message || updateError?.message}</p>
      }

   
      if(loading || gloading || updating){
          return <Loading></Loading>
      }




    if(guser || user){
        console.log(guser || user);
    }

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({displayName:data.name});
        console.log('update done',data.name);
        navigate('/appointment')

    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="text-center text-2xl font-bold">Sign Up</h2>

    <form onSubmit={handleSubmit(onSubmit)}>

    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <input  {...register("name", {
      required:{
        value:true,
        message:'Name  is Required'
      },
     
  })} type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
  <label className="label">
  {errors.name?.type === 'required' &&   <span className="label-text-alt text-red-500">{errors.name.message}</span>}
  
  </label>
</div>


    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input  {...register("email", {
      required:{
        value:true,
        message:'Email is Required'
      },
    pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
  })} type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
  <label className="label">
  {errors.email?.type === 'required' &&   <span className="label-text-alt text-red-500">{errors.email.message}</span>}
  {errors.email?.type === 'pattern' &&   <span className="label-text-alt text-red-500">{errors.email.message}</span>}
  
  </label>
</div>
{/* PASSWORD */}
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input  {...register("password", {
      required:{
        value:true,
        message:'Password is Required'
      },
    minLength:{
        value:6,
        message:'Must be a ^ character'
    }
  })} type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
  <label className="label">
  {errors.password?.type === 'required' &&   <span className="label-text-alt text-red-500">{errors.password.message}</span>}
  {errors.password?.type === 'pattern' &&   <span className="label-text-alt text-red-500">{errors.password.message}</span>}
  
  </label>
</div>
{
    signInErrorMessage
}
      <input className='btn w-full max-w-xs text-white' type="submit" value='Sign Up' />
    </form>
    <p>Already Have An Account?<Link className='text-primary' to='/login'>Log In</Link></p>

    <div className="divider">OR</div>
    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue With Google</button>
    
  </div>
</div>
        </div>
    );
};

export default Signup;