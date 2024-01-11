import React from 'react'
import { WrapperAccount, WrapperCart, WrapperHeader, WrapperHeaderText } from './style'
import { Col } from 'antd'
import Search from 'antd/es/input/Search';
import { UserOutlined, ShoppingCartOutlined, CaretDownOutlined } from '@ant-design/icons';

export default function HeaderComponent() {
  return (
    <div>
      <WrapperHeader>

        <Col span={3}>
          <WrapperHeaderText>
            <span>
              Logo
            </span>
          </WrapperHeaderText>
        </Col>

        <Col span={12}>
          <Search
            enterButton="Search"
            allowClear
            placeholder='Search...'
          >
          </Search>
        </Col>

        <Col span={6}>
          <WrapperAccount>
            <div>
              <UserOutlined style={{ fontSize: "30px" }} />
            </div>

            <div>
              <div>Đăng nhập / Đăng ký</div>
              <div>Tài khoản
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperAccount>
        </Col>

        <Col span={3}>
          <WrapperCart>
            <ShoppingCartOutlined style={{ fontSize: "30px" }} />
          </WrapperCart>
        </Col>
      </WrapperHeader>
    </div>
  )
}
