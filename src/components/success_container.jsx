import { connect } from 'react-redux';
import { signup, processSuccess } from '../actions/session_actions';
import Success from './confirm_container';

const mapStateToProps = ({session}) => {
  return {
    confirmDetails: session.confirmDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processSuccess: confirmDetails => dispatch(processSuccess(confirmDetails))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Success);
