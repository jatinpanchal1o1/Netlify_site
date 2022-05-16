import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm, ValidationError } from '@formspree/react';
 export function SubscribeForm() {
  const [state, handleSubmit] = useForm("xpzbkojd");
  if (state.succeeded) {
      return<div className="col-4 offset-1"><p>Thanks for joining!</p></div>;
  }
  return (

    <div className="col-4 offset-1">
    <form onSubmit={handleSubmit}>
      <h5>Subscribe to our newsletter</h5>
      <p>Monthly digest of whats new and exciting from us.</p>
      <div className="d-flex w-100 gap-2">
        <label htmlFor="email" className="visually-hidden">Email address</label>
        <input id="email" type="email" name='email' className="form-control" placeholder="Email address"/>
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        <button className="btn btn-primary" type="submit" disabled={state.submitting}>Subscribe</button>
      </div>
    </form>
  </div>

  );
}