'use client'

import React from 'react'

import { useListData } from 'react-stately'
import { TagField } from 'ui'

export default function TagFieldMaxDemo() {
  const selectedItems = useListData({
    initialItems: []
  })

  return <TagField max={3} placeholder="hello" label="Add tag" list={selectedItems} />
}
