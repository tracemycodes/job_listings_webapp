import React from 'react';
import { Container, FilterDiv } from '../styled';
import JobItem from './JobItem';
import closeIcon from '../components/images/icon-remove.svg';

const Jobs = ({ data, selectFilter, filter, removeFilteredItem, clearFilter }) => {
  return (
    <Container>
      {filter.length > 0 ? (
        <FilterDiv>
          {filter.map((category, id) => (
            <button key={id}>
              {category}{' '}
              <img
                src={closeIcon}
                onClick={() => removeFilteredItem(category)}
                alt=''
              />{' '}
            </button>
          ))}
          <p onClick={() => clearFilter()}>clear all</p>
        </FilterDiv>
      ) : null}

      {data.map((job) => (
        <JobItem key={job.id} job={job} selectFilter={selectFilter} />
      ))}
    </Container>
  );
};

export default Jobs;
