import React from 'react';
import { Table } from 'react-bootstrap';

const Schedule: React.FC = () => {
  return (
    <div>
      <h2>Challenge Timeline</h2>
      <p>The challenge timeline is as follows (Year 2026):</p>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>Event</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Registration Open</td>
            <td>February 01, 2026</td>
          </tr>
          <tr>
            <td>Training Data Release</td>
            <td>February 15, 2026</td>
          </tr>
          <tr>
            <td>Challenge Result Submission Deadline</td>
            <td>April 01, 2026</td>
          </tr>
          <tr>
            <td>Leaderboard Release</td>
            <td>May 15, 2026</td>
          </tr>
          <tr>
            <td>Challenge Paper Submission Deadline</td>
            <td>May 25, 2026</td>
          </tr>
        </tbody>
      </Table>
      <p className="text-muted small">* All dates are subject to change. Please check the website regularly for updates.</p>
    </div>
  );
};

export default Schedule;
