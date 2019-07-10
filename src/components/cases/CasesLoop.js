import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

import Case from './Case';

const CasesLoop = ({ cases }) => {
  return (
    <MDBRow>
      { cases.map(cas => (
          <MDBCol key={cas.id} md="6" lg="4" className="mb-4">
            <Case case={cas} />
          </MDBCol>
        )
      ) }
    </MDBRow>
  );
};

export default CasesLoop;