import React, {PropTypes} from 'react';
import { Link } from 'react-router';

export default
class NavLink extends React.Component {
  render() {
    const { router } = this.context;
    const { index, to, children } = this.props;
    const isActive = router.isActive(to, index);

    return (
      <li className={isActive ? 'active' : ''}>
        <Link to={to}>{children}</Link>
      </li>
    );
  }
}
NavLink.propTypes = {
  index: PropTypes.bool,
  to: PropTypes.string,
  children: PropTypes.string,
};
NavLink.contextTypes = {
  router: PropTypes.object.isRequired
};
