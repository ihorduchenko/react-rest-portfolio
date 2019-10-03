import React, {Component} from "react";
import { connect } from 'react-redux';
import { getWPOptions, getMainMenu } from '../../actions';

export const OptionsContext = React.createContext();

class OptionsContextComp extends Component {
  componentDidMount() {
    this.props.getWPOptions();
    this.props.getMainMenu();
  }

  render() {
    const options = this.props.options;
    const menus = this.props.menus;

    return (
      <OptionsContext.Provider value={this.props}>
        {this.props.children}
      </OptionsContext.Provider>
    );
  }
}

const mapStateToProps = state => ({
  options: state.options,
  menus: state.menus
});

export default connect(mapStateToProps, { getWPOptions, getMainMenu })(OptionsContextComp);