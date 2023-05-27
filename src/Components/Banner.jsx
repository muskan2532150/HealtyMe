import banner from "../assets/banner-image.webp";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-details">
        <h1>
          BREAK <br /> YOUR <br /> LIMITS
        </h1>
        <p>
          Shop for Quality Fitness Equipments, Supplements and Accessories at
          best prices and discounts.
        </p>
        <a href="/products">
          <button className="btn">Shop Now</button>
        </a>
      </div>
      <div className="banner-img-container">
        <img className="banner-img img-responsive" src={banner} alt="Image" />
      </div>
    </div>
  );
};

export default Banner;
