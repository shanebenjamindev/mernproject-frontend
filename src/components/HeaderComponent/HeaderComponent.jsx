import React from 'react'
import { WrapperAccount, WrapperCart, WrapperHeader, WrapperHeaderText } from './style'
import { Col } from 'antd'
import Search from 'antd/es/input/Search';
import { HomeOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
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
            <img src={logo} alt='logo' width={80} />
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
              <HomeOutlined style={{ fontSize: "30px", marginLeft: "10px" }} />
              <span>Trang chủ</span>
            </Link>

            <Link to="/account">
              <UserOutlined style={{ fontSize: "30px", marginLeft: "10px" }} />
              <span>Tài khoản</span>
            </Link>

            <WrapperCart>
              <ShoppingCartOutlined style={{ fontSize: "30px" }} />
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
