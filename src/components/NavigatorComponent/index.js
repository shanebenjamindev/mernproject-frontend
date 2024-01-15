import React from 'react'
import TypeProduct from '../TypeProduct/TypeProduct'
import { WrapperTypeProduct } from './style'

export default function NavigatorComponent() {
    const arr = [
        "Đồ Chơi - Mẹ & Bé",
        "Điện Thoại - Máy Tính Bảng",
        "Làm Đẹp - Sức Khỏe",
        "Điện Gia Dụng",
        "        Thời trang nữ",

        "Thời trang nam",
        "        Giày - Dép nữ",
        "Túi thời trang nữ",
        "        Giày - Dép nam",
        "        Túi thời trang nam",
        "Balo và Vali",
    ]

    const renderTypeProduct = () => {
        return arr.map((product, index) => {
            return <TypeProduct item={product} key={index} />
        })
    }

    return (
        <WrapperTypeProduct>
            <h1>Category</h1>
            {renderTypeProduct()}
        </WrapperTypeProduct>
    )
}
