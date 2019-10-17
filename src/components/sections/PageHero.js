import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const PageHero = ({options, optionsLoading}) => {
  return (
    optionsLoading ? '' : (
      <section className="py-5 text-center">
        <MDBContainer>
          <MDBRow center>
            <MDBCol md="10" xl="8">
              <h1 className="display-5 font-weight-bold mb-0" dangerouslySetInnerHTML={{ __html: options.acf.site_slogan }} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    )
  );
}

export default PageHero;