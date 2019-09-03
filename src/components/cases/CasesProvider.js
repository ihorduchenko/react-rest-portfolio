import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getCases, getSkills } from '../../actions';

const CasesContext = React.createContext('');

class CasesProvider extends Component {
  componentDidMount() {
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

const mapStateToProps = state => ({
  cases: state.cases,
  skills: state.skills
});

const mapDispatchToProps = (dispatch) => ({
  getCases: () => dispatch(getCases()),
  getSkills: () => dispatch(getSkills())
});

export default connect(mapStateToProps, mapDispatchToProps)(CasesProvider);