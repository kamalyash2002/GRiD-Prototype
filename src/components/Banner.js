import React from "react";

export default function Banner() {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active img-carosel">
            <img src="https://bitcoinist.com/wp-content/uploads/2020/08/Exchange-Referral-Program_static_Static.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://uploads-ssl.webflow.com/6063626728ce7dfd0c61a317/62258ec1d123ca11ec2eeb2c_Hodlnaut-Resources-Referral-Program-Explained.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://bitcoinist.com/wp-content/uploads/2020/08/Exchange-Referral-Program_static_Static.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}





// import React from "react";

// export default function Banner() {
//   return (
//     <div>


//     <div>Exciting Rewards for you <button type="button" class="btn btn-primary">View Claimed Rewards</button></div>






//     </div>
//   );
// }
