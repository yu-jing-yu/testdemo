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
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Title level={1} style={{ marginBottom: '30px' }}>产品专家签约集锦</Title>
        </div>
        
        <div style={{ marginBottom: '30px', textAlign: 'center' }}>
          <video
            controls
            style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }}
            src="/src/assets/234_1744177163.mp4"
          />
          <Link to="/videos">
            <Typography.Paragraph
              style={{ fontSize: '18px', cursor: 'pointer', color: '#1890ff' }}
            >
              点击观看更多精彩视频案例 →
            </Typography.Paragraph>
          </Link>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <Typography.Paragraph style={{ fontSize: '18px', lineHeight: '2', textAlign: 'left', marginBottom: '16px' }}>
            圣原每一款产品都出名医名方，都是千锤百炼，在三甲医院工作30多年，临床验证30多年，30多年以上方子经过无数人验证，安全有效，才能和圣原签约。
          </Typography.Paragraph>

          <Typography.Paragraph style={{ fontSize: '18px', lineHeight: '2', textAlign: 'left', marginBottom: '16px' }}>
            圣原就是打造中国中医药大健康大目录，把名医名方产业化了，再也不用熬药，煎药，煮药了，通过高科技萃取突破了水包油技术，让老百姓在家里通过互联网平台，就能把名医名方请回家，通过外用简单涂抹，用体验，体验，再体验方式，快速安全有效，解决老百姓看病难，挂名医号难，看病贵的问题。
          </Typography.Paragraph>

          <Typography.Paragraph style={{ fontSize: '18px', lineHeight: '2', textAlign: 'left', marginBottom: '16px' }}>
            未来老百姓最关注的就是健康，所以今天我们能有这样缘分，这样福报，结缘圣原，名医名方，是何等有福气，来到这里才是人生真正修行道场，因为每天去帮助老百姓解决实质疾苦，给人送健康，自己健康，家人们健康是我们最大幸福。
          </Typography.Paragraph>

          <Typography.Paragraph style={{ fontSize: '18px', lineHeight: '2', textAlign: 'left', marginBottom: '16px' }}>
            人这一生来到这个世界上，都是有责任和使命的，有幸在圣原这个平台上，每天去帮助更多人获得健康，真的是给自己累积福报，让我们孩子厚德载物，同时让我的晚年更有价值，让人生更有价值。
          </Typography.Paragraph>

          <Typography.Paragraph style={{ fontSize: '18px', lineHeight: '2', textAlign: 'left', marginBottom: '16px' }}>
            同时让我最大的收获就是给我的父母送去了健康，因为孝顺父母不能等，百善孝当先，大孝者，必大成，名医名方真正能给老人带来福音，让我们也能有一个孝顺父母机会，用我们双手亲自给父母去涂抹，给我们儿女做榜样积力量。
          </Typography.Paragraph>

          <Typography.Paragraph style={{ fontSize: '18px', lineHeight: '2', textAlign: 'left', marginBottom: '16px' }}>
            这是一个功在当代，利在外千秋善事，关乎中国以及世界人民的健康，符合当下老百姓以及国家趋势，大健康产业，未来5-10年正式崛起的高峰。你遇到了中国国粹，老祖宗留下的五千年中医药文化复兴，是做一件中国传统文化的传承，做一件能帮助他人的事业，产品会说话，不伤人脉，广结善缘，留德行给子孙的事业，是今生最大修行。
          </Typography.Paragraph>
        </div>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={12} md={8}>
            <Link to="/videos">
              <Card hoverable>
                <VideoCameraOutlined style={{ fontSize: '48px', color: '#1890ff' }} />
                <Title level={3} style={{ marginTop: '16px' }}>视频案例</Title>
              </Card>
            </Link>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Link to="/photos">
              <Card hoverable>
                <PictureOutlined style={{ fontSize: '48px', color: '#52c41a' }} />
                <Title level={3} style={{ marginTop: '16px' }}>图片案例</Title>
              </Card>
            </Link>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Home;