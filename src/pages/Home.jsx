import React from 'react';
import { Layout, Typography, Card, Row, Col } from 'antd';
import { VideoCameraOutlined, PictureOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Content } = Layout;
const { Title } = Typography;

const Home = () => {
  return (
    <Layout className="home-container">
      <Content style={{ padding: '50px' }}>
        <Title level={1} style={{ textAlign: 'center', marginBottom: '40px' }}>多媒体展示平台</Title>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={12} md={8}>
            <Link to="/videos">
              <Card hoverable>
                <VideoCameraOutlined style={{ fontSize: '48px', color: '#1890ff' }} />
                <Title level={3} style={{ marginTop: '16px' }}>视频展示</Title>
                <p>浏览精彩视频内容</p>
              </Card>
            </Link>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Link to="/photos">
              <Card hoverable>
                <PictureOutlined style={{ fontSize: '48px', color: '#52c41a' }} />
                <Title level={3} style={{ marginTop: '16px' }}>图片展示</Title>
                <p>查看精美图片集</p>
              </Card>
            </Link>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Home;