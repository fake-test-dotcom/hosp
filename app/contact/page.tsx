'use client';

import React, { useState } from "react";
import styled from "styled-components";
import Link from 'next/link';
import { FaHeartbeat, FaUserMd, FaHospital, FaStethoscope, FaEye, FaUser, FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaEdit } from "react-icons/fa";

// Styled-components
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
  bottom: 50px;
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

const ContactSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  background-color: #f9f9f9;
`;

const LeftContent = styled.div`
  width: 60%;
  text-align: left;
`;

const RightContent = styled.div`
  width: 35%;
  text-align: left;
  padding-left: 30px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  & svg {
    margin-right: 15px;
    font-size: 1.5rem;
    color:rgb(69, 69, 138);
  }

  & p {
    font-size: 1.1rem;
  }
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
`;

const FormSection = styled.div`
  position: relative;
  background-image: url('/images/contact us.png');
  background-size: cover;
  background-position: center;
  padding: 40px;
  margin-top: 50px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
    border-radius: 10px;
  }
`;

const FormTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #131ea2;
  text-align: center;
  font-weight: bolder;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
  margin: 0 auto;
  align-items: center;
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 16px 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 30px;
  outline: none;
  width:  500px;
  background-color: #f9f9f9;
  color: black;

  &::placeholder {
    color: transparent;
  }

  &:focus {
    border-color: rgb(37, 22, 99);
    box-shadow: 0 0 5px rgba(51, 65, 255, 0.5);
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-20px);
    font-size: 0.9rem;
    color: rgb(51, 58, 255);
  }
`;

const Label = styled.label`
  font-size: 1.1rem;
  color: #666;
  position: absolute;
  top: 16px;
  left: 12px;
  transition: all 0.3s ease;
  pointer-events: none;
`;

const Textarea = styled.textarea`
  padding: 16px 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 30px;
  outline: none;
  transition: all 0.3s ease;
  background-color: #f9f9f9;
  resize: none;
  width: 400px;
  color: black;
  z-index: 0;

  &::placeholder {
    color: transparent;
  }

  &:focus {
    border-color: rgb(71, 51, 255);
    box-shadow: 0 0 5px rgba(51, 51, 255, 0.5);
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-20px);
    font-size: 0.9rem;
    color: rgb(85, 51, 255);
  }
`;

const SubmitButton = styled.button`
  padding: 16px 0;
  background-color: rgb(51, 61, 255);
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  width: 50%;
  max-width: 300px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 20px;
  z-index: 0;

  &:hover {
    background-color: rgb(41, 19, 115);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const FooterContainer = styled.footer`
  background-color: #2f4f4f;
  color: white;
  padding: 40px;
  text-align: center;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;

  a {
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
  }

  a:hover {
    color: #FF5733;
  }
`;

const FooterInfo = styled.div`
  margin-top: 20px;

  p {
    font-size: 1.1rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </FooterLinks>
      <FooterInfo>
        <p>Stay connected with us for updates and more!</p>
        <FooterSection>
          <ContactItem><FaPhoneAlt /><p>+123-456-7890</p></ContactItem>
          <ContactItem><FaEnvelope /><p>contact@apolloadluxhospital.com</p></ContactItem>
          <ContactItem><FaMapMarkerAlt /><p>123 Hospital St, City, Country</p></ContactItem>
        </FooterSection>
      </FooterInfo>
      <FooterInfo>
        <p>&copy; 2025 Apollo Adlux Hospital. All rights reserved.</p>
      </FooterInfo>
    </FooterContainer>
  );
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', password: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setFormData({ name: '', phone: '', email: '', password: '', message: '' });
  };

  return (
    <div>
      <Navbar>
        <Logo><img src="https://www.apolloadluxhospital.co/assets/images/ApolloAdluxLogo.png" alt="logo" /></Logo>
        <NavLinks>
          <Link href="/" passHref><StyledLink><FaHospital />Home</StyledLink></Link>
          <Link href="/about" passHref><StyledLink><FaUserMd />About</StyledLink></Link>
          <Link href="/services" passHref><StyledLink><FaStethoscope />Services</StyledLink></Link>
          <Link href="/register" passHref><StyledLink><FaEdit />Register</StyledLink></Link>
          <Link href="/reglist" passHref><StyledLink><FaEye />View Tables</StyledLink></Link>
          <li style={{ color: 'green' }}><FaHeartbeat /> Contact</li>
          <Link href="/login" passHref><StyledLink><FaUser />Login</StyledLink></Link>
        </NavLinks>
      </Navbar>

      <CarouselContainer>
        <CarouselItem>
          <CarouselImage src="https://www.apolloadluxhospital.co/images/banner-images/banner-images34.jpg" alt="Slide 1" />
          <LargeHeading>Contact Us</LargeHeading>
          <SmallHeading>We're Here to Help: Contact Us Today</SmallHeading>
        </CarouselItem>
      </CarouselContainer>

      <ContactSection>
        <LeftContent>
          <Heading>Get in Touch With Us</Heading>
          <Paragraph>
            At Apollo Adlux Hospital, we are committed to providing world-class healthcare services with compassion and expertise.
          </Paragraph>
        </LeftContent>
        <RightContent>
          <ContactItem><FaPhoneAlt /><p style={{ color: 'black' }}>+123-456-7890</p></ContactItem>
          <ContactItem><FaEnvelope /><p style={{ color: 'black' }}>contact@apolloadluxhospital.com</p></ContactItem>
          <ContactItem><FaMapMarkerAlt /><p style={{ color: 'black' }}>123 Hospital St, City, Country</p></ContactItem>
          <Paragraph>Our team is ready to assist you with any inquiries. Don’t hesitate to reach out!</Paragraph>
        </RightContent>
      </ContactSection>

      <FormSection>
        <FormTitle>Contact Us</FormTitle>
        <Form onSubmit={handleSubmit}>
          <InputWrapper><Input type="text" name="name" value={formData.name} placeholder="Name" onChange={e => setFormData({ ...formData, name: e.target.value })} required /><Label htmlFor="name">Name</Label></InputWrapper>
          <InputWrapper><Input type="tel" name="phone" value={formData.phone} placeholder="Phone" onChange={e => setFormData({ ...formData, phone: e.target.value })} required /><Label htmlFor="phone">Phone</Label></InputWrapper>
          <InputWrapper><Input type="email" name="email" value={formData.email} placeholder="Email" onChange={e => setFormData({ ...formData, email: e.target.value })} required /><Label htmlFor="email">Email</Label></InputWrapper>
          <InputWrapper><Input type="password" name="password" value={formData.password} placeholder="Password" onChange={e => setFormData({ ...formData, password: e.target.value })} required /><Label htmlFor="password">Password</Label></InputWrapper>
          <InputWrapper><Textarea name="message" value={formData.message} placeholder="Message" onChange={e => setFormData({ ...formData, message: e.target.value })} required /><Label htmlFor="message">Message</Label></InputWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </FormSection>

      <Footer />
    </div>
  );
};

export default ContactPage;
