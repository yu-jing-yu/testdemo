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
      title: '示例图片 1',
      description: '这是一个示例图片描述',
      url: 'https://via.placeholder.com/400x300',
      thumbnail: 'https://via.placeholder.com/300x200'
    },
    {
      id: 2,
      title: '示例图片 2',
      description: '这是另一个示例图片描述',
      url: 'https://via.placeholder.com/400x300',
      thumbnail: 'https://via.placeholder.com/300x200'
    }
  ];

  return (
    <Layout>
      <Content style={{ padding: '50px' }}>
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