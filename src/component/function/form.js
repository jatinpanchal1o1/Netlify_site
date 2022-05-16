// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../util/css/style.css'
import { useForm, ValidationError } from '@formspree/react';
 export function ContactForm() {
  const [state, handleSubmit] = useForm("xpzbkojd");
  if (state.succeeded) {
      return <p className='container col-6 mt-5 bg-success text-white text-center'>We will reply shortly.</p>;
  }
  return (
         
        <div>
            
            
        <div className='container mt-5'>  
            <div id="map-container-google-2" class="z-depth-1-half map-container">
            <iframe src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>


        <div className="container col-8 mt-3">
            <form onSubmit={handleSubmit}>
            <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <label for="exampleFormControlInput1" class="form-label">Mobile number</label>
            <input type="tel" class="form-control" id="exampleFormControlPhone1" name='phone' placeholder="+91 " pattern="[0-9]{1}[0-9]{9}" 
  title="Phone number should be 9 digit with no char" maxlength="10"/>
            <ValidationError 
                prefix="phone" 
                field="phone"
                errors={state.errors}
            />
            </div>
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Suggest us</label>
            <textarea class="form-control" name='message' id="exampleFormControlTextarea1" rows="3"></textarea>
            <ValidationError 
                prefix="message" 
                field="message"
                errors={state.errors}
            />
            </div>
            <button className="btn btn-primary" type="submit" disabled={state.submitting}>Subscribe</button>
            </form>
        </div>

        </div>
  );
}