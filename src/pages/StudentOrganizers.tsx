import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const StudentOrganizers: React.FC = () => {
  const students = [
    {
      name: "Nuo Chen",
      role: "Ph.D. Student",
      affiliation: "Department of Electrical and Computer Engineering, Texas A&M University, USA",
      bio: "Nuo Chen received the B.Eng. degree in Software Engineering from Chongqing University and the M.Sc. degree in Computer Engineering from New York University. He is currently a Ph.D. student with the Department of Electrical and Computer Engineering, Texas A&M University, advised by Prof. Zhiwen Fan. His research interests include 3D generative models and 3D vision-language models. He has published papers in leading conferences, including CVPR, IROS, and ACM Multimedia. Additionally, he has served as a reviewer for premier venues such as ICML, NeurIPS, ICLR, AAAI, and ACM Multimedia.",
      email: "nuochen@tamu.edu"
    },
    {
      name: "Qianke Meng",
      role: "Master's Student",
      affiliation: "School of Computer Science and Technology, Hangzhou Dianzi University, China",

      bio: "Qianke Meng received the B.Eng. degree in Computer Science and Technology from Henan University in 2024. He is currently a Master's student with the School of Computer Science and Technology, Hangzhou Dianzi University, China. His research interests include multimodal large models, agents, and video question answering, with an emphasis on vision-language generative intelligence. He has published a paper on agentic reasoning with hierarchical memory for long-form video understanding, and received the National First Prize in the China Graduate Mathematical Modeling Contest.",
      email: "mengqianke1@gmail.com"
    }
  ];

  return (
    <div>
      <h2 className="mb-4">Student Organizers</h2>
      <Row>
        {students.map((s, index) => (
          <Col xs={12} lg={6} className="mb-4" key={index}>
            <Card className="h-100">
              <Card.Header as="h5">{s.name}</Card.Header>
              <Card.Body>
                <Card.Title>{s.role}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{s.affiliation}</Card.Subtitle>
                <Card.Text>{s.bio}</Card.Text>
                <Card.Link href={`mailto:${s.email}`}>Contact: {s.email}</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StudentOrganizers;
