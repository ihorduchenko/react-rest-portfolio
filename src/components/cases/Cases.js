import React, { Component } from 'react';

import { MDBContainer } from 'mdbreact';

import CasesFilter from './CasesFilter';
import CasesLoop from './CasesLoop';
import CaseModal from './CaseModal';

class Cases extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cases: this.props.cases,
      activeCases: [],
      skills: this.props.skills,
      activeSkills: [],
      modalOpen: false,
      modalCase: null
    };

    this.setActiveSkills = this.setActiveSkills.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal = (casse) => {
    if(this.state.modalCase === null) {
      this.setState({
        modalCase: casse,
        modalOpen: !this.state.modalOpen
      });
    } else {
      this.setState({
        modalCase: null,
        modalOpen: !this.state.modalOpen
      }, () => {
        // console.log(this.state.modalCase);
      });
    }
  };

  setActiveSkills(e) {
    let id = parseInt(e.target.dataset.id);
    let {activeSkills} = this.state;
    let activeSkillsUpd = [...activeSkills];

    if ( id !== -1) {
      if (activeSkills.indexOf(id) === -1) {
        activeSkillsUpd.push(id);
      } else {
        activeSkillsUpd = activeSkills.filter(c => c !== id);
      }
    } else {
      activeSkillsUpd.splice(0, activeSkillsUpd.length);
    }

    this.setState( {
        activeSkills: activeSkillsUpd
      }, () => {
        let activeCases = this.filterCases(this.state.cases, this.state.activeSkills);

        this.setState({
          activeCases: activeCases
        }, () => {
            // console.log(this.state.activeCases);
          }
        );
      }
    );
  }

  filterCases(cases, skills) {
    let filteredCases = [];
    cases.filter(cas => {
      return cas.skills.some(
        ele => skills.includes(ele)
      ) && filteredCases.push(cas);
    });
    return filteredCases;
  }

  componentDidMount() {
    // console.log(this.state.cases);
  }

  render() {
    const { skills, activeSkills } = this.state;
    const { cases, activeCases } = this.state;
    const casesToShow = ( activeCases.length !== 0 ) ? activeCases : cases;

    return (
      <section id="portfolio" className="py-5">
        <MDBContainer fluid>
          <CasesFilter
            title={this.props.title}
            skills={skills}
            activeSkills={activeSkills}
            onFiltering={this.setActiveSkills}
          />
          <CasesLoop 
            cases={casesToShow} 
            modalOpen={this.state.modalOpen} 
            toggleModal={this.toggleModal} 
          />
          <CaseModal 
            actCase={this.state.modalCase} 
            modalOpen={this.state.modalOpen} 
            toggleModal={this.toggleModal} 
          />
        </MDBContainer>
      </section>
    );
  }
}

export default Cases;