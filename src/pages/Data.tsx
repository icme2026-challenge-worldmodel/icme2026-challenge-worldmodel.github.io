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
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">📥 Download: CrashTwin Dataset</h5>
            </div>
            <div className="card-body">
              <p>
                The CrashTwin dataset is publicly available on Hugging Face. It is distributed as a single tar archive split into 46 <code>.zst</code> compressed parts (~500 GB total).
              </p>
              <p>
                <a
                  href="https://huggingface.co/datasets/nnuochen/crashtwin_data"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success btn-lg"
                >
                  🤗 Download from Hugging Face
                </a>
              </p>

              <h6 className="mt-4">Quick Start</h6>
              <pre className="bg-light p-3 rounded"><code>{`# 1. Install Git LFS
git lfs install

# 2. Clone the dataset repository
git clone https://huggingface.co/datasets/nnuochen/crashtwin_data
cd crashtwin_data
git lfs pull

# 3. Restore the dataset
mkdir -p crashtwin_data
cat crashtwin_data.tar.part_*.zst | zstd -dc -T0 | tar -xvf - -C crashtwin_data`}</code></pre>

              <h6 className="mt-3">Requirements</h6>
              <ul>
                <li><code>git-lfs</code></li>
                <li><code>zstd</code></li>
                <li><code>tar</code></li>
                <li>Sufficient disk space (~500 GB)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
