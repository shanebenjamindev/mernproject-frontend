import React from 'react'
import { Button } from 'antd'

export default function ButtonComponent({size, styleButton, styleTextButton, textButton, ...rest}) {
  return (
    <Button 
        size={size}
        style = {styleButton}
    > 
    <span style={styleTextButton}>{textButton}</span>
    </Button>
  )
}
