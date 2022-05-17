import React from 'react';
import Layout from '../component/layout';
import { graphql } from "gatsby"
import SuperSection from '../component/reusable/superSection'
import '../util/css/style.css'
import ReusInfo from '../component/reusable/reusInfo';
import { ContactForm } from '../component/function/form';
import "../util/css/style.css"
// import Reusdualinfo from '../component/reusable/reusdualinfo';

function Contact({data}) {
  return (
    <div>
     <Layout>
     <SuperSection
             img ={data.img.childImageSharp.fluid}
             title ="For More Information"
             subtitle= "Contact Us" 
             superClass = "about-super"
            /> 

     {/* <Reusdualinfo heading="Info"/> */}

            <div className='container mt-5'>  
                        <div id="map-container-google-2" class="z-depth-1-half map-container">
                        <iframe src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" allowfullscreen></iframe>
                        </div>
            </div>

      <ContactForm/>
     <ReusInfo heading="About"/>
      </Layout>  
    </div>
  );
}

export const query =  graphql`
  {
    img: file(relativePath: {eq: "contact3.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default Contact;