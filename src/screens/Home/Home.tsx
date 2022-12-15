// @styles
import { Container } from './styles'
// @components
import { AppBarMain } from '@components/AppBarMain/AppBarMain'
import { BoxInfo } from '@components/BoxInfo/BoxInfo'
import { Text } from '@components/Text/Text'
import { FilledButton } from '@components/FilledButton/FilledButton'
import { MealItem } from '@components/MealItem/MealItem'

export function Home() {
  return (
    <Container>
      <AppBarMain />
      <BoxInfo />
      <Text />
      <FilledButton />
      <Text />
      <MealItem />
    </Container>
  )
}
