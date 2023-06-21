import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import styled from "styled-components/native";

const Container = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 24px;
`

export function Input({...rest}: TextInputProps){

  const { COLORS } = useTheme();


  return <Container
          placeholderTextColor={COLORS.GRAY_300}
          {...rest}
        />
}