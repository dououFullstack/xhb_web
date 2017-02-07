import React, { PropTypes } from 'react';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import Alert from 'react-s-alert';

import Header from './header';
import Footer from './footer';

class _Layout extends React.Component {
  render() {
    return (
      <div>
        <Alert stack={{limit: 3}} />
        <Header/>
          {this.props.children}
        <Footer/>
      </div>
    );
  }
}
_Layout.propTypes = {
  children: PropTypes.element,
};
export default _Layout;
