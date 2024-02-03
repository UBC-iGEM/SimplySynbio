import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import UbcLogo from '../images/ubcigem-logo.png'


const FooterLink = styled(Link)`
    color: black;
    text-decoration: none;
`;

const FooterDiv = styled.div`
    background-color: white;
    font-family: 'Open Sans', sans-serif;
    padding: 1rem 4rem 4rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .sub-footer-div {
        text-align: right;
        margin-bottom: 2rem;
        width: 200px;
        margin: 1rem;
    }

    img {
        width: 100%; 
        max-width: 115px; 
        display: block;
    }
    
    p {
        font-size: 20ptx;
        line-height: 15ptx;
        margin: 0.2rem 0;
        cursor: pointer;
    }

    @media screen and (max-width: 575px) {
        padding: 4rem 4rem;
        justify-content: center;

        .sub-footer-div {
            margin: 0;
            text-align: center;
            width: 100%;
            padding: 0.5rem 0rem;
        }
    }
`;

const Footer = () => {
    return(
        <FooterDiv>
            <div className="sub-footer-div">
                <FooterLink to="https://ubcigem.com/">
                    <img src={UbcLogo} alt="UBC iGEM Logo"></img>
                </FooterLink>
            </div>
            <div className="sub-footer-div">
                <FooterLink to="/">
                    <p>SimplySynBio Home</p>
                </FooterLink>
                <FooterLink to="/video-series">
                    <p>Video Series</p>
                </FooterLink>
                <FooterLink to="https://ubcigem.com/">
                    <p>UBC iGEM Home</p>
                </FooterLink>
            </div>
        </FooterDiv>

    )
}

export default Footer