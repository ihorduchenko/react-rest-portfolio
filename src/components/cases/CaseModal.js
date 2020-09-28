import React from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

const CaseModal = ({ actCase, modalOpen, toggleModal }) => {
  return (
    actCase !== null && (
    <MDBModal isOpen={modalOpen} toggle={toggleModal} size="lg">
      <MDBModalHeader className="p-2" tag="h2" toggle={toggleModal}>
        <strong>{actCase.title.rendered}</strong>
      </MDBModalHeader>
      <MDBModalBody className="p-0">
        <img className="mw-100" src={actCase._embedded['wp:featuredmedia'][0].source_url} alt={actCase.title.rendered}/>
        <div className="text-block p-3" dangerouslySetInnerHTML={{ __html: actCase.content.rendered }}></div>
      </MDBModalBody>
      <MDBModalFooter className="p-2">
        <MDBBtn
          size="sm"
          className="m-0 ml-2"
          color="secondary" 
          onClick={toggleModal}
        >Close</MDBBtn>
        <MDBBtn
          size="sm"
          className="m-0 ml-2"
          color="primary" 
          href={actCase.acf.link}
          target="_blank"
        >Live demo</MDBBtn>
      </MDBModalFooter>
    </MDBModal>
    )
  );
}

export default CaseModal;