import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

import Case from './Case';

const CasesLoop = ({ cases, modalOpen, toggleModal }) => {
  return (
    <MDBRow>
      { cases.map(cas => {
          return(
            <MDBCol key={cas.id} md="6" lg="4" className="mb-4">
              <Case casse={cas} modalOpen={modalOpen} toggleModal={toggleModal} />
            </MDBCol>
          )
        }
      ) }
    </MDBRow>
  );
};

export default CasesLoop;