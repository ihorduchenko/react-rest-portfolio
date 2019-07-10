import React from 'react';

import { MDBBtn } from "mdbreact";

const CasesFilter = ({ skills, activeSkills, onFiltering }) => (
  <nav className="text-center pb-5">
    <MDBBtn data-id="-1" onClick={onFiltering} color="primary" size="sm" outline={ (activeSkills.length > 0) ? true : false }>All</MDBBtn>
    { skills.map(skill => (
        <MDBBtn data-id={skill.id} key={skill.id} onClick={onFiltering} color="primary" size="sm" outline={ activeSkills.includes(skill.id) ? false : true }>
          { activeSkills.includes(skill.id) && <span className="mr-1">✔</span> }
          { skill.name }
        </MDBBtn>
      ))
    }
  </nav>
);

export default CasesFilter;