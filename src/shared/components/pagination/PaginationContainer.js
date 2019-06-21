import React from 'react';
import PropTypes from 'prop-types';

import Pagination from './Pagination';
import { fake } from '../../../utils';

const PaginationContainer = (props) => {
  const {
    totalRecord, pageLimit, pageNo, onHandleClick,
  } = props;
  return (
    <Pagination
      pageLimit={pageLimit}
      offset={(pageNo - 1) * pageLimit}
      totalRecord={totalRecord}
      onclick={onHandleClick}
    />

  );
};


PaginationContainer.propTypes = {
  totalRecord: PropTypes.number,
  pageNo: PropTypes.number,
  pageLimit: PropTypes.number,
  onHandleClick: PropTypes.func,
};

PaginationContainer.defaultProps = {
  totalRecord: 0,
  pageNo: 1,
  pageLimit: 10,
  onHandleClick: fake,
};

export default PaginationContainer;
