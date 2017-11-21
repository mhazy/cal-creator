import { connect } from 'react-redux';

import { storeConnector } from './main.selectors';
import { MainComponent } from './main.component';

export const MainContainerComponent = connect(storeConnector)(MainComponent);
