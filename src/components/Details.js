import React from "react";

export default function Details() {
  return (
    <div className="details">
      <div className="row">
        <div className="col-12 col-sm-12 d-flex justify-content-center">
          <ul className="list-group">
            <li className="list-group-item active" aria-current="true">
              <i className="fa-solid fa-coins"></i>Super Token Balance :-
            </li>
            <li className="list-group-item">1000</li>
            <li className="list-group-item active" aria-current="true">
              <i className="fa-solid fa-wallet"></i>Public Wallet Address
            </li>
            <li className="list-group-item">HBDFG2672VGG33433TVHVH23F34</li>
          </ul>
        </div>
        {/* Force next columns to break to new line at md breakpoint and up */}
        <div className="w-100 d-none d-md-block" style={{marginTop:50}} />
        <div className="col-6 col-sm-6 d-flex justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <img src="https://biplus.com.vn/wp-content/uploads/2022/11/What-does-P2P-mean-in-banking.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Send to Friend</h5>
              <p className="card-text">
                Directly transfer the token from your wallet to Friend's Wallet.
              </p>
              <a href="/" className="btn btn-primary">
                Transfer
              </a>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-6 d-flex justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <img src="https://pyjamahr.com/wp-content/uploads/2022/09/Employee-referral-PyjamaHR.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Refer the friend</h5>
              <p className="card-text">
                Refer the friend to earn the Flipkart Tokens as Reward
              </p>
              <a href="/" className="btn btn-primary">
                Refer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
