import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct } from '../../components/TypeProduct/style'

export default function Home() {
  const arr = ["cat", "dog", "frog"]

  const renderProduct = () => {
    return arr.map((product, index) => {
      return <TypeProduct item={product} key={index} />
    })
  }

  return (
    <div style={{ width: "77%", margin: "auto" }}>
      <WrapperTypeProduct>
        {renderProduct()}
      </WrapperTypeProduct>
    </div>
  )
}
