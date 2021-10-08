import React from 'react'
import { Item } from '../../types/item'
import TableItem from '../TableItem'

import { Container, Table, TableHeadColumn } from './styles'

type Props = {
  list: Item[]
}

const TableArea: React.FC<Props> = ({ list }) => {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <TableHeadColumn width={100}>Data</TableHeadColumn>
            <TableHeadColumn width={130}>Categoria</TableHeadColumn>
            <TableHeadColumn>Título</TableHeadColumn>
            <TableHeadColumn width={150}>Valor</TableHeadColumn>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <TableItem key={index} item={item} />
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default TableArea
