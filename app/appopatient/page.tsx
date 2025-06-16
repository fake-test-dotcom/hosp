'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { FaCamera, FaTimes, FaArrowLeft, FaUser, FaHospital, FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// Styled components for Navbar and Footer
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
    color: rgb(51, 109, 255);
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
  prescription: string;
}

// Main Component
const Ptable: React.FC = () => {
const [users, setUsers] = useState<Appointment[]>([]);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  useEffect(() => {
    // Static placeholder data (frontend-only)
    setUsers([
      {
        _id: '1',
        date: '2025-06-20',
        time: '10:00 AM',
        prescription: 'Paracetamol 500mg'
      },
      {
        _id: '2',
        date: '2025-06-21',
        time: '02:30 PM',
        prescription: 'Ibuprofen 400mg'
      },
      {
        _id: '3',
        date: '2025-06-22',
        time: '09:00 AM',
        prescription: ''
      }
    ]);
  }, []);

  const handleDelete = (id: string) => {
    setUsers((prev) => prev.filter((user) => user._id !== id));
  };

  return (
    <div>
      <Navbar>
        <Logo style={{ boxShadow: '2px 8px 12px black', borderRadius: '100px' }}>
          <Image src="https://www.apolloadluxhospital.co/assets/images/ApolloAdluxLogo.png" alt="logo" />
        </Logo>
        <NavLinks>
          <Link href="/" passHref>
            <StyledLink>
              <FaHospital style={{ fontSize: '20px', boxShadow: '0px 9px 12px black' }} /> Home
            </StyledLink>
          </Link>
          <Link href="/login" passHref>
            <StyledLink>
              <FaUser style={{ fontSize: '20px', boxShadow: '0px 9px 12px black', borderRadius: '190px' }} />Login
            </StyledLink>
          </Link>
          <Link href="/" passHref>
            <StyledLink>
              <FaArrowLeft style={{ fontSize: '20px', boxShadow: '0px 9px 12px black', borderRadius: '190px' }} /> Go back
            </StyledLink>
          </Link>
        </NavLinks>
      </Navbar>

      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: 'black', fontWeight: 'bolder', textShadow: '0px 3px 6px black' }}>Appointment List</h1>

        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Arial, sans-serif', boxShadow: '0px 4px 8px black' }}>
          <thead>
            <tr>
              <th style={{ backgroundColor: '#2f4f4f', padding: '10px', textAlign: 'left' }}>Date</th>
              <th style={{ backgroundColor: '#2f4f4f', padding: '10px', textAlign: 'left' }}>Time</th>
              <th style={{ backgroundColor: '#2f4f4f', padding: '10px', textAlign: 'left' }}>Prescription</th>
              <th style={{ backgroundColor: '#2f4f4f', padding: '10px', textAlign: 'left' }}>Actions</th>
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
                <td style={{ padding: '10px', border: '1px solid #ddd', color: 'black' }}>{user.date}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', color: 'black' }}>{user.time}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', color: 'black' }}>{user.prescription || 'No Prescription'}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', color: 'black' }}>
                  <button
                    onClick={() => handleDelete(user._id)}
                    style={{
                      backgroundColor: 'red',
                      color: 'white',
                      padding: '5px 10px',
                      border: 'none',
                      borderRadius: '30px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      boxShadow: '0px 4px 8px black',
                    }}
                  >
                    <FaTimes style={{ fontSize: '16px' }} />
                    Cancel appointment
                  </button>
                  <Link href={`/video?roomID=${user._id}`} passHref>
                    <button
                      style={{
                        backgroundColor: 'green',
                        color: 'white',
                        padding: '5px 10px',
                        border: 'none',
                        borderRadius: '30px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        marginTop: '-34px',
                        marginLeft: '190px',
                        boxShadow: '0px 4px 8px black',
                      }}
                    >
                      <FaCamera style={{ fontSize: '16px' }} />
                      Video call
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

// Footer Component
const Footer: React.FC = () => (
  <FooterContainer>
    <FooterLinks>
      <a href="https://facebook.com" target="_blank"><FaFacebook style={{ boxShadow: '0px 9px 12px blue', borderRadius: '100px' }} /></a>
      <a href="https://twitter.com" target="_blank"><FaTwitter style={{ boxShadow: '0px 7px 12px lightblue', borderRadius: '100px' }} /></a>
      <a href="https://instagram.com" target="_blank"><FaInstagram style={{ boxShadow: '0px 9px 12px purple', borderRadius: '190px' }} /></a>
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
      <p style={{ boxShadow: '0px 0px 6px purple', borderRadius: '190px' }}>&copy; 2025 Apollo Adlux Hospital. All rights reserved.</p>
    </FooterInfo>
  </FooterContainer>
);

export default Ptable;
