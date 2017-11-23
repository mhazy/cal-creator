import { connect } from 'react-redux';
import { authActions } from './auth.actions';
import { storeConnector } from './auth.selectors';
import { AuthComponent } from './auth.component';

const actions = {
  login: authActions.authorize,
  logout: authActions.logout,
};

export const AuthContainerComponent = connect(storeConnector, actions)(AuthComponent);
