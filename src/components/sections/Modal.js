import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBIcon } from 'mdbreact'; 

class Modal extends Component {
  state = {
    modal7: false
  }
  
  toggleModal = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }
  
  render() {
    return (
      <MDBContainer className="modalll">
        <MDBBtn onClick={this.toggleModal(7)}>Launch MDBModal</MDBBtn>
        <MDBModal className="modal-notify modal-info text-white" isOpen={this.state.modal7} toggle={this.toggleModal(7)}>
          <MDBModalHeader className="text-center" titleClass="w-100" tag="p">
            Be always up to date
          </MDBModalHeader>
          <MDBModalBody className="text-center">
            <MDBIcon icon="bell" size="4x" className="animated rotateIn mb-4" />
            <p>Do you want to receive the push notification about the newest posts?</p>
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
            <MDBBtn color="primary" onClick={this.toggleModal(7)}>Yes</MDBBtn>
            <MDBBtn color="primary" outline onClick={this.toggleModal(7)}>No</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default Modal;