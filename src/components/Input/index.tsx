import { TextInput, TextInputProps } from "react-native";
import { css, useTheme } from "styled-components/native";
import styled from "styled-components/native";

const Container = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  border-radius: 6px;
  padding: 16px;
`;

export function Input({...rest}: TextInputProps){

  const { COLORS } = useTheme();

  return (
          <Container
            placeholderTextColor={COLORS.GRAY_300}
          {...rest}
        />
        )
}