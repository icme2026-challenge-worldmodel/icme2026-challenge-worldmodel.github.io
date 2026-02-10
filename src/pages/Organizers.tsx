import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Organizers: React.FC = () => {
  const organizers = [
    {
      name: "Yufei Yin",
      role: "Associate Researcher",
      affiliation: "School of Computer Science and Technology, Hangzhou Dianzi University, China",
      bio: "Dr. Yufei Yin received the B.Eng. and Ph.D. degrees from University of Science and Technology of China, Zhejiang, China, in 2019 and 2024, respectively. He is currently an Associate Researcher with the School of Computer Science and Technology, Hangzhou Dianzi University, China. His research interests include object detection, weakly-supervised learning, spatial perception, and multimodal analysis. He has published over 10 papers in top-tier journals and conferences, including ICCV, AAAI, TMM, and IJCAI. Additionally, he has served as a reviewer for premier venues such as CVPR, ICCV, AAAI, TMM, and TCSVT.",
      email: "yinyf@hdu.edu.cn"
    },
    {
      name: "Zhiwen Fan",
      role: "Assistant Professor",
      affiliation: "Department of Electrical and Computer Engineering, Texas A&M University",
      bio: "Dr. Zhiwen Fan's research focuses on Computer Vision, Generative Models, and Robotic Perception. His work was recognized as Best Paper Award at ACM MM 2025's Multimodal Foundation Models for Spatial Intelligence Workshop; Best Paper Award at CVPR 2025's AI for Content Creation Workshop; Qualcomm Innovation Fellowship (North America) 2022; 3rd Place in University Demo Best Demonstration at DAC 2022; and 3rd Place in the ICCV 2025 COGS Challenge for Compact 3D Representation. He has served as an Area Chair for ICLR 2025, NeurIPS 2025, and ICASSP 2026, an Associate Editor for IEEE TCSVT, and an organizer of the E2E3D Learning workshop at ICCV 2025.",
      email: "zhiwenfan@utexas.edu"
    },
    {
      name: "Wei Ji",
      role: "Associate Professor",
      affiliation: "School of Intelligent Science and Technology, Nanjing University",
      bio: "Dr. Wei Ji is a tenure-track Associate Professor and Ph.D. supervisor at the School of Intelligent Science and Technology, Nanjing University. He received his Ph.D. degree in Computer Science from Zhejiang University and then conducted postdoctoral research at the National University of Singapore, focusing on multimodal learning, under the supervision of Prof. Tat-Seng Chua and Prof. Roger Zimmermann. His research interests include multimodal understanding and generation, multimodal retrieval and recommendation, and multimodal pretrained models. He has published over 90 papers in leading journals and conferences, including TPAMI, TIP, ICML, NeurIPS, ICLR, CVPR, ICCV, and ACL, with more than 4,600 citations on Google Scholar. He is the recipient of the CVPR 2022 Best Paper Candidate Award and the 2024 World Artificial Intelligence Conference (WAIC) Young Outstanding Paper Award. He has served as Area Chair for NeurIPS, ICLR, CVPR, IJCAI, and ACM Multimedia, as Associate Editor for IEEE TIP, IEEE TCSVT, Pattern Recognition, ACM TOMM, and as Local Chair for EMNLP 2025 and Publicity Chair for ACM Multimedia 2025.",
      email: "weiji@nju.edu.cn"
    },
    {
      name: "Zhou Yu",
      role: "Full Professor",
      affiliation: "School of Computer Science and Technology, Hangzhou Dianzi University, China",
      bio: "Dr. Zhou Yu received the BEng and PhD degrees from Zhejiang University, China, in 2010 and 2015, respectively. He is currently a full professor with the School of Computer Science and Technology, Hangzhou Dianzi University, China. His research interests include multimodal analysis, visual question answering, large visual-language models, and efficient AI. He has authored and co-authored more than 60 scientific articles, with more than 5700 citations on Google Scholar. He has also served as an area chair and (senior) program committee members for top conferences such as AAAI, IJCAI, CVPR, ICCV, PRCV, and has also been invited reviewers for journals such as IEEE Transactions on PAMI, MM, CSVT.",
      email: "yuz@hdu.edu.cn"
    },
    {
      role: "Professor",
      affiliation: "University of Science and Technology of China",
      bio: "Dr. Jiajun Deng is a tenure-track Associate Professor at the University of Science and Technology of China. He received his B.Eng. degree in 2016 and his Ph.D. degree in 2021 from the same institution. His research interests lie in multimodal understanding, spatial intelligence, and embodied AI, with sustained contributions to 3D object detection, vision–language understanding, and multi-sensor fusion. He has published over 50 high-quality papers in leading venues, including IEEE TPAMI, NeurIPS, CVPR, ICCV, and ECCV. He was recognized in the 2024 and 2025 Stanford University & Elsevier list of the \"World's Top 2% Scientists,\" and was awarded the WAIC Yunfan Award \"Rising Star\" Runner-up. Dr. Deng has served as an Area Chair for ACM Multimedia 2024 and 2025, as well as ICASSP 2025 and 2026, and as a Guest Editor for IEEE Transactions on Multimedia. He has also organized multiple workshops at major international conferences, including ICCV and ACM Multimedia.",
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
