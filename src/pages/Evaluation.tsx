import React from 'react';
import { Card } from 'react-bootstrap';

const Evaluation: React.FC = () => {
  return (
    <div>
      <h2>Evaluation Criteria</h2>
      <p className="lead">
        This challenge evaluates the model performance on the testing set of the proposed CrashBench dataset, focusing on three core dimensions.
      </p>

      <hr />

      <section className="mb-5">
        <h3>1. Spatio-Temporal Consistency</h3>
        <p>
          This dimension evaluates whether generated motion is smooth and plausible through temporal coherence and spatial rigidity.
        </p>
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Temporal Consistency (E<sub>warp</sub>)</Card.Title>
            <Card.Text>
              Measures the flow warping error to quantify how well pixels propagated by optical flow match their observations in the next frame. Lower values indicate smoother temporal coherence.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Spatial Consistency (E<sub>div</sub>)</Card.Title>
            <Card.Text>
              Measures spatial rigidity. By calculating the divergence of the velocity field, this metric penalizes unrealistic expansion or compression within the foreground. A lower score indicates better preservation of rigid-body geometry.
            </Card.Text>
          </Card.Body>
        </Card>
      </section>

      <section className="mb-5">
        <h3>2. Momentum and Energy Conservation</h3>
        <p>
          This dimension assesses whether motion transitions around impact remain consistent with vehicle dynamics and collision physics, verifying that generated behaviors follow physically plausible laws under dominant inter-vehicle impulses and negligible external forces.
        </p>
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Linear Momentum Conservation (J<sub>p</sub>)</Card.Title>
            <Card.Text>
              Measures the violation of linear momentum conservation. It calculates the normalized difference between the total momentum before and after the collision.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Angular Momentum Conservation (J<sub>H</sub>)</Card.Title>
            <Card.Text>
              Measures the violation of angular momentum conservation, ensuring rotational dynamics are consistent with the collision impulse.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Kinetic Energy Conservation (J<sub>E</sub>)</Card.Title>
            <Card.Text>
              Ensures that the total kinetic energy does not increase unrealistically during impact. Since real collisions are dissipative, this metric penalizes any unphysical energy gain (where the post-impact energy exceeds pre-impact energy).
            </Card.Text>
          </Card.Body>
        </Card>
      </section>

      <section className="mb-5">
        <h3>3. World Dynamics Integrity</h3>
        <p>
          This dimension assesses whether each instance maintains a stable identity and consistent appearance through impact, ensuring coherent behavior at the instance level.
        </p>
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>ID Stability (S<sub>ID</sub>)</Card.Title>
            <Card.Text>
              Measures the temporal persistence of tracked instances. A higher score (closer to 1) indicates that the model successfully maintains consistent object identities without fragmentation or disappearance throughout the video.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Appearance Drift (D<sub>AD</sub>)</Card.Title>
            <Card.Text>
              Quantifies the semantic visual stability of objects. It measures the angular deviation of feature embeddings (using models like CLIP/SAM2) over time. A lower score means the object's appearance remains consistent and does not morph or drift into different visual features.
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
};

export default Evaluation;
