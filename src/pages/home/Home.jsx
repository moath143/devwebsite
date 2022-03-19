import React from "react";
import { Row, Col, Card } from "antd";
import LoginRegisterBtns from "../../components/loginRegisterBtns";
import HomeIcon from "../../assets/list/home.svg";
import ListingIcon from "../../assets/list/listings.svg";
import PodcastsIcon from "../../assets/list/podcast.svg";
import VideoIcon from "../../assets/list/video.svg";
import TagIcon from "../../assets/list/tags.svg";
import FaqIcon from "../../assets/list/faq.svg";
import DevShopIcon from "../../assets/list/devshop.svg";
import SponsorsIcon from "../../assets/list/sponsers.svg";
import AboutIcon from "../../assets/list/about.svg";
import ContactIcon from "../../assets/list/contact.svg";
import CodeOfConductIcon from "../../assets/list/codeofconduct.svg";
import TermsIcon from "../../assets/list/terms.svg";
import PrivacyIcon from "../../assets/list/privacy.svg";
import CodeLand from "../../assets/codeland.png";
import Azure from "../../assets/azuer.webp";

import "./home.css";

const Home = () => {
    const { Meta } = Card;


  return (
    <sectin className="home">
      <div className="container">
        <Row>
          <Col className="" span={5}>
            <div className="aside-1">
              <p>
                <span>DEV Community</span> is a community of 811,263 amazing
                developers
              </p>
              <p>
                We're a place where coders share, stay up-to-date and grow their
                careers.
              </p>
              <div className="login-register flex-col">
                <LoginRegisterBtns />
              </div>
            </div>
            <ul>
              <li>
                <img src={HomeIcon} />
                <a>Home</a>
              </li>
              <li>
                <img src={ListingIcon} />
                <a>Listings</a>
              </li>
              <li>
                <img src={PodcastsIcon} />
                <a>Podcasts</a>
              </li>
              <li>
                <img src={VideoIcon} />
                <a>Video</a>
              </li>
              <li>
                <img src={TagIcon} />
                <a>Tags</a>
              </li>
              <li>
                <img src={FaqIcon} />
                <a>FAQ</a>
              </li>
              <li>
                <img src={DevShopIcon} />
                <a>DEV Shop</a>
              </li>
              <li>
                <img src={SponsorsIcon} />
                <a>Sponsors</a>
              </li>
              <li>
                <img src={AboutIcon} />
                <a>About</a>
              </li>
              <li>
                <img src={ContactIcon} />
                <a>Contact</a>
              </li>
            </ul>
            <h3>Other</h3>
            <ul>
              <li>
                <img src={CodeOfConductIcon} />
                <a>Code of Conduct</a>
              </li>
              <li>
                <img src={PrivacyIcon} />
                <a>Privacy Policy</a>
              </li>
              <li>
                <img src={TermsIcon} />
                <a>Terms of use</a>
              </li>
            </ul>
          </Col>
          <Col className="aside-2" span={13}>
            
          </Col>
          <Col className="aside-3" span={6}>
            <Card hoverable cover={<img alt="codeland" src={CodeLand} />}>
              <Meta title="CodeLand 2022: Taking place virtually on June 16 & 17" />
              <h3>
                <a>Learn More & Submit a talk</a>
              </h3>
            </Card>
            <Card hoverable cover={<img alt="Azure" src={Azure} />}>
              <Meta
                className="meta"
                title="Microsoft Azure Trial Hackathon (28)"
              />
            </Card>
            <ul>
              <li>
                <a>Azure Trial Hackathon - Mini Pinterest with Flask</a>
              </li>
              <li>
                <a>Deploy my web-youtube-downloader in my Azure VM!</a>
              </li>
              <li>
                <a>[Azure Trial Hackathon Submission Post Placeholder Title]</a>
              </li>
              <li>
                <a>
                  Temperature and Humidity Monitor - Using IoT, Azure and
                  Xamarin
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </sectin>
  );
};

export default Home;
