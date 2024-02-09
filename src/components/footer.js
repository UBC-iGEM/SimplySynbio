import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Center } from "./constants"

const FooterLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const FooterDiv = styled.footer`
  background-color: white;
  font-family: "Open Sans", sans-serif;
  padding: 4rem 4rem 4rem;
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
    max-width: 125px;
    display: block;
  }

  p {
    font-size: 16px;
    line-height: 30px;
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
`

const Footer = () => {
  return (
    <FooterDiv>
      <div className="sub-footer-div">
        <Center>
          <FooterLink to="https://ubcigem.com/">
            <StaticImage src="../images/ubcigem-logo.svg" width={125} />
          </FooterLink>
        </Center>
      </div>
      <div className="sub-footer-div">
        <FooterLink to="/">
          <p>SimplySynBio Home</p>
        </FooterLink>
        <FooterLink to="https://www.youtube.com/watch?v=XH2Rd_OYp_Q&list=PL-Wy-ch12gXt96tBfWj4FfzIQQt-fnwPE&pp=iAQB">
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
