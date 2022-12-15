import { Container } from './styles'
import { View } from 'react-native'
import { TextInfo } from '@components/TextInfo/TextInfo'
import { Text } from '@components/Text/Text'
import { BoxInfo } from '@components/BoxInfo/BoxInfo'

export function Statistics() {
  return (
    <Container>
      <View>
        <TextInfo />
      </View>
      <Text />
      <BoxInfo />
      <BoxInfo />
      <BoxInfo />
      <BoxInfo />
    </Container>
  )
}
