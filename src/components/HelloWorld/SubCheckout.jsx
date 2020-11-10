import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import styles from './SubCheckout.module.css';
import 'antd/es/button/style/css';


/**
 * The only true SubCheckout component
 * @param {string} title The title of SubCheckout
 */
const SubCheckout = ({ price }) => (
  <>
     <Card title={"Total: $"+ price} extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </>
);

SubCheckout.propTypes = {
  /**
   * The title of SubCheckout
   */
  price: PropTypes.number.isRequired,
  stripeId: PropTypes.string.isRequired,
};

export default SubCheckout;
