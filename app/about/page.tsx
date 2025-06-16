'use client';
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
import { FaHeartbeat,FaEdit, FaUserMd, FaHospital,FaEye, FaStethoscope, FaUser, FaHospitalAlt, FaUsers, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

// Styled-components for Loading Screen
const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Spinner = styled.div`
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-top: 5px solid #ff5733;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Logo = styled.div`
  img {
    width: 100px;
    height: auto;
    margin-bottom: 10px;
  }
`;

// Styled-components for the rest of the page
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2f4f4f;
  padding: 20px 50px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 100000;
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

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(https://www.apolloadluxhospital.co/images/banner-images/banner-images21.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 30px;
`;

const InfoSection = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const InfoCard = styled(motion.div)`
  background-color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 250px;
  padding: 30px;
  text-align: center;
  margin: 20px;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #2980b9;
  margin-top: 15px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
  margin-top: 10px;
`;

const MissionSection = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 50px auto;
`;

const MissionTitle = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
`;

const MissionText = styled.p`
  font-size: 1.2rem;
  color: #34495e;
  line-height: 1.8;
`;

const Button = styled.a`
  display: inline-block;
  background-color: #2980b9;
  padding: 10px 20px;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3498db;
  }
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

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading period, e.g., fetching data
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after 3 seconds (or fetch data completion)
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <LoadingOverlay>
        <div style={{ textAlign: "center" }}>
          <Logo>
            <Image src="https://www.apolloadluxhospital.co/assets/images/ApolloAdluxLogo.png" alt="Logo" />
          </Logo>
          <Spinner style={{marginLeft: '20px'}} />
          <p style={{ color: "white", marginTop: "20px", fontSize: "18px" }}>Loading...</p>
        </div>
      </LoadingOverlay>
    );
  }

  return (
    <div>
      {/* Navbar */}
      <Navbar>
        <Logo>
          <Image src="https://www.apolloadluxhospital.co/assets/images/ApolloAdluxLogo.png" alt="logo" />
        </Logo>
        <NavLinks>
          <Link href="/" passHref>
            <StyledLink>
              <FaHospital style={{ fontSize: '20px' }} />
              Home
            </StyledLink>
          </Link>
          <li style={{ color: 'green' }}>
            <FaUserMd style={{ marginLeft: '18px' }} />
            About
          </li>
          <Link href="/services" passHref>
            <StyledLink>
              <FaStethoscope style={{ fontSize: '20px', marginRight: '2px' }} />Services
            </StyledLink>
          </Link>    
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

      {/* Content Container */}
      <ContentContainer>
        <AboutContainer>
          <Heading>About Our Hospital</Heading>

          {/* Info Section */}
          <InfoSection>
            <InfoCard
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <FaHospitalAlt size={50} color="#2980b9" />
              <CardTitle>State-of-the-art Facilities</CardTitle>
              <CardDescription>
                Our hospital is equipped with the latest medical technology to ensure the best care.
              </CardDescription>
            </InfoCard>

            <InfoCard
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <FaUsers size={50} color="#2980b9" />
              <CardTitle>Experienced Staff</CardTitle>
              <CardDescription>
                Our doctors, nurses, and medical professionals are highly experienced and compassionate.
              </CardDescription>
            </InfoCard>

            <InfoCard
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <FaHeartbeat size={50} color="#2980b9" />
              <CardTitle>Comprehensive Care</CardTitle>
              <CardDescription>
                We offer a wide range of medical services for all your healthcare needs.
              </CardDescription>
            </InfoCard>
          </InfoSection>

          {/* Mission Section */}
          <MissionSection>
            <MissionTitle>Our Mission</MissionTitle>
            <MissionText>
              Our mission is to provide compassionate, high-quality care that enhances the health and well-being of our community.
              We believe in holistic treatment, focusing on physical, emotional, and mental health.
            </MissionText>
            <Button href="/contact">Contact Us</Button>
          </MissionSection>
        </AboutContainer>
      </ContentContainer>

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
  );
};

export default About;
