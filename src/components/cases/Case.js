import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';

const Case = cas => {
  let cont = cas.case;
  let terms = cont._embedded['wp:term'][0];
  return (
    <>
      <MDBCard className="h-100">
        <a href="/" className="d-block bg-cover media-4-3" style={{ backgroundImage: `url(${ cont.feat_img_url })` }}>
          <span className="sr-only">{ cont.title.rendered }</span>
        </a>
        <MDBCardBody>
          <MDBCardTitle>{ cont.title.rendered }</MDBCardTitle>
          <MDBCardText>
            {terms && terms.map(term => (
              term.taxonomy === 'skills' && <span className="d-inline-block m-1" key={term.id}>#{term.name}</span>
            ))}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </>
  );
};

export default Case;