import React from 'react';
import { Layout, Typography, Card, Row, Col, Image } from 'antd';

const { Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;

const Photos = () => {
  // 示例图片数据，实际项目中应该从后端API获取
  const photos = [
    {
      id: 1,
      title: '案例1',
      description: '案例1',
      url: '/videos/c.jpg',
      thumbnail: '/videos/c.jpg'
    },
    {
      id: 2,
      title: '案例2',
      description: '案例2',
      url: '/videos/d.jpg',
      thumbnail: '/videos/d.jpg'
    },
    {
      id: 3,
      title: '案例3',
      description: '案例3',
      url: '/videos/f.jpg',
      thumbnail: '/videos/f.jpg'
    },
    {
      id: 4,
      title: '案例4',
      description: '案例4',
      url: '/videos/j.jpg',
      thumbnail: '/videos/j.jpg'
    },
    {
      id: 5,
      title: '案例5',
      description: '案例5',
      url: '/videos/h.jpg',
      thumbnail: '/videos/h.jpg'
    }
  ];

  return (
    <Layout>
      <Content style={{ padding: '15px' }}>
        <Title level={2} style={{ marginBottom: '30px' }}>图片展示</Title>
        <Row gutter={[24, 24]}>
          {photos.map(photo => (
            <Col xs={24} sm={12} md={8} lg={6} key={photo.id}>
              <Card
                hoverable
                cover={
                  <Image
                    alt={photo.title}
                    src={photo.thumbnail}
                    preview={{ src: photo.url }}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                }
              >
                <Meta
                  title={photo.title}
                  description={photo.description}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default Photos;