import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./HeaderFooter/Header";
import Footer from "./HeaderFooter/Footer"

import Home from "./Home";
import OrgReview from './OrgReview/OrgReview'
import OrgStructure from './OrgStructure/OrgStructure'
import Membership from './Membership/Membership'
import Projects from './Projects/Projects'
import Notice from './Notices/Notice'
import DevTeam from './DevTeam/DevTeam'
import Blogg from './Bloggs/Blogg'
import Conference from './Conferences/Conference'
import Achievement from './Achievement/Achievement'
import Gallery from './Gallery/Gallery'
import Career from './Career/Career'
import Contact from './Contact/Contact'

import Sponsor from "./Sponsor/Sponsor";
import NavBar from "./NavBar/NavBar";

import './MyRoute.css'
import './All.css'
import ChatRoom from "./ChatRoom/ChatRoom";
import Donation from "./Sponsor/Donation";

class MyRoute extends Component {
    render() {
        return (
            <div className="route">

                <Router>

                    <Header />
                    <NavBar/>
                    <div className="fix-sponsor-window">
                        <Sponsor />
                    </div>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/org-review" component={OrgReview} />
                        <Route exact path="/org-structure" component={OrgStructure} />
                        <Route exact path="/membership" component={Membership} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/notice-board" component={Notice} />
                        <Route exact path="/dev-team" component={DevTeam} />
                        <Route exact path="/bloggs" component={Blogg} />
                        <Route exact path="/conferences" component={Conference} />
                        <Route exact path="/achievement" component={Achievement} />
                        <Route exact path="/gallery" component={Gallery} />
                        <Route exact path="/career" component={Career} />
                        <Route exact path="/contact" component={Contact} />

                        
                        <Route exact path="/donation" component={Donation} />

                        <Route component={ErrorURL} />
                    </Switch>

                    <div className="fix-chartroom" >
                        <ChatRoom/>
                    </div>
                    <Footer />

                </Router>

            </div>
        )
    }
}

function ErrorURL() {
    return (
        <div className="error-page">Ooops!!! Sorry, URL error. Kindly contact us <a href="">here</a></div>
    )
}

export default MyRoute;
