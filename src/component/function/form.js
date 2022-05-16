// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm, ValidationError } from '@formspree/react';
 export function ContactForm() {
  const [state, handleSubmit] = useForm("xpzbkojd");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
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

    //   <form onSubmit={handleSubmit}>
    //   <label htmlFor="email">
    //     Email Address
    //   </label>
    //   <input
    //     id="email"
    //     type="email" 
    //     name="email"
    //   />
    //   <ValidationError 
    //     prefix="Email" 
    //     field="email"
    //     errors={state.errors}
    //   />
    //   <textarea
    //     id="message"
    //     name="message"
    //   />
    //   <ValidationError 
    //     prefix="Message" 
    //     field="message"
    //     errors={state.errors}
    //   />
    //   <button type="submit" disabled={state.submitting}>
    //     Submit
    //   </button>
    // </form>
  );
}