import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getCases } from '../../actions';

const CasesContext = React.createContext();

class CasesProvider extends Component {
  componentDidMount() {
    this.props.getCases();
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
  cases: state.cases
});

const mapDispatchToProps = (dispatch) => ({
  getCases: () => dispatch(getCases())
});

export default connect(mapStateToProps, mapDispatchToProps)(CasesProvider);