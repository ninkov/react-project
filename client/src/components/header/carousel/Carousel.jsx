export default function Carousel(){
 return (
    
    <div className="container-fluid p-0">
    <div id="header-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="w-100" src="img/carousel-1.jpg" alt="Image"/>
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3"  style={{maxWidth: "900px"}}>
                        {/* <h3 className="text-white mb-3 d-none d-sm-block">Best Pet Services</h3> */}
                        <h1 className="display-3 text-white mb-3">Keep Your Pet Happy</h1>
                        {/* <h5 className="text-white mb-3 d-none d-sm-block">Duo nonumy et dolor tempor no et. Diam sit diam sit diam erat</h5> */}
                        {/* <a href="" className="btn btn-lg btn-primary mt-3 mt-md-4 px-4">Book Now</a>
                        <a href="" className="btn btn-lg btn-secondary mt-3 mt-md-4 px-4">Learn More</a> */}
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <img className="w-100" src="img/carousel-2.jpg" alt="Image"/>
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{maxWidth: "900px"}}>
                        {/* <h3 className="text-white mb-3 d-none d-sm-block">Best Pet Services</h3> */}
                        <h1 className="display-3 text-white mb-3">Pet Spa & Grooming</h1>
                        {/* <h5 className="text-white mb-3 d-none d-sm-block">Duo nonumy et dolor tempor no et. Diam sit diam sit diam erat</h5> */}
                        {/* <a href="" className="btn btn-lg btn-primary mt-3 mt-md-4 px-4">Book Now</a>
                        <a href="" className="btn btn-lg btn-secondary mt-3 mt-md-4 px-4">Learn More</a> */}
                    </div>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
            <div className="btn btn-primary rounded" style={{width: "45px", height: "45px"}}>
                <span className="carousel-control-prev-icon mb-n2"></span>
            </div>
        </a>
        <a className="carousel-control-next" href="#header-carousel" data-slide="next">
            <div className="btn btn-primary rounded" style={{width: "45px", height: "45px"}}>
                <span className="carousel-control-next-icon mb-n2"></span>
            </div>
        </a>
    </div>
</div>
    );
}