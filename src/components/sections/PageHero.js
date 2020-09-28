import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const PageHero = ({title, content}) => {
  return (
    <section className="py-5">
      <MDBContainer>
        <MDBRow center>
          <MDBCol>
            <h1 className="display-4 font-weight-bold mb-3" dangerouslySetInnerHTML={{ __html: title }} />
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default PageHero;