import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class CaseModal extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBModal isOpen={this.props.modalOpen} toggle={this.props.toggleModal}>
          <MDBModalHeader toggle={this.props.toggleModal}>MDBModal title</MDBModalHeader>
          <MDBModalBody>
            Modal Content
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.props.toggleModal}>Close</MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default CaseModal;