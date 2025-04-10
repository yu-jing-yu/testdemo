import React, { useState } from 'react';
import { Layout, Typography, Card, Row, Col, Modal } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;

const Videos = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: '案例1',
      description: '案例1',
      url: '/videos/a.mp4',
      thumbnail: '/videos/athu.jpg'
    },
    {
      id: 2,
      title: '案例2',
      description: '案例2',
      url: '/videos/b.mp4',
      thumbnail: '/videos/bthu.jpg'
    },
    {
      id: 3,
      title: '案例3',
      description: '案例3',
      url: '/videos/aa.mp4',
      thumbnail: '/videos/aathu.jpg'
    },
    {
      id: 4,
      title: '案例4',
      description: '案例4',
      url: '/videos/g.mp4',
      thumbnail: '/videos/gthu.jpg'
    },
    {
      id: 5,
      title: '案例5',
      description: '案例5',
      url: '/videos/i.mp4',
      thumbnail: '/videos/ithu.jpg'
    }
  ];

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
    setIsModalVisible(true);
  };

  return (
    <Layout>
      <Content style={{ padding: '15px' }}>
        <Title level={2} style={{ marginBottom: '30px' }}>视频展示</Title>
        <Row gutter={[24, 24]}>
          {videos.map(video => (
            <Col xs={24} sm={12} md={8} lg={6} key={video.id}>
              <Card
                hoverable
                cover={<img alt={video.title} src={video.thumbnail} style={{ height: '200px', objectFit: 'cover' }} />}
                actions={[
                  <PlayCircleOutlined key="play" style={{ fontSize: '24px' }} onClick={() => handleVideoClick(video)} />
                ]}
              >
                <Meta
                  title={video.title}
                  description={video.description}
                />
              </Card>
            </Col>
          ))}
        </Row>

        <Modal
          title={currentVideo?.title}
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
          width="80%"
          style={{ top: 20 }}
        >
          {currentVideo && (
            <video
              controls
              style={{ width: '100%' }}
              src={currentVideo.url}
              poster={currentVideo.thumbnail}
            />
          )}
        </Modal>
      </Content>
    </Layout>
  );
};

export default Videos;