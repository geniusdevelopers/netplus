import React from "react";
import { Link } from "react-router-dom";

import "./Donation.css";
import '../All.css'
import AnonymousModal from "./AnonymousModal";
import NavBar from "../NavBar/NavBar";


import { MdOutlineArrowDropDownCircle } from 'react-icons/md';
import SponsorRegister from "./SponsorRegister";
import LogInForm from "../LogIn/LogInForm";

function Donation(props) {
    return (
        <div className="Donation">
            <h1>Hope in humanity</h1>
            <h3>Help bring back hope to the less fortunate</h3>
            <div className="click-to-donate-link-holder">
                <button to={'/'} className="click-to-donate-link" onClick={() => { <><AnonymousModal /><NavBar /></> }}>Anonymous Donation</button>
                <Link to={'/'} className="click-to-donate-link">Log In To Donate</Link>
                <Link to={'/'} className="click-to-donate-link">Register To Donate</Link>
            </div>
            <div>
                <div className="expand-doner-header">
                    <MdOutlineArrowDropDownCircle className="arrow-dowm" />
                </div>

                <div>
                    <SponsorRegister />
                </div>

                <div>
                    <LogInForm/>
                </div>
            </div>
        </div>
    )
}

export default Donation;
