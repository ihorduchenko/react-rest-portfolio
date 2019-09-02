import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getPage, getCases, getSkills } from '../../actions';

const CasesContext = React.createContext('');

class CasesProvider extends Component {
  state = {

  };

  componentDidMount() {
    this.props.getPage('home');
    this.props.getCases();
    this.props.getSkills();
  }

  render() {
    return (
      <CasesContext.Provider value={this.state}>
        {this.props.children}
      </CasesContext.Provider>
    );
  }
}

export default CasesProvider;