'use client';
import Head from "next/head";
import styled from "styled-components";
import Link from 'next/link';
import Image from 'next/image';
import { FaHeartbeat, FaUserMd, FaHospital, FaStethoscope,FaEye, FaUser,FaFacebook, FaTwitter, FaInstagram,FaEdit } from "react-icons/fa";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2f4f4f;
  padding: 20px 50px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 100000;
`;

const Logo = styled.div`
  img {
    width: 100px;
    height: auto;
  }
`;

const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    color: #fff;
  }

  li:hover {
    color: #FF5733;
  }
`;

const StyledLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    color: #FF5733;
  }

  & svg {
    font-size: 20px;
    margin-right: 10px;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

const CarouselItem = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const LargeHeading = styled.h1`
  position: absolute;
  bottom: 90px;
  left: 80px;
  color: white;
  font-size: 4rem;
  font-weight: bold;
  z-index: 2;
`;

const SmallHeading = styled.h3`
  position: absolute;
  bottom: 30px;
  left: 80px;
  color: white;
  font-size: 1.5rem;
  z-index: 2;
`;
const Footer = styled.footer`
  background-color: #2f4f4f;
  color: white;
  padding: 40px 50px;
  text-align: center;
  margin-top: 50px;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;

  &:hover {
    color: #FF5733;
  }
`;

const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const SocialMediaIcon = styled.a`
  color: white;
  font-size: 24px;

  &:hover {
    color: #FF5733;
  }
`;

const Copyright = styled.p`
  margin-top: 30px;
  font-size: 0.9rem;
  color: #bdc3c7;
`;

export default function Services() {
  return (
    <div>
      <Navbar>
        <Logo>
          <Image src="https://www.apolloadluxhospital.co/assets/images/ApolloAdluxLogo.png" alt="logo" />
        </Logo>
        <NavLinks>
          <li>
            <Link href="/" passHref>
              <StyledLink>
                <FaHospital style={{ fontSize: '20px', marginRight: '2px' }} />
                Home
              </StyledLink>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <StyledLink>
                <FaUserMd style={{ fontSize: '20px', marginRight: '2px' }} /> About
              </StyledLink>
            </Link>
          </li>
          <li>
           
                <FaStethoscope style={{ fontSize: '20px', marginRight: '2px',color: 'green' }} /> Services
              
          </li>
          <Link href="/register" passHref>   <StyledLink><FaEdit style={{ marginLeft: '-2px', fontSize:'20px',marginTop:'-2px'}} />Register </StyledLink></Link>
          <Link href="/reglist" passHref>
            <StyledLink>
              <FaEye style={{ fontSize: '20px', marginRight: '2px' }} />View Tables
            </StyledLink>
          </Link> 
          <Link href="/contact" passHref>
            <StyledLink>
              <FaHeartbeat style={{ fontSize: '20px' }} />
              Contact
            </StyledLink>
          </Link>
          <Link href="/login" passHref>   <StyledLink><FaUser style={{ marginLeft: '-2px', fontSize:'20px',marginTop:'-2px'}} />Login </StyledLink></Link>

        </NavLinks>
      </Navbar>

      {/* Carousel Section */}
      <CarouselContainer>
        <CarouselItem>
          <CarouselImage src="https://www.apolloadluxhospital.co/images/banner-images/banner-images6.jpg" alt="Slide 1" />
          <LargeHeading>Meet the Doctors</LargeHeading>
          <SmallHeading>Get to know our team of renowned doctors and experience<br></br> world-class healthcare
          </SmallHeading>
        </CarouselItem>
      </CarouselContainer>

      <div>
        <Head>
          <title>Our Services | Hospital</title>
          <meta name="description" content="Browse the services offered at our hospital" />
        </Head>

        {/* Header Section */}
        <header style={{ textAlign: "center", padding: "40px 20px", backgroundColor: "#f8f9fa" }}>
          <h1 style={{ fontSize: "3.5rem", color: "#2c3e50" ,fontWeight:'bolder'}}>Our Services</h1>
          <p style={{ fontSize: "1.2rem", color: "#7f8c8d" }}>Providing quality healthcare services for a better tomorrow.</p>
        </header>

        {/* Main Content */}
        <main style={{ padding: "20px" }}>
          {/* Medical Services Section */}
          <section style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "2.5rem", color: "#34495e", borderBottom: "2px solid #3498db", paddingBottom: "10px", marginBottom: "20px" ,fontWeight:'bolder'}}>
              Medical Services
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "30px" }}>
              <div style={{ backgroundColor: "#ecf0f1", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                <h3 style={{ fontSize: "1.8rem", color: "#1abc9c" }}>Emergency Care</h3>
                <p style={{ fontSize: "1rem", color: "#7f8c8d" }}>24/7 emergency services to handle all types of urgent medical situations.</p>
              </div>
              <div style={{ backgroundColor: "#ecf0f1", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
  <h3 style={{ fontSize: "1.8rem", color: "#1abc9c" }}>Orthopedics</h3>
  <p style={{ fontSize: "1rem", color: "#7f8c8d" }}>Comprehensive care for musculoskeletal health, including surgeries and therapies.</p>
</div>

<div style={{ backgroundColor: "#ecf0f1", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
  <h3 style={{ fontSize: "1.8rem", color: "#1abc9c" }}>Cardiology</h3>
  <p style={{ fontSize: "1rem", color: "#7f8c8d" }}>Expert care for heart health, including diagnostics, treatments, and surgeries.</p>
</div>

<div style={{ backgroundColor: "#ecf0f1", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
  <h3 style={{ fontSize: "1.8rem", color: "#1abc9c" }}>Pediatrics</h3>
  <p style={{ fontSize: "1rem", color: "#7f8c8d" }}>Specialized healthcare for children, from routine check-ups to specialized treatments.</p>
</div>

<div style={{ backgroundColor: "#ecf0f1", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
  <h3 style={{ fontSize: "1.8rem", color: "#1abc9c" }}>Dermatology</h3>
  <p style={{ fontSize: "1rem", color: "#7f8c8d" }}>Comprehensive skin care, including treatments for acne, eczema, and other skin conditions.</p>
</div>

<div style={{ backgroundColor: "#ecf0f1", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
  <h3 style={{ fontSize: "1.8rem", color: "#1abc9c" }}>Neurology</h3>
  <p style={{ fontSize: "1rem", color: "#7f8c8d" }}>Advanced care for neurological disorders, including brain, spinal cord, and nerve treatments.</p>
</div>

<div style={{ backgroundColor: "#ecf0f1", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
  <h3 style={{ fontSize: "1.8rem", color: "#1abc9c" }}>Gynecology</h3>
  <p style={{ fontSize: "1rem", color: "#7f8c8d" }}>Comprehensive care for women&#39;s health, including routine check-ups and specialized treatments.</p>
</div>

<div style={{ backgroundColor: "#ecf0f1", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
  <h3 style={{ fontSize: "1.8rem", color: "#1abc9c" }}>Ophthalmology</h3>
  <p style={{ fontSize: "1rem", color: "#7f8c8d" }}>Expert care for eye health, including vision tests, surgeries, and treatments for various eye conditions.</p>
</div>

<div style={{ backgroundColor: "#ecf0f1", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
  <h3 style={{ fontSize: "1.8rem", color: "#1abc9c" }}>Gastroenterology</h3>
  <p style={{ fontSize: "1rem", color: "#7f8c8d" }}>Comprehensive digestive care, including treatment for gastrointestinal issues and surgeries.</p>
</div>

<div style={{ backgroundColor: "#ecf0f1", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
  <h3 style={{ fontSize: "1.8rem", color: "#1abc9c" }}>Urology</h3>
  <p style={{ fontSize: "1rem", color: "#7f8c8d" }}>Expert care for urinary and reproductive health, including surgeries and treatments.</p>
</div>

            </div>
          </section>

          {/* Surgical Services Section */}
          <section style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "2.5rem", color: "#34495e", borderBottom: "2px solid #3498db", paddingBottom: "10px", marginBottom: "20px" }}>
              Surgical Services
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "30px" }}>
              <div style={{ backgroundColor: "#ecf0f1", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                <h3 style={{ fontSize: "1.8rem", color: "#1abc9c" }}>General Surgery</h3>
                <p style={{ fontSize: "1rem", color: "#7f8c8d" }}>Skilled surgical services for various medical conditions.</p>
              </div>
              <div style={{ backgroundColor: "#ecf0f1", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                <h3 style={{ fontSize: "1.8rem", color: "#1abc9c" }}>Neurosurgery</h3>
                <p style={{ fontSize: "1rem", color: "#7f8c8d" }}>Advanced treatments for brain and spinal conditions.</p>
              </div>
            </div>
          </section>

          {/* Diagnostic Services Section */}
          <section style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "2.5rem", color: "#34495e", borderBottom: "2px solid #3498db", paddingBottom: "10px", marginBottom: "20px" }}>
              Diagnostic Services
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "30px" }}>
              <div style={{ backgroundColor: "#ecf0f1", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                <h3 style={{ fontSize: "1.8rem", color: "#1abc9c" }}>X-Ray & Imaging</h3>
                <p style={{ fontSize: "1rem", color: "#7f8c8d" }}>State-of-the-art imaging facilities for accurate diagnostics.</p>
              </div>
              <div style={{ backgroundColor: "#ecf0f1", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                <h3 style={{ fontSize: "1.8rem", color: "#1abc9c" }}>Lab Tests</h3>
                <p style={{ fontSize: "1rem", color: "#7f8c8d" }}>Comprehensive lab services for a range of tests and diagnostics.</p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer Section */}
       <Footer>
               <FooterLinks>
                 <FooterLink href="/">Home</FooterLink>
                 <FooterLink href="/about">About Us</FooterLink>
                 <FooterLink href="/services">Services</FooterLink>
                 <FooterLink href="/contact">Contact</FooterLink>
               </FooterLinks>
       
               <SocialMediaLinks>
                 <SocialMediaIcon href="https://facebook.com" target="_blank"><FaFacebook /></SocialMediaIcon>
                 <SocialMediaIcon href="https://twitter.com" target="_blank"><FaTwitter /></SocialMediaIcon>
                 <SocialMediaIcon href="https://instagram.com" target="_blank"><FaInstagram /></SocialMediaIcon>
               </SocialMediaLinks>
       
               <Copyright>
                 &copy; 2025 Apollo Adlux Hospital. All rights reserved.
               </Copyright>
             </Footer>
           </div>
      </div>
  );
}
