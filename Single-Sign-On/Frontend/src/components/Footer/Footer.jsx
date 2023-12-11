
import './footer.css';
// import { Footer } from 'flowbite-react';
import React, { useState } from 'react';


const FooterPage = () => {
    const [customAmount, setCustomAmount] = useState('');
    const [donationAmount, setDonationAmount] = useState('');

    const handleAmountClick = (amount) => {
        setDonationAmount(amount);
        setCustomAmount(amount.toString()); // Update the input box with the selected amount
    };

    const handleDonate = () => {
        // Perform donation logic here with the donationAmount value
        console.log(`Donating: ${donationAmount}`);
        console.log(`Donating: ${customAmount}`);
        // Reset donation amount and custom amount
        setDonationAmount('');
        setCustomAmount('');
    };

    return (
        <footer container>
            <div className="footer-container">
                <div className="what-we-do">
                    <h4>What We Do</h4>
                    <ul>
                        <li>
                            <a href="/faq">How food banks work</a>
                        </li>
                        <li>
                            <a href="/support">Additional support</a>
                        </li>
                        <li>
                            <a href="/support">Research and advocacy</a>
                        </li>
                        <li>
                            <a href="/support">Real Stories</a>
                        </li>
                        <li>
                            <a href="/support">Shops</a>
                        </li>
                    </ul>
                </div>
                <div className="item">
                    <h4>Get Help</h4>
                    <ul>
                        <li>
                            <a href="/faq">Find a food bank</a>
                        </li>
                        <li>
                            <a href="/support">Emergency Food</a>
                        </li>
                        <li>
                            <a href="/support">Helpline</a>
                        </li>
                        <li>
                            <a href="/support">Benefits calculator</a>
                        </li>
                        <li>
                            <a href="/support">Grants search</a>
                        </li>
                    </ul>
                </div>

                <div className="item1">
                    <h4>Get Involved</h4>
                    <ul>
                        <li>
                            <a href="/faq">Ways to Give</a>
                        </li>
                        <li>
                            <a href="/support">Fundraise</a>
                        </li>
                        <li>
                            <a href="/support">Volunteer</a>
                        </li>
                        <li>
                            <a href="/support">Campaigns</a>
                        </li>
                        <li>
                            <a href="/support">Church support</a>
                        </li>
                        <li>
                            <a href="/support">Corporate Partners</a>
                        </li>
                        <li>
                            <a href="/support">Funding Partners</a>
                        </li>
                        <li>
                            <a href="/support">Philanthropy</a>
                        </li>
                        <li>
                            <a href="/support">Start a food bank</a>
                        </li>
                        <li>
                            <a href="/support">The Trussell Trust retail
                            </a>
                        </li>
                        <li>
                            <a href="/support">Tesco Food Collection</a>
                        </li>
                    </ul>
                </div>

                <div className="item2">
                    <h4>About</h4>
                    <ul>
                        <li>
                            <a href="/faq">Our story</a>
                        </li>
                        <li>
                            <a href="/support">Our strategic plan</a>
                        </li>
                        <li>
                            <a href="/support">Our Impact</a>
                        </li>
                        <li>
                            <a href="/support">Vision and Values</a>
                        </li>
                        <li>
                            <a href="/support">Equity, Diversity and Inclusion   </a>
                        </li>
                        <li>
                            <a href="/support">Jobs</a>
                        </li>
                        <li>
                            <a href="/support">Press & Media</a>
                        </li>
                        <li>
                            <a href="/support">Supporter Promise</a>
                        </li>
                        <li>
                            <a href="/support">Annual Reports</a>
                        </li>
                        <li>
                            <a href="/support">Ethical Sourcing</a>
                        </li>
                        <li>
                            <a href="/support">Prompt Payment Terms</a>
                        </li>
                        <li>
                            <a href="/support">New Supplier Application Form</a>
                        </li>
                    </ul>
                </div>
                <div className="donate-section">
                    <h5>Help us stop UK hunger</h5>
                    <div>
                        {/* Buttons for predefined amounts */}
                        <button onClick={() => handleAmountClick(10)}>£10</button>
                        <button onClick={() => handleAmountClick(20)}>£20</button>
                        <button onClick={() => handleAmountClick(50)}>£50</button>

                        {/* Input for custom amount */}
                        <input
                            type="text"
                            placeholder="Enter amount"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                        />

                        {/* Donate button */}
                        <button type="submit" onClick={handleDonate}>Donate</button>
                    </div>
                </div>
                <div className='item3'>
                    <h6><a href="/faq">Sitemap</a></h6>
                    <h6><a href="/faq">Privacy Policy</a></h6>
                    <h6><a href="/faq">Make a Complaint</a></h6>
                    <h6><a href="/faq">Customer Service Policy</a></h6>
                </div>
            </div>
        </footer>
    );
}
export default FooterPage;
