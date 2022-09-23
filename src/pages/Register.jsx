import React, { useState } from 'react'
import { Button, Form, Input, Typography, notification, Space } from 'antd';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const { Title } = Typography;

const Register = () => {
  const [error, setError] = useState([])
  const [loginSuccess, setLoginSuccess] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginName, setLoginName] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault()
    if (error.length > 1 || !username || !password || !loginName || !email) {
      navigate('/register')
    } else {
      setLoginSuccess(false)
      localStorage.setItem("Password", JSON.stringify(password));
      localStorage.setItem("Username", JSON.stringify(username));
      localStorage.setItem("Login", loginSuccess);
      console.log("Saved");
      openNotificationWithIcon('success')
      e.target.reset()
    }
  }

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Register Successfully!',
      description: 'Please go back to login page.',
      placement: 'top'
    });
  };
  // console.log(registerSuccess)

  return (
    <div className="App">
      <header className="App-header">
        <Title level={3} style={{ marginBottom: '3vh' }}>Sign Up</Title>
        <Form
          labelAlign='left'
          onSubmitCapture={handleRegister}
          size='large'
          autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          onFinish={(values) => {
            console.log(values);
          }}
          onFinishFailed={(error) => {
            setError(error);
          }}
        >

          <Form.Item
            name="username"
            label="Username"
            rules={[
              {
                required: true,
                message: "Please enter your name",
              }
            ]}
            hasFeedback
          >
            <Input onChange={(e) => setUsername(e.target.value)} placeholder="Type your username" />
          </Form.Item>

          <Form.Item
            name="loginName"
            label="Login Name"
            rules={[
              {
                required: true,
                message: "Please enter your login name",
              }
            ]}
            hasFeedback
          >
            <Input onChange={(e) => setLoginName(e.target.value)} placeholder="Type your login name" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
            ]}
            hasFeedback
          >
            <Input.Password onChange={(e) => setPassword(e.target.value)} placeholder="Type your password" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter your Email",
              },
              {
                type: "email",
                message: "Please enter a valid email"
              }
            ]}
            hasFeedback
          >
            <Input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Type your Email Address" />
          </Form.Item>

          <Form.Item
            name="phonenumber"
            label="Phone Number"
          >
            <Input placeholder="Type your phone number" />
          </Form.Item>

          <Form.Item
            name="nrc"
            label="NRC Number"
          >
            <Input placeholder="Type your NRC" />
          </Form.Item>

          <Form.Item
            name="address"
            label="Address"
          >
            <Input placeholder="Type your address" />
          </Form.Item>

          <Form.Item labelCol={{ span: 10 }} wrapperCol={{ span: 20 }}>
            <Space>
              <Button
                type="primary"
                htmlType="submit"
                shape='round'>
                Register
              </Button>
              <Link to='/'>
                <Button
                  style={{ marginLeft: 10 }}
                  shape='round'>
                  Login
                </Button>
              </Link>
            </Space>
          </Form.Item>
        </Form>
      </header>
    </div>
  )
}

export default Register