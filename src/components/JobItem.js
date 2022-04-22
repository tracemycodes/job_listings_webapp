import React, { useEffect, useState } from 'react'
import { JobDiv } from '../styled'

const JobItem = ({ job }) => {

  const {
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools
  } = job

  const keyWords = [role, level, ...tools, ...languages]

  const [icon, setIcon] = useState('');

  const importSvgs = () => {
    const logoSvg = import(`${logo}`).then(d => {
      setIcon(d.default)
    })
  }

  useEffect(() => {
    importSvgs();
  }, [logo]);

  return (
    <JobDiv>
      <div className="company-details">
        <div className="company-logo">
          <img src={icon} alt="logo" />
        </div>
        <div className="company-name">
          <div>
          <h3>{company}</h3>
          {job.new && <span className='new'>NEW!</span>}
          {featured && <span className='featured'>FEATURED</span>}
          </div>
          <h2>{position}</h2>
          <div className='company-duration'>
          <span>{postedAt}</span>
          <span>{contract}</span>
          <span>{location}</span>
          </div>
        </div>
      </div>
      <div className="company-roles">
        {keyWords.map((word, id) => <button key={id}>{word}</button>)}
      </div>
    </JobDiv>
  )
}

export default JobItem
