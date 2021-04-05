import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Parallax from "react-rellax"


import Layout from "../components/layout"
import SEO from "../components/seo"
import IllustrationTop from "../components/illustrationTop"

const IndexPage = () => (
  <Layout>
    <SEO title="A Oficina" />

    <div className="Hero">   
      <div className="HeroGroup" id="top">
        <div className="HeroGrouptext">
          <h1>A OFICINA</h1>
          <h2>Making UX UI DESING happen</h2>
          <h1>Website Apps Branding</h1>

          <div className="buttonTop">
            <p id="b1">Let's chat</p>
            </div>
          
          <p>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
        </div>
          <div className="Illustrations">
          <Parallax speed={-2}>              
           <IllustrationTop />
         </Parallax>
          </div>

      </div>

      <div className="HeroGroupMiddle">
        <h2 id="h2Green">our clients</h2>
        <dive className="HeroLogosClients">
          <img src="http://design.christianomere.com.br/img/logo01.svg"></img>
          <img src="http://design.christianomere.com.br/img/logo02.svg"></img>
          <img src="http://design.christianomere.com.br/img/logo03.svg"></img>
          <img src="http://design.christianomere.com.br/img/logo04.svg"></img>
        
        </dive>
      </div>

      
      
      <svg 
          width="1440" 
          height="813" 
          viewBox="0 0 1440 813" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg">
            <path 
              fill="#FEAC0B">    
              <animate 
              repeatCount="indefinite" 
              fill="freeze" 
              attributeName="d" 
              dur="20s" 
              values="M0 0H1440V654C932.839 926.763 612.364 772.971 0 730V0Z;

                      M0 0H1440V611C688.5 1064.5 348 611 0 660.606V0Z;

                      M0 0H1440V474.995C1014.5 648.504 317.5 908 0 648.504V0Z
                      
                      M0 0H1440V611C688.5 1064.5 348 611 0 660.606V0Z;
                      
                      M0 0H1440V654C932.839 926.763 612.364 772.971 0 730V0Z"/>
            </path>
          </svg> 
        
          <svg 
            width="1440" 
            height="857" 
            viewBox="0 0 1440 857" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
              <path 
                fill="#FE5343">    
                <animate 
                repeatCount="indefinite" 
                fill="freeze" 
                attributeName="d" 
                dur="20s" 
                values="M0 0H1440V567.763C932.839 840.526 612.364 885.055 0 842.084V0Z;
                        
                        M0 0H1440V483.86C1050.95 756.501 481.716 879.346 0 660.606V0Z;
                
                        M0 0H1440V474.995C1191.42 806.631 692.053 780.174 0 648.504V0Z;
                        
                        M0 0H1440V483.86C1050.95 756.501 481.716 879.346 0 660.606V0Z;
                        
                        M0 0H1440V567.763C932.839 840.526 612.364 885.055 0 842.084V0Z"/>
              </path>
            </svg> 
    </div>









    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
