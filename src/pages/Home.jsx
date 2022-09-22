import React, { useEffect, useState } from 'react'
import { Breadcrumb, Typography, Space } from 'antd';
const { Title, Text, Link } = Typography;

const Home = ({ dark }) => {
  const [username, setUsername] = useState('')
  useEffect(() => {
    setUsername(JSON.parse(localStorage.getItem('Username')))
  }, [])

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item style={{ color: dark ? 'white' : 'black' }}>
          <p style={{ fontSize: '20px' }}>
            Current User: <strong style={{ textDecoration: 'underline' }}>{username}</strong>
          </p>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Title underline level={2} style={{ color: dark ? 'white' : 'black' }}>About Me.</Title>
      <Space size='large' direction='vertical'>
        <Text style={{ fontSize: '18px', color: dark ? 'white' : 'black' }}>
          Greeting, my name is Thet Min Htin and I am 22 years old.
        </Text>
        <Text style={{ fontSize: '18px', color: dark ? 'white' : 'black' }}>
          Currently, I am fresh graduated in BSc. Computing with Honors at <Link href='https://www.napier.ac.uk/' target="_blank">EDINBURGH NAPIER UNIVERSITY</Link>.
        </Text>
        <Text style={{ fontSize: '18px', color: dark ? 'white' : 'black' }}>
          I am current emphasizing in front-end web development in REACTJS and other technologies such as MERN Stack, Docker,  Firebase and so on.
        </Text>
        <Text style={{ fontSize: '18px', color: dark ? 'white' : 'black' }}>
          And I am also keen to pursue carrer in IT industry with reliable communication with all new friends.
        </Text>
        <Text style={{ fontSize: '18px', color: dark ? 'white' : 'black' }}>
          Go to <Link href="https://thet-min-htin.vercel.app/" target="_blank">my porfolio website</Link> to explore more about what kind of projects I had done.
        </Text>
        <Text style={{ fontSize: '16px', color: dark ? 'white' : 'black' }}>
          Some of my porfolios:
        </Text>
        <ul style={{ color: dark ? 'white' : 'black' }}>
          <li>
            <Text style={{ fontSize: '16px', color: dark ? 'white' : 'black' }} copyable href="https://mimashou-101.vercel.app/" target="_blank">
              https://mimashou-101.vercel.app/
            </Text>
          </li>
          <li>
            <Text style={{ fontSize: '16px', color: dark ? 'white' : 'black' }} copyable href="https://world-factbook-101.vercel.app/" target="_blank">
              https://world-factbook-101.vercel.app/
            </Text>
          </li>
          <li>
            <Text style={{ fontSize: '16px', color: dark ? 'white' : 'black' }} copyable href="https://kanji-quiz-101.vercel.app/" target="_blank">https://kanji-quiz-101.vercel.app/</Text>
          </li>
        </ul>
      </Space>
    </>
  )
}

export default Home