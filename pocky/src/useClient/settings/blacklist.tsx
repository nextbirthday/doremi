'use client'

import { Checkbox, Divider, Space } from 'antd'
import { CheckboxValueType } from 'antd/es/checkbox/Group'
import React from 'react'
import { settingsDivider } from '@/css/divider'

const onChange = (checkedValues: CheckboxValueType[]) => {
  console.log('checked = ', checkedValues)
}

const plainOptions = ['Apple', 'Pear']

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
]

const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
]

const Blacklist = () => {
  return (
    <div className=" border-solid border-2 border-indigo-500 p-2 w-80">
      <p style={{ textAlign: 'center' }}>Black List</p>
      <Divider style={{ margin: settingsDivider }} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>black</span>
        <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
      </div>
      <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
      <Checkbox.Group options={optionsWithDisabled} disabled defaultValue={['Apple']} onChange={onChange} />
    </div>
  )
}

export default Blacklist
