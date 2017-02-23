import { connect } from 'react-redux';
import { signup, processBusInfo } from '../actions/session_actions';
import Extended from './extended_container';

const mapStateToProps = ({session}) => {
  return {
    accountData: session.accountData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processExtended: extendedDetails => dispatch(processExtended(extendedDetails))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Extended);
