import { connect } from 'react-redux';
import { signup, processAccount } from '../actions/session_actions';
import Account from './Account';

const mapStateToProps = ({ session }) => ({
  errors: session.errors
});

const mapDispatchToProps = dispatch => {
  return {
    processAccount: accountDetails => dispatch(processAccount(accountDetails))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account);
