import React from 'react'

import { Container, Title, Info } from './styles'

interface Props {
  title: string
  value: number
  color?: string
}

const ResumeItem: React.FC<Props> = ({ title, value, color }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Info color={color}>R$ {value}</Info>
    </Container>
  )
}

export default ResumeItem
