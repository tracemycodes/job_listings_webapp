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
  max-width: 60rem;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  padding: 1rem 2rem;
  border-radius: 4px;
  margin-top: -3.5rem;
  margin-bottom: 2rem;
  background-color: white;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

  p {
      margin-left: auto;
      color: hsl(180, 14%, 20%);
      cursor: pointer;
      font-size: clamp(.75rem, 2.5vw, 1rem);
      &:hover {
        color: hsl(180, 29%, 50%);
      }
    }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: .4rem;
    border: none;
    margin-top: .5rem;
    margin-bottom: .5rem;
    margin-right: clamp(.6rem, 2vw, 1rem);
    font-size: clamp(.6rem, 2vw, .75rem);
    font-weight: bold;
    color: hsl(180, 29%, 50%);
    border-radius: 4px;

    img {
      padding: clamp(.1rem, 1vw, .3rem);;
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
  border-radius: 4px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

  @media (max-width: 790px) {
    border: 2px solid blue;
    padding: 1rem 1rem;
  }

  & .company-details {
    display: flex;
  }
  .company-logo {
    margin-right: 1rem;
    // width: 5rem;
    width: clamp(3.5rem, 5vw, 5rem);
    height: clamp(3.5rem, 5vw, 5rem);
    // height: 5rem;
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
    
    font-size: clamp(.75rem, 3vw, 1rem);
    color: hsl(180, 14%, 20%);
  }
  h3 {
    font-size: clamp(.75rem, 3vw, 1rem);
    color: hsl(180, 29%, 50%);
    font-weight: bold;
    display: inline;
  }
  .featured {
    background-color: hsl(180, 14%, 20%);
    padding: .2rem .4rem;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    font-size: clamp(.6rem, 2vw, .75rem);
  }
  .new {
    background-color: hsl(180, 29%, 50%);
    padding: .2rem .4rem;
    color: white;
    border-radius: 10px;
    margin: 0 .75rem;
    font-weight: bold;
    font-size: clamp(.6rem, 2.5vw, .75rem);
  }
  .company-duration span {
    font-size: clamp(.6rem, 2.5vw, .75rem);
    color: hsl(180, 8%, 52%);
  }
  .company-duration *+* {
    margin-left: 1rem;
  }
  .company-roles {
    border: 2px solid green;
  }
  .company-roles button {
    margin-left: 1rem;
    margin-bottom: 1rem;
    background-color: hsl(180, 52%, 96%);
    border: none;
    padding: .3rem .5rem;
    border-radius: 3px;
    color: hsl(180, 29%, 50%);
    font-size: clamp(.6rem, 2vw, .75rem);
    font-weight: bold;
    box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.1);
    cursor: pointer;
    float: right;
  }
`
