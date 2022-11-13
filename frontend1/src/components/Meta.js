import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description}></meta>
      <meta name='keywords' content={keywords}></meta>
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To FaiShop',
  keywords:
    'electronics, gaming, buy electronics, best price, budget gaming, computer accesories',
  description: 'Best products around the country',
};

export default Meta;
