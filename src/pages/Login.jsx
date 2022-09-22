import React, { useState } from 'react'
import { Form, Button, Input, Alert } from "antd";
import { Link, useNavigate } from 'react-router-dom'
import { Typography } from 'antd';
import "../App.css"

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate()
  const localUsername = JSON.parse(localStorage.getItem('Username'))
  const localPassword = JSON.parse(localStorage.getItem('Password'))
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  // console.log(localUsername, localPassword)

  const handleLogin = () => {
    if (username === localUsername && password === localPassword) {
      localStorage.setItem('Login', true)
      navigate('/home')
    }
    else {
      setError(true)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Title level={3} style={{ marginBottom: '5vh' }}>Login</Title>
        {error ?
          <Alert
            showIcon
            style={{ marginBottom: '3vh' }}
            message="Invalid Credential!"
            type="error" />
          :
          null
        }
        <Form
          onSubmitCapture={handleLogin}
          size='large'
          autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          onFinish={(values) => {
            console.log({ values });
          }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}
        >

          <Form.Item
            onChange={(e) => setUsername(e.target.value)}
            name="fullName"
            label="Username"
            rules={[
              {
                required: true,
                message: "Please enter your name",
              }
            ]}
            hasFeedback
          >
            <Input placeholder="Type your name" />
          </Form.Item>

          <Form.Item
            onChange={(e) => setPassword(e.target.value)}
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
            <Input.Password placeholder="Type your password" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 5, span: 16 }} >
            <Button type="primary" htmlType="submit" shape='round' style={{ marginRight: 20 }}>
              Login
            </Button>
            <Link to='/register'>
              <Button shape='round'>
                Sign Up
              </Button>
            </Link>
          </Form.Item>

        </Form>
      </header>
    </div>
  )
}

export default Login