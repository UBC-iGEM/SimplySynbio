import * as React from "react"
import { Link } from "gatsby"
import Footer from "./footer"
// import MonthlyHeader from "../images/blog-header.svg"
import MonthlyHeader from "../images/header.png"
import Logo from "../images/logo-trans.svg"
import { Background } from "../components/constants"
import styled from "styled-components"
// import MonthlyBackground from "../images/monthly-background.svg"
import MonthlyBackground from "../images/water.png"
import MonthlyBackgroundMobile from "../images/monthly-background-mobile.svg"

const MonthlyBlogHeaderDiv = styled(Background)`
  background-image: url(${MonthlyHeader});
  height: 45vh;
`
const MonthlyBackgroundDiv = styled(Background)`
  background-image: url(${MonthlyBackground});
  height: 100vh;

  @media only screen and (max-width: 600px) {
    background-image: url(${MonthlyBackgroundMobile});
    background-position: top;
  }
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = <MonthlyBackgroundDiv></MonthlyBackgroundDiv>
  } else {
    header = (
      <MonthlyBlogHeaderDiv>
        <div className="global-wrapper">
          <Link className="header-link-home" to="/">
            <img src={Logo} />
          </Link>
        </div>
      </MonthlyBlogHeaderDiv>
    )
  }

  return (
    <>
      <header className="global-header">{header}</header>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
