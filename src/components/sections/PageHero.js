import React from 'react';
import { MDBContainer } from "mdbreact"; 

const Hero = ({options, optionsLoading}) => {
  return (
    optionsLoading ? '' : (
      <section className="py-5 text-center">
        <MDBContainer className="py-5">
          <h1 className="h1 display-4 font-weight-bold mb-4" dangerouslySetInnerHTML={{ __html: options.acf.site_slogan }} />
        </MDBContainer>
      </section>
    )
  );
}

export default Hero;