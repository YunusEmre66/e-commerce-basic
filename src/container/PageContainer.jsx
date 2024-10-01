import { Container } from 'postcss'

const PageContainer = ({children}) => {
  return (
    <Container maxWidth="lg">{children}</Container>
  )
}

export default PageContainer
