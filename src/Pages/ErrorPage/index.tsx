import React from 'react';

import illustration from '../../assets/illustration.svg';

import { Wrapper, Info, Illustration, Title, SubTitle, Text } from './styles';

const ErrorPage = () => {
  return(
    <Wrapper>
      <Info>
        <Title>404</Title>
        <SubTitle>From this page, you shall not pass.</SubTitle>
        <Text>A página que você está procurando foi movida renomeada ou nunca existiu. Talvez o Balrog pegou ela...</Text>
      </Info>
      <Illustration>
        <img src={illustration} alt="imagi" />
      </Illustration>
    </Wrapper>
  )
}

export default ErrorPage;