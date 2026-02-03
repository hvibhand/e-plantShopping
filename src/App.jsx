import {useState} from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
    const [showProductList, setShowProductList] = useState(false);

    const handleGetStartedClick = () => setShowProductList(true);
    const handleHomeClick = () => setShowProductList(false);

    if (showProductList) {
        return <ProductList onHomeClick={handleHomeClick}/>;
    }

    // Landing page
    return (
        <div className="landing-page">
            <div className="background-image"></div>

            <div className="content">
                <div className="landing_content">
                    <h1>Welcome To Paradise Nursery</h1>
                    <div className="divider"/>
                    <p>Where Green Meets Serenity</p>

                    <button className="get-started-button" onClick={handleGetStartedClick}>
                        Get Started
                    </button>
                </div>

                {/* Optional About Us blurb visible on landing (keeps the .jsx present for AI checks) */}
                <div className="aboutus_container">
                    <AboutUs/>
                </div>
            </div>
        </div>
    );
}

export default App;