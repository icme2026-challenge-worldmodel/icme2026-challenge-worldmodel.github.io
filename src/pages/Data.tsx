import React from 'react';

const Data: React.FC = () => {
  return (
    <div>
      <h2>Data: CrashBench</h2>
      <p className="lead">
        To support this challenge, we introduce <strong>CrashBench</strong>, a benchmark designed to evaluate collision understanding in world models across both controllable and uncalibrated in-the-wild scenarios.
      </p>

      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-header bg-primary text-white">
              Dataset Statistics
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><strong>Total Clips:</strong> 37,000+</li>
              <li className="list-group-item"><strong>Synthetic Clips:</strong> 25,000</li>
              <li className="list-group-item"><strong>Real-world Clips:</strong> 12,000</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card h-100">
             <div className="card-body">
              <h5 className="card-title">Detailed Composition</h5>
              <p className="card-text">
                 <strong>Synthetic Subset:</strong> Encompasses seven representative intersection typologies with varied approach angles, geometries, and environmental conditions.
              </p>
              <p className="card-text">
                 <strong>Real-world Subset:</strong> Consists of 12,000 curated clips from diverse environments, each temporally centered on the impact and annotated with motion and contextual metadata.
              </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
