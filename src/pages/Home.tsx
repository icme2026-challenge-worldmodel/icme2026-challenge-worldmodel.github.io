import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <div className="p-4 p-lg-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-3 py-lg-5">
          <h1 className="display-5 fw-bold">Physics-Grounded Stress Testing of World Models</h1>
          <p className="col-md-8 fs-4">ICME 2026 Grand Challenge</p>
          <Link className="btn btn-primary btn-lg" to="/submission" role="button">Register Now</Link>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <h2>Grand Challenge Description</h2>
          <p>
            World models aim to learn structured representations of environments that support prediction, simulation, and counter-factual reasoning in open-world settings. Despite significant advances in the visual fidelity of learned world models, most current approaches remain weakly grounded in physical principles, relying on statistical correlations rather than explicit modeling of dynamics. Consequently, visual realism does not guarantee physical correctness.
          </p>
          <p>
            To address this limitation, the <strong>Physics-Grounded Stress Testing of World Models</strong> challenge fosters physically valid systems for robust reasoning in safety-critical collision scenarios. The challenge evaluates compliance with core physics across three key dimensions:
          </p>
          <ul>
            <li><strong>Spatio-Temporal Consistency:</strong> Focuses on assessing the continuity of video dynamics in generated rollouts. The goal is to ensure that the movement of vehicles and objects remains geometrically consistent over time, free from visual distortions or temporal jitter that violates physical continuity.</li>
            <li><strong>Momentum and Energy Conservation:</strong> Emphasizes verifying the physical plausibility of high-impact interactions. This dimension ensures pre- versus post-impact dynamics reflect realistic energy transfer and mass interactions, rather than hallucinated trajectories driven solely by visual patterns.</li>
            <li><strong>World Dynamics Integrity:</strong> Addresses the structural logic and solidity of the simulated environment. This dimension ensures that the generated world respects solid-body mechanics and maintains coherent object permanence.</li>
          </ul>
          <p>
            By leveraging CrashBench, this challenge promotes robust, physics-grounded evaluation methodologies. Our goal is to mitigate the disparity between simulation and reality, addressing physical failures often overlooked by traditional perceptual metrics, and ultimately enhancing the planning safety and reliability of autonomous systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
