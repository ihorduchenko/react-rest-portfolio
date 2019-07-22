import React, { Component } from 'react';

import { MDBContainer } from 'mdbreact';

import CasesFilter from './CasesFilter';
import CasesLoop from './CasesLoop';

class Cases extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cases: this.props.cases,
      activeCases: [],
      skills: this.props.skills,
      activeSkills: []
    };

    this.setActiveSkills = this.setActiveSkills.bind(this);
  }

  setActiveSkills(e) {
    let id = parseInt(e.target.dataset.id);

    let { activeSkills } = this.state;
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
        console.log(this.state.activeSkills);
        let activeCases = this.filterCases(
          this.state.cases, this.state.activeSkills
        );

        this.setState( {
          activeCases: activeCases
        }, () => {
            console.log(this.state.activeCases);
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

    console.log(casesToShow);

    return (
      <section className="py-5">
        <MDBContainer fluid>
          <CasesFilter
            skills={skills}
            activeSkills={activeSkills}
            onFiltering={this.setActiveSkills}
          />
          <CasesLoop cases={casesToShow} />
        </MDBContainer>
      </section>
    );
  }
}

export default Cases;