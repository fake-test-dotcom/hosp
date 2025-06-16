'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import {
  FaHeartbeat,
  FaUserMd,
  FaHospital,
  FaStethoscope,
  FaUser,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaEdit
} from 'react-icons/fa';

// Types
type Patient = {
  name: string;
  gender: string;
  dob: string;
  phone: string;
  email: string;
};

// Navbar Styles
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: grey;
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
`;

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    color: #FF5733;
  }
`;

// Footer Styles
const FooterContainer = styled.footer`
  background-color: black;
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
  margin-bottom: 68px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

// Main Component
const Ptable: React.FC = () => {
  const [users, setUsers] = useState<Patient[]>([]);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/patient')
      .then((res) => res.json())
      .then((data: Patient[]) => {
        setUsers(data);
      })
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar>
        <Logo>
          <Image src="https://www.apolloadluxhospital.co/assets/images/ApolloAdluxLogo.png" alt="logo" width={100} height={40} />
        </Logo>
        <NavLinks>
          <Link href="/" passHref>
            <StyledLink>
              <FaHospital style={{ fontSize: '20px' }} /> Home
            </StyledLink>
          </Link>
          <Link href="/about" passHref>
            <StyledLink>
              <FaUserMd style={{ fontSize: '20px' }} /> About
            </StyledLink>
          </Link>
          <Link href="/services" passHref>
            <StyledLink>
              <FaStethoscope style={{ fontSize: '20px' }} /> Services
            </StyledLink>
          </Link>
          <Link href="/register" passHref>
            <StyledLink>
              <FaEdit style={{ fontSize: '20px' }} /> Register
            </StyledLink>
          </Link>
          <li style={{ color: 'green' }}><FaHeartbeat /> Join us</li>
          <Link href="/login" passHref>
            <StyledLink>
              <FaUser style={{ fontSize: '20px' }} /> Login
            </StyledLink>
          </Link>
        </NavLinks>
      </Navbar>

      {/* Main Content */}
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: 'black', fontWeight: 'bolder' }}>Patients list</h1>

        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            margin: '0 auto',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          <thead>
            <tr>
              <th style={{ backgroundColor: 'grey', padding: '10px', textAlign: 'left' }}>Full Name</th>
              <th style={{ backgroundColor: 'grey', padding: '10px', textAlign: 'left' }}>Gender</th>
              <th style={{ backgroundColor: 'grey', padding: '10px', textAlign: 'left' }}>Date of Birth</th>
              <th style={{ backgroundColor: 'grey', padding: '10px', textAlign: 'left' }}>Phone</th>
              <th style={{ backgroundColor: 'grey', padding: '10px', textAlign: 'left' }}>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: hoveredRow === index ? '#f1f1f1' : '#f9f9f9',
                }}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td style={{ padding: '10px', border: '1px solid #ddd', color: 'black' }}>{user.name}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', color: 'black' }}>{user.gender}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', color: 'black' }}>{user.dob}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', color: 'black' }}>{user.phone}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', color: 'black' }}>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Footer Component
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
          <ContactItem>
            <FaPhoneAlt />
            <p>+123-456-7890</p>
          </ContactItem>
          <ContactItem>
            <FaEnvelope />
            <p>contact@apolloadluxhospital.com</p>
          </ContactItem>
          <ContactItem>
            <FaMapMarkerAlt />
            <p>123 Hospital St, City, Country</p>
          </ContactItem>
        </FooterSection>
      </FooterInfo>

      <FooterInfo>
        <p>&copy; 2025 Apollo Adlux Hospital. All rights reserved.</p>
      </FooterInfo>
    </FooterContainer>
  );
};

export default Ptable;
