// ModalAccount.js
import { Modal, Tabs, Form, Input, Button } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useMutationHook } from '../../../hooks/useMutationHook';
import * as UserService from '../../../services/UserService'

const { TabPane } = Tabs;

export default function ModalAccount({ isVisible, handleModalToggle }) {
    const [form] = Form.useForm();

    const [activeTab, setActiveTab] = useState('login');
    const [accountSignup, setNewAccount] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: ""
    })
    const [accountLogin, setLoginAccount] = useState({
        email: "",
        password: "",
    });

    const handleOk = () => {
        handleModalToggle(false);
    };

    const handleCancel = () => {
        handleModalToggle(false);
    };

    const handleTabChange = (key) => {
        setActiveTab(key);
    };

    const handleOnchange = (e, formType) => {
        const updatedAccount = formType === 'signup' ? { ...accountSignup } : { ...accountLogin };
        updatedAccount[e.target.name] = e.target.value;

        formType === 'signup' ? setNewAccount(updatedAccount) : setLoginAccount(updatedAccount);
    };



    const mutationSignin = useMutationHook(data => UserService.userSignin(data))
    const mutationSignup = useMutationHook(data => UserService.userSignup(data))
    
    const handleLoginFormSubmit = () => {
        mutationSignin.mutate(accountLogin)
    };

    const handleSignupFormSubmit = () => {
        mutationSignup.mutate(accountSignup)
    };

    const renderLoginForm = () => (
        <Form form={form} onFinish={handleLoginFormSubmit}>
            <Form.Item
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 19 }}
                label="Email">
                <Input name="email" onChange={(e) => { handleOnchange(e, 'signin') }} placeholder="Enter your email" />
            </Form.Item>
            <Form.Item

                labelCol={{ span: 5 }}
                wrapperCol={{ span: 19 }}
                label="password">
                <Input name="password" onChange={(e) => { handleOnchange(e, 'signin') }} type="password" placeholder="Enter your password" />
            </Form.Item>
            <Form.Item style={{ textAlign: 'right' }}>
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
            </Form.Item>
        </Form>
    );

    const renderSignupForm = () => (
        <Form onFinish={handleSignupFormSubmit}>
            <Form.Item
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 16 }}
                label="Username">
                <Input name="name" onChange={(e) => { handleOnchange(e, 'signup') }} placeholder="Enter your name" />
            </Form.Item>

            <Form.Item
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 16 }}
                label="Email">
                <Input name="email" onChange={(e) => { handleOnchange(e, 'signup') }} type="email" placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 16 }}
                label="Phone">
                <Input name="phone" onChange={(e) => { handleOnchange(e, 'signup') }} type='number' placeholder="Enter your phone number" />
            </Form.Item>

            <Form.Item
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 16 }}
                label="Password">
                <Input name="password" onChange={(e) => { handleOnchange(e, 'signup') }} type="password" placeholder="Enter your password" />
            </Form.Item>

            <Form.Item
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 16 }}
                label="Confirm Password">
                <Input name="confirmPassword" onChange={(e) => { handleOnchange(e, 'signup') }} type="password" placeholder="Confirm your password" />
            </Form.Item>



            <Form.Item style={{ textAlign: 'right' }}>
                <Button type="primary" htmlType="submit">
                    Signup
                </Button>
            </Form.Item>
        </Form>
    );

    return (
        <Modal
            title="Login / Signup"
            open={isVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
        >
            <Tabs activeKey={activeTab} onChange={handleTabChange}>
                <TabPane tab="Login" key="login">
                    {renderLoginForm()}
                </TabPane>

                <TabPane tab="Signup" key="signup">
                    {renderSignupForm()}
                </TabPane>
            </Tabs>
        </Modal>
    );
}
