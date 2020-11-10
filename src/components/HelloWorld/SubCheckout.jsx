import React from 'react';
import PropTypes from 'prop-types';
import { Card, Input, Button } from 'antd';
import styles from './SubCheckout.module.css';

import 'antd/es/button/style/css';


/**
 * The only true SubCheckout component
 * @param {string} title The title of SubCheckout
 */
const SubCheckout = ({ price }) => (
  <>
     <Card title={"Total: $"+ price} style={{ width: 300 }}>
     <Input placeholder="First Name"  />
     <Input placeholder="Last Name" style={{marginTop: '15px'}}/>
     <Input placeholder="CC number" style={{marginTop: '15px'}}/>
     <Input placeholder="Expiration" style={{marginTop: '15px'}}/>
     <Input placeholder="Security Code" style={{marginTop: '15px'}}/>
      <Button style={{marginTop: '15px'}} type="primary">Checkout for ${price}</Button>
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
