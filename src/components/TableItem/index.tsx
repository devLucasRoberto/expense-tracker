import React from 'react'
import { formaDate } from '../../helpers/dateFilter'
import { Item } from '../../types/item'
import { categories } from '../../data/categories'

import { TableLine, TableColumn, Category, Value } from './styles'

type Props = {
  item: Item
}

const TableItem: React.FC<Props> = ({ item }) => {
  return (
    <TableLine>
      <TableColumn>{formaDate(item.date)}</TableColumn>
      <TableColumn>
        <Category color={categories[item.category].color}>
          {categories[item.category].title}
        </Category>
      </TableColumn>
      <TableColumn>{item.title}</TableColumn>
      <TableColumn>
        <Value color={categories[item.category].expense ? 'red' : 'green'}>
          R$ {item.value}
        </Value>
      </TableColumn>
    </TableLine>
  )
}

export default TableItem
