import React, { useEffect, useState } from 'react';
import { Container, FilterDiv } from '../styled';
import JobItem from './JobItem';
import closeIcon from '../components/images/icon-remove.svg';

const Jobs = ({
  data,
  selectFilter,
  filter,
  removeFilteredItem,
  clearFilter,
}) => {
  const [filterData, setFilterData] = useState([]);

  const modifiedData = () => {
    if (filter.length > 0) {
      const newData = data.filter((item) => {
        return filter.every((category) => {
          return (
            item.role === category ||
            item.level === category ||
            item.languages.includes(category) ||
            item.tools.includes(category)
          );
        });
      });

      setFilterData(newData);
    } else {
      setFilterData(data);
    }
  };

  useEffect(() => {
    modifiedData();
  }, [filter]);

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

      {filterData.map((job) => (
        <JobItem key={job.id} job={job} selectFilter={selectFilter} />
      ))}
    </Container>
  );
};

export default Jobs;
