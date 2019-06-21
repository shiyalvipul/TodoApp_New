import React from 'react';
import PropTypes from 'prop-types';

import Pagination from 'material-ui-flat-pagination';

import { fake } from '../../../utils';

const pagination = ({
  pageLimit, offset, totalRecord, onclick,
}) => (
  <Pagination
      limit={pageLimit}
      offset={offset}
      total={totalRecord}
      onClick={onclick}
    />

);

pagination.propTypes = {
  pageLimit: PropTypes.number,
  offset: PropTypes.number,
  totalRecord: PropTypes.number,
  onclick: PropTypes.func,
};

pagination.defaultProps = {
  pageLimit: 10,
  offset: 10,
  totalRecord: 0,
  onclick: fake,
};


export default pagination;
