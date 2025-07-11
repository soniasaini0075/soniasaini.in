import "./error.scss";

import {useEffect} from 'react';

import { useLocation } from "react-router-dom";

const PageNotFound = () => {
   useEffect(() => {
      document.body.classList.add('error-page');
   }, []);

   let location = useLocation();

   return (
   <>
   <div className="page-not-found-wrapper page-wrapper">
      <section className="page-heading page-heading-404">
         <div className="container">
            <div className="heading-wrapper">
               <figure>
                  <figcaption>
                     <h5>Oops! The page you're browsing for no longer exists or has been moved.</h5>
                     <a className="bttn bttn-primary" href="/">
                        Back to Home
                        <div className="arrow-dot">
                      </div>
                   </a>
                </figcaption>
             </figure>
          </div>
       </div>
    </section>
 </div>
 </>
 );
}
export default PageNotFound;