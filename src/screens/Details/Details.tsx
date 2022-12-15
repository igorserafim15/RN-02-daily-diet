import { Text } from '@components/Text/Text'
import { View } from 'react-native'
import { DetailsEdit } from './DetailsEdit/DetailsEdit'
import { DetailsView } from './DetailsView/DetailsView'
import { Container } from './styles'

export function Details() {
  return (
    <Container>
      <View>
        <Text />
      </View>
      <DetailsEdit />
      <DetailsView />
    </Container>
  )
}
