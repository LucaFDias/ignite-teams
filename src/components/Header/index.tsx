import styled from "styled-components/native";
import LogoImg from '@assets/logo.png'
import { CaretLeft } from "phosphor-react-native"

const Container = styled.View`
  width: 100%;
  
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const BackBtn = styled.TouchableOpacity`
  flex: 1;

`

const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

const ArrowLeft = styled(CaretLeft).attrs(({ theme}) => ({
  size: 32,
  color: theme.COLORS.WHITE
}))``;

type Props = {
  showBackBtn?: boolean;
}

export function Header({ showBackBtn = false}: Props) {
  return (
      <Container>

      { 
        showBackBtn &&
          <BackBtn>
            <ArrowLeft/>
          </BackBtn>
      }
        <Logo source={LogoImg}/>
      </Container>
    );
}