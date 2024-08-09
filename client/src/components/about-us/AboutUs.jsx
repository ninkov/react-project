import Features from "./features/Features";
import OurTeam from "./our-team/OurTeam";

export default function AboutUs() {
  return (
    <div className="container py-5">
      <div className="row py-5">
        <div className="col-lg-7 pb-5 pb-lg-0 px-3 px-lg-5">
          <h4 className="text-secondary mb-3">About Us</h4>
          <h1 className="display-4 mb-4">
            <span className="text-primary">Pet</span> &{" "}
            <span className="text-secondary">Grooming</span>
          </h1>
          <h5 className="text-muted mb-3">Introduction:</h5>
          <p className="mb-4">
            Our dedicated team of pet groomers is committed to providing the
            highest quality care and services for your beloved pets. We
            understand that your furry friends are more than just pets; they're
            family members who deserve the best possible treatment. Our
            experienced professionals will ensure that your pet receives a
            comfortable, stress-free, and enjoyable grooming experience.
          </p>
          <h5 className="text-muted mb-3">Services Offered:</h5>
          <p className="mb-4">
            <ul>
              <li>
                {" "}
                Bathing and Shampooing: We use high-quality shampoos and
                conditioners to cleanse your pet's coat, removing dirt, grime,
                and excess oils. This helps maintain a healthy skin and coat.
              </li>
              <li>
                {" "}
                Haircutting and Trimming: Our skilled groomers will give your
                pet a stylish haircut or trim, ensuring that their coat remains
                manageable and easy to maintain at home.
              </li>
              <li>
                Nail Trimming: Long nails can cause discomfort and even injury
                to your pet. Our team will carefully trim your pet's nails to
                prevent any issues.
              </li>
              <li>
                Ear Cleaning: Regular ear cleaning is essential for maintaining
                your pet's overall health. Our groomers will clean and inspect
                your pet's ears to ensure there are no signs of infection or
                parasites.
              </li>
              <li>
                Anal Gland Expression: Some pets require this service to prevent
                discomfort and potential health problems. Our team has the
                necessary skills and experience to express anal glands safely
                and efficiently.
              </li>
              <li>
                Teeth Cleaning: Good dental hygiene is crucial for your pet's
                overall well-being. We offer teeth cleaning services using
                specialized equipment and products to remove plaque and tartar.
              </li>
            </ul>
          </p>
          <ul className="list-inline">
            <li>
              <h5>
                <i className="fa fa-check-double text-secondary mr-3"></i>Best
                In Industry
              </h5>
            </li>
            <li>
              <h5>
                <i className="fa fa-check-double text-secondary mr-3"></i>
                Emergency Services
              </h5>
            </li>
            <li>
              <h5>
                <i className="fa fa-check-double text-secondary mr-3"></i>24/7
                Customer Support
              </h5>
            </li>
          </ul>
         
        </div>
        <div className="col-lg-5">
          <div className="row px-3">
            <div className="col-12 p-0">
              <img className="img-fluid w-100" src="img/about-1.jpg" alt="" />
            </div>
            <div className="col-6 p-0">
              <img className="img-fluid w-100" src="img/about-2.jpg" alt="" />
            </div>
            <div className="col-6 p-0">
              <img className="img-fluid w-100" src="img/about-3.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Features />
      <OurTeam />
    </div>
  );
}
