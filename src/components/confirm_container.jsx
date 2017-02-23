import { connect } from 'react-redux';
import { signup, processConfirm } from '../actions/session_actions';
import Confirm from './confirm_container';

const mapStateToProps = ({session}) => {
  return {
    extendedDetails: session.extendedDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processConfirm: confirmDetails => dispatch(processConfirm(confirmDetails))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Confirm);
