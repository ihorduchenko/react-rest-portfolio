import React from 'react';

import { MDBBtn } from "mdbreact";

const CasesFilter = ({ title, skills, activeSkills, onFiltering }) => (
  <>
    <h2 className="mb-4 mt-3">{ title }</h2>
    <nav className="pb-5">
      <MDBBtn data-id="-1" onClick={onFiltering} color="primary" size="sm" outline={ (activeSkills.length > 0) ? true : false }>All</MDBBtn>
      { skills.map(skill => (
          <MDBBtn data-id={skill.term_id} key={skill.term_id} onClick={onFiltering} color="primary" size="sm" outline={ activeSkills.includes(skill.term_id) ? false : true }>
            { activeSkills.includes(skill.term_id) && <span className="mr-1">✔</span> }
            { skill.name }
          </MDBBtn>
        ))
      }
    </nav>
  </>
);

export default CasesFilter;