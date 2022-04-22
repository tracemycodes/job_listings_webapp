import styled from 'styled-components';
import headerImg from '../components/images/bg-header-desktop.svg'



export const HeaderBanner = styled.header`
  height: 9rem;
  background-color: hsl(180, 29%, 50%);
  background-image: url(${headerImg});
  position: relative;
`;

export const FilterDiv = styled.article`
  width: 90%;
  // height: 4rem;
  max-width: 60rem;
  margin: auto;
  display: flex;
  position: relative;
  padding: 1rem 2rem;
  margin-top: -3.5rem;
  margin-bottom: 2rem;
  background-color: white;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: .4rem;
    border: none;
    margin-right: .7rem;
    font-weight: bold;
    color: hsl(180, 29%, 50%);
    border-radius: 4px;

    img {
      padding: .3rem;
      margin-left: .4rem;
      background-color: hsl(180, 29%, 50%);
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: hsl(180, 14%, 20%);
      }
    }
  }

`

export const Container = styled.section`
  background-color: hsl(180, 52%, 96%);
  padding: 2rem 0rem;
`;

export const JobDiv = styled.article`
  width: 90%;
  max-width: 60rem;
  margin: auto;
  background-color: white;
  padding: 1rem 2rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

  & .company-details {
    display: flex;
  }
  .company-logo {
    margin-right: 1rem;
    width: 5rem;
    height: 5rem;
  }
  .company-logo img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .company-name {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  h2 {
    font-size: 1.2rem;
    color: hsl(180, 14%, 20%);
  }
  h3 {
    font-size: 1rem;
    color: hsl(180, 29%, 50%);
    font-weight: bold;
    display: inline;
  }
  .featured {
    background-color: hsl(180, 14%, 20%);
    padding: .2rem .4rem;
    color: white;
    border-radius: 10px;
    font-size: .65rem;
  }
  .new {
    background-color: hsl(180, 29%, 50%);
    padding: .2rem .4rem;
    color: white;
    border-radius: 10px;
    margin: 0 .75rem;
    font-size: .65rem;
  }
  .company-duration span {
    font-size: .75rem;
    color: hsl(180, 8%, 52%);
  }
  .company-duration *+* {
    margin-left: 1rem;
  }
  .company-roles button {
    margin-left: 1rem;
    background-color: hsl(180, 52%, 96%);
    border: none;
    padding: .3rem .5rem;
    border-radius: 3px;
    color: hsl(180, 29%, 50%);
    font-size: .75rem;
    font-weight: bold;
    box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.1);
    cursor: pointer;
  }
`
