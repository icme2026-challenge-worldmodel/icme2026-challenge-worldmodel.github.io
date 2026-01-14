import React from 'react';
import { Alert } from 'react-bootstrap';

const Submission: React.FC = () => {
  return (
    <div>
      <h2>Submission Guidelines</h2>
      <p className="lead">
        Participants are invited to submit their models and results via email.
      </p>

      <Alert variant="info">
        <Alert.Heading>How to Submit</Alert.Heading>
        <p>
          Please submit your models and results to: <a href="mailto:icme2026.challenge.worldmodel@gmail.com">icme2026.challenge.worldmodel@gmail.com</a>
        </p>
        <hr />
        <p className="mb-0">
          <strong>Subject Line:</strong> "Physics-Grounded Stress Testing of World Models"
        </p>
      </Alert>

      <h3>Awards</h3>
      <p>
        Certificates will be presented to the first, second, and third place winners. Additionally, each winner will be invited to give a brief report on their entry to the attendees.
      </p>

      <h3>Paper Submission</h3>
      <p>
         Challenge Paper Submission Deadline: <strong>May 25, 2026</strong>.
      </p>
      <p>
        The evaluation results will be published on the official website in due course.
      </p>
    </div>
  );
};

export default Submission;
