import DashboardViewStateless from './dashboard.view';
import { connect } from 'react-redux';

export const DashboardView = connect()(DashboardViewStateless);
