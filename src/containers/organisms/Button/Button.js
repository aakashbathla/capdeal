import { connect } from 'react-redux';
import { } from './actions';
import Button from '../../../components/molecules/Button';

export const mapStateToProps = state => ({
// todos: state.todos
})

export const mapDispatchToProps = dispatch => {
return {
//inviteAFriend: email => {
// dispatch(inviteAFriend(email));
//},
};
};

export default connect(
mapStateToProps,
mapDispatchToProps
)(Button);