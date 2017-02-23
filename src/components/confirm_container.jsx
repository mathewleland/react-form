import { connect } from 'react-redux';
import { signup } from '../actions/session_actions';
import Confirm from './Confirm';

const mapStateToProps = ({session}) => {
  return {
    extendedDetails: session.extendedDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: confirmDetails => dispatch(signup(confirmDetails))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Confirm);
