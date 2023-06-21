import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

import { BtnIconTypeStylesProps, Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: BtnIconTypeStylesProps;
}

export function ButtonIcons({ icon, type = 'PRIMARY', ...rest}: Props){
  return(
    <Container {...rest}>
      <Icon
        name={icon}
        type={type}
      />

    </Container>
  )
}