import React from "react";

export default function Details() {
  return (
    <div className="details">
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
        <div className="w-100 d-none d-md-block" style={{marginTop:50}} />

        {/* <div className="col-4 col-sm-4 d-flex justify-content-center">
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
        </div> */}
<div className="row">
<div className="col-4 col-sm-4 d-flex justify-content-center">
        <div className="card" style={{ width: "18rem" }}>
          <div style={{ position: "relative", paddingBottom: "70%" }}>
            {/* Use a relative wrapper with padding-bottom to control image size */}
            <img
              src="https://biplus.com.vn/wp-content/uploads/2022/11/What-does-P2P-mean-in-banking.png"
              className="card-img-top"
              alt="..."
              style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <h5 className="card-title">Send to a friend</h5>
              <p className="card-text">
              Directly transfer the token from your wallet to Friend's Wallet.
              </p>
            </div>
            <a href="/" className="btn btn-primary">
              Send
            </a>
          </div>
        </div>
      </div>


              <div className="col-4 col-sm-4 d-flex justify-content-center">
        <div className="card" style={{ width: "18rem" }}>
          <div style={{ position: "relative", paddingBottom: "70%" }}>
            {/* Use a relative wrapper with padding-bottom to control image size */}
            <img
              src="https://pyjamahr.com/wp-content/uploads/2022/09/Employee-referral-PyjamaHR.png"
              className="card-img-top"
              alt="..."
              style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <h5 className="card-title">Earn Tokens</h5>
              <p className="card-text">
              Share a picture with the purchased product with{" "}
              <span className="blue-text">#boughtonFlipkart</span> on  your Socials, to earn Tokens as rewards.
              </p>

            </div>
            <a href="/" className="btn btn-primary">
              Refer
            </a>
          </div>
        </div>
      </div>


        {/* <div className="w-100 d-none d-md-block" style={{marginTop:50}} /> */}
        {/* <div className="col-4 col-sm-4 d-flex justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <img src="https://cdn-icons-png.flaticon.com/512/7023/7023592.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">View Transaction History</h5>
              <p className="card-text">
                View Transaction History of Tokens.
              </p>
              <a href="/" className="btn btn-primary">
                Transfer
              </a>
            </div>
          </div>
        </div> */}

<div className="col-4 col-sm-4 d-flex justify-content-center">
        <div className="card" style={{ width: "18rem" }}>
          <div style={{ position: "relative", paddingBottom: "70%" }}>
            {/* Use a relative wrapper with padding-bottom to control image size */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/7023/7023592.png"
              className="card-img-top"
              alt="..."
              style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <h5 className="card-title"> View Transaction History</h5>
              <p className="card-text">
              You can access records of all the previous transaction you made till date.
              </p>
            </div>
            <a href="/" className="btn btn-primary">
              View History
            </a>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}
