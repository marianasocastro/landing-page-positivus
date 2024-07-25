import './Cards.scss'

let services = [
    { name: "Search engine optimization", image: require('../../assets/illustrations/Illustration_search engine.png'), className: "card-grey" },
    { name: "Pay-per-click advertising", image: require('../../assets/illustrations/Illustration_pay per click.png'), className: "card-green" },
    { name: "Social Media Marketing", image: require('../../assets/illustrations/Illustration_social media.png'), className: "card-black-with-grey" },
    { name: "Email Marketing", image: require('../../assets/illustrations/Illustration_email.png'), className: "card-grey" },
    { name: "Content Creation", image: require('../../assets/illustrations/Illustration_content.png'), className: "card-green" },
    { name: "Analytics and Tracking", image: require('../../assets/illustrations/Illustration_analytcs.png'), className: "card-black-with-green" }
]

function Cards(){
    return (
        <div className='container cards'>
            {services.map((service, index) => (
                <div className={service.className} key={index}>
                    <div className='card-inner'>
                        <div className='card-text'>
                        <h3 className='text-h3'>{service.name}</h3> 
                        <div className='card-btn'>
                            <i className="fi fi-ss-arrow-up-right"></i>
                            <span className='paragraph'>Learn more</span>
                        </div>
                        </div>
                        <div className='card-img'>
                            <img src={service.image} alt={service.name} />
                        </div>
                        
                    </div>
                </div>
            ))}
            
        </div>
    )
}


export default Cards;