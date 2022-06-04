import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: var(--background);
  padding: 6rem;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 7rem;
  align-items: flex-start;
`

const Title = styled.h1`
  font-size: 5rem;
  font-family: Roboto Mono;
  font-weight: 700;
  color: var(--title-error-page);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
`

const SubTitle = styled.h2`
  font-size: 2.3rem;
  font-family: Roboto Mono;
  font-weight: 500;
  color: var(--title-error-page);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
`

const Text = styled.span`
  font-size: 1rem;
  font-family: Roboto Mono;
  font-weight: 400;
  color: var(--text)
`

const Illustration = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export { Wrapper, Info, Illustration, Title, SubTitle, Text }