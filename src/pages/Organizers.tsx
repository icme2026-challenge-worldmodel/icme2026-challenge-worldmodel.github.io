import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Organizers: React.FC = () => {
  const organizers = [
    {
      name: "Yufei Yin",
      role: "Associate Researcher",
      affiliation: "School of Computer Science and Technology, Hangzhou Dianzi University, China",
      bio: "Dr. Yufei Yin received the B.Eng. and Ph.D. degrees from University of Science and Technology of China, Zhejiang, China, in 2019 and 2024, respectively. His research interests include object detection, weakly-supervised learning, spatial perception, and multimodal analysis. He has published over 10 papers in top-tier journals and conferences, including ICCV, AAAI, TMM, and IJCAI.",
      email: "yinyf@hdu.edu.cn"
    },
    {
      name: "Zhiwen Fan",
      role: "Assistant Professor",
      affiliation: "Department of Electrical and Computer Engineering, Texas A&M University",
      bio: "Dr. Zhiwen Fan's research focuses on Computer Vision, Generative Models, and Robotic Perception. His work was recognized as Best Paper Award at ACM MM 2025’s Multimodal Foundation Models for Spatial Intelligence Workshop, CVPR 2025’s AI for Content Creation Workshop, and he received the Qualcomm Innovation Fellowship (North America) 2022.",
      email: "zhiwenfan@utexas.edu"
    },
    {
      name: "Wei Ji",
      role: "Associate Professor",
      affiliation: "School of Intelligent Science and Technology, Nanjing University",
      bio: "Dr. Wei Ji received his Ph.D. degree in Computer Science from Zhejiang University and conducted postdoctoral research at the National University of Singapore. His research interests include multimodal understanding and generation, multimodal retrieval and recommendation, and multimodal pretrained models. He has published over 90 papers in leading journals and conferences.",
      email: "weiji@nju.edu.cn"
    },
    {
      name: "Zhou Yu",
      role: "Full Professor",
      affiliation: "School of Computer Science and Technology, Hangzhou Dianzi University, China",
      bio: "Dr. Zhou Yu received the BEng and PhD degrees from Zhejiang University. His research interests include multimodal analysis, visual question answering, large visual-language models, and efficient AI. He has authored and co-authored more than 60 scientific articles, with more than 5700 citations on Google Scholar.",
      email: "yuz@hdu.edu.cn"
    },
    {
      name: "Jiajun Deng",
      role: "Associate Professor",
      affiliation: "University of Science and Technology of China",
      bio: "Dr. Jiajun Deng received his Ph.D. degree in 2021 from the University of Science and Technology of China. His research interests lie in multimodal understanding, spatial intelligence, and embodied AI. He has published over 50 high-quality papers in leading venues including IEEE TPAMI, NeurIPS, CVPR, ICCV, and ECCV.",
      email: "dengjj@ustc.edu.cn"
    }
  ];

  return (
    <div>
      <h2 className="mb-4">Organizers</h2>
      <Row>
        {organizers.map((org, index) => (
          <Col xs={12} lg={6} className="mb-4" key={index}>
            <Card className="h-100">
              <Card.Header as="h5">{org.name}</Card.Header>
              <Card.Body>
                <Card.Title>{org.role}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{org.affiliation}</Card.Subtitle>
                <Card.Text>
                  {org.bio}
                </Card.Text>
                <Card.Link href={`mailto:${org.email}`}>Contact: {org.email}</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Organizers;
