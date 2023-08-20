import React from 'react';

export default function Vendor() {
  const data = [
    { name: 'Ashok', amount: '100', reward: '10' },
    { name: 'Amit', amount: '200', reward: '20' },
    { name: 'Sarthak', amount: '300', reward: '30' },
    { name: 'Rashmi', amount: '400', reward: '40' },
    { name: 'Amaira', amount: '500', reward: '50' },
    { name: 'Radhika', amount: '250', reward: '25' },
  ];

  return (
    <div>

<div className="row">
        <div className="col-6 col-sm-6 d-flex justify-content-center">
          <ul className="list-group">
            <li className="list-group-item active" aria-current="true">
              <i className="fa-solid fa-coins gold-icon"></i> Token Balance
            </li>
            <li className="list-group-item">1000</li>
            </ul>
            </div>


            <div className="col-6 col-sm-6 d-flex justify-content-center">
            <ul className="list-group">
            <li className="list-group-item active" aria-current="true">
              <i className="fa-solid fa-wallet brown-wallet"></i>Public Wallet Address
            </li>
            <li className="list-group-item">HBDFG2672VGG33433TVHVH23F34</li>
            </ul>
          </div>

          </div>
        {/* Force next columns to break to new line at md breakpoint and up */}
        < div className="w-100 d-none d-md-block" style={{marginTop:50}} />
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-3">
              <div className="card-header bg-primary text-white">
                <i className="fa-solid fa-coins gold-icon"></i> Token Transfer
              </div>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Purchase Amount: {item.amount}</p>
                <p className="card-text">Token Reward: {item.reward}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
