import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Logo do React e React Avançado escrito ao lado"
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      Typescript, ReactJS, NextJS e StyledComponents!
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Desenvolvedor de frente para tela com código"
    />
  </S.Wrapper>
)

export default Main
