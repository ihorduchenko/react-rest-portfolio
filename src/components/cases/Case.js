import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';

const Case = ({ casse, toggleModal }) => {
  let featImg = casse._embedded['wp:featuredmedia'][0].source_url;
  let terms = casse._embedded['wp:term'][0];
  return (
    <>
      <MDBCard className="h-100">
        <a 
          className="d-block h-100"
          onClick={() => toggleModal(casse)}
          href={ `#${casse.slug}` }
        >
          <div
            className="bg-cover media-4-3"
            style={{ backgroundImage: `url(${ featImg })` }}
          >
            <span className="sr-only">{ casse.title.rendered }</span>
          </div>
          <MDBCardBody>
            <MDBCardTitle>{ casse.title.rendered }</MDBCardTitle>
            <MDBCardText>
              {terms && terms.map(term => (
                term.taxonomy === 'skills' && <span className="d-inline-block m-1" key={term.id}>#{term.name}</span>
              ))}
            </MDBCardText>
          </MDBCardBody>
        </a>
      </MDBCard>
    </>
  );
};

export default Case;