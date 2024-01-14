import React from 'react'
import { WrapperAccount, WrapperCart, WrapperHeader, WrapperHeaderText } from './style'
import { Col } from 'antd'
import Search from 'antd/es/input/Search';
import { HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import TypeProduct from '../TypeProduct/TypeProduct';

export default function HeaderComponent() {
  const arr = ["điện gia dụng", "xe cộ", "mẹ & bé", "khỏe đẹp", "nhà cửa", "sách", "thể thao"]

  // const renderTypeProduct = () => {
  //   return arr.map((product, index) => {
  //     return <TypeProduct item={product} key={index} />
  //   })
  // }

  return (
    <div>

      <WrapperHeader>

        <Col span={2}>
          <WrapperHeaderText>
            <span>
              Logo
            </span>
          </WrapperHeaderText>
        </Col>

        <Col span={15}>
          <Search
            enterButton="Search"
            allowClear
            placeholder='Search...'
          >
          </Search>
        </Col>

        <Col span={7}>
          <WrapperAccount>
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
              <HomeOutlined style={{ fontSize: "25px" }} />

              Trang chủ</Link>
            <Link to="/account">
              Tài khoản
            </Link>

            <WrapperCart>
              <ShoppingCartOutlined style={{ fontSize: "25px" }} />
            </WrapperCart>

          </WrapperAccount>
        </Col>
      </WrapperHeader>
    </div>
  )
}

// <WrapperTypeProduct>
//   {renderTypeProduct()}
// </WrapperTypeProduct>
