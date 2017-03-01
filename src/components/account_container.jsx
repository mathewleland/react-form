import { connect } from 'react-redux';
import { processAccount } from '../actions/session_actions';
import Account from './Account';

const mapStateToProps = ({ session }) => ({
  session: session
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
