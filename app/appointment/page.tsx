'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import {
  FaHospital, FaCamera, FaCheck, FaTimes, FaArrowLeft, FaUser,
  FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope,
  FaMapMarkerAlt, FaEdit
} from 'react-icons/fa';

// Navbar Styles
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
  margin-bottom: 68px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;


interface Appointment {
  _id: string;
  date: string;
  time: string;
  prescription?: string;
  by?: string;
}

const Atable: React.FC = () => {
  const [users, setUsers] = useState<Appointment[]>([]);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);


  useEffect(() => {
    // Static mock data (replaces backend API)
    const fakeAppointments = [
      {
        _id: '1',
        date: '2025-06-16',
        time: '10:00 AM',
        prescription: 'Paracetamol 500mg',
        by: 'Dr. John Doe',
      },
      {
        _id: '2',
        date: '2025-06-17',
        time: '2:00 PM',
        prescription: '',
        by: 'Dr. Jane Smith',
      },
    ];
    setUsers(fakeAppointments);
  }, []);

 
  const handleRemovePrescription = (userId: string) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user._id === userId ? { ...user, prescription: '' } : user
      )
    );
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar>
        <Logo>
          <Image src="https://www.apolloadluxhospital.co/assets/images/ApolloAdluxLogo.png" alt="logo" />
        </Logo>
        <NavLinks>
          <Link href="/dhome" passHref>
            <StyledLink>
              <FaHospital style={{ fontSize: '20px' }} /> Home
            </StyledLink>
          </Link>
          <Link href="/login" passHref>
            <StyledLink>
              <FaUser style={{ fontSize: '20px' }} /> Login
            </StyledLink>
          </Link>
          <Link href="/dhome" passHref>
            <StyledLink>
              <FaArrowLeft style={{ fontSize: '20px' }} /> Go back
            </StyledLink>
          </Link>
        </NavLinks>
      </Navbar>

      {/* Main Content */}
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: 'black', fontWeight: 'bolder', textShadow: '0px 3px 6px black' }}>
          Appointment List
        </h1>

        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Arial, sans-serif' }}>
          <thead>
            <tr>
              {['Date', 'Time', 'My Prescription', 'Prescribed by', 'Actions'].map((header, i) => (
                <th key={i} style={{ backgroundColor: '#2f4f4f', padding: '10px', textAlign: 'left', color: 'white' }}>
                  {header}
                </th>
              ))}
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
                <td style={tdStyle}>{user.date}</td>
                <td style={tdStyle}>{user.time}</td>
                <td style={tdStyle}>{user.prescription || 'No Prescription'}</td>
                <td style={tdStyle}>{user.by}</td>
                <td style={tdStyle}>
                  <Link href={`/prescription/${user._id}`} passHref>
                    <button style={btnStyle('green')}>
                      <FaCheck /> Prescribe
                    </button>
                  </Link>
                  <button onClick={() => handleRemovePrescription(user._id)} style={{ ...btnStyle('red'), marginTop: '-33px', marginLeft: '120px' }}>
                    <FaTimes /> Remove
                  </button>
                  <Link href={`/edit/${user._id}`} passHref>
                    <button style={{ ...btnStyle('blue'), marginTop: '-34px', marginLeft: '230px' }}>
                      <FaEdit /> Edit
                    </button>
                  </Link>
                  <Link href={`/video?roomID=${user._id}`} passHref>
                    <button style={{ ...btnStyle('green'), marginTop: '-34px', marginLeft: '310px' }}>
                      <FaCamera /> Video call
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
};

const tdStyle: React.CSSProperties = {
  padding: '10px',
  textAlign: 'left',
  border: '1px solid #ddd',
  color: 'black',
};

const btnStyle = (color: string): React.CSSProperties => ({
  backgroundColor: color,
  color: 'white',
  padding: '5px 10px',
  border: 'none',
  borderRadius: '30px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  boxShadow: '0px 4px 8px black',
});

// Footer Component
const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={{ boxShadow: '0px 9px 12px blue', borderRadius: '100px' }} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter style={{ boxShadow: '0px 7px 12px lightblue', borderRadius: '100px' }} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={{ boxShadow: '0px 9px 12px purple', borderRadius: '190px' }} />
        </a>
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
        <p style={{ boxShadow: '0px 0px 6px purple', borderRadius: '190px' }}>&copy; 2025 Apollo Adlux Hospital. All rights reserved.</p>
      </FooterInfo>
    </FooterContainer>
  );
};

export default Atable;
