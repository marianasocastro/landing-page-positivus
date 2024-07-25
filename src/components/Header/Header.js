import Navbar from '../../components/Navbar/Navbar'
import illustration from '../../assets/illustrations/Illustration_header.png'
import './Header.scss'

let companies = [
    { name: "Amazon logo", image: require('../../assets/companies_logo/logo_amazon.png') },
    { name: "Dribbble", image: require('../../assets/companies_logo/logo_dribbble.png') },
    { name: "HubSpot", image: require('../../assets/companies_logo/logo_hubspot.png') },
    { name: "Netflix", image: require('../../assets/companies_logo/logo_netflix.png') },
    { name: "Notion", image: require('../../assets/companies_logo/logo_notion.png') },
    { name: "Zoom", image: require('../../assets/companies_logo/logo_zoom.png') }
]

function Header(){
    return (
        <header>
            <Navbar/>
            <div className='container header-section'>
                <div className='header-text'>
                    <h1 className='text-h1'>Navigating the digital landscape for success</h1>
                    <p className='paragraph'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                    <button className='btn-primary'>Book a consultation</button>
                </div>
                <div className='header-img'>
                    <img src={illustration} alt="illustration header" />
                </div>
            </div>
            <div className='companies-div container'>
                {companies.map((company, index) => (
                    <img key={index} src={company.image} alt={company.name} />
                ))}
            </div>

        </header>
    )
}

export default Header;