import React from 'react'
import { Container } from '../styled'
import JobItem from './JobItem';

const Jobs = ({ data }) => {
  console.log(data);
  return (
    <Container>
     {data.map(job => <JobItem key={job.id} job={job} />)} 
    </Container>
  )
}

export default Jobs
