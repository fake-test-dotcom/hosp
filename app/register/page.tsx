'use client';
import Link from 'next/link';
import Image from 'next/image';
import styled from "styled-components";
import { FaEdit,FaHeartbeat, FaHospital,FaUsers,FaEye, FaStethoscope, FaUser, FaUserMd} from "react-icons/fa";
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

export default function Home() {
  const styles: { [key: string]: React.CSSProperties } = {
    mainContainer: {
      position: 'relative',
      width: '100%',
      height: '100vh',
      backgroundImage: 'url("/images/premium_photo.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.65)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: 'white',
      padding: '0 20px',
    },
    logo: {
      position: 'absolute',
      top: '20px',
      left: '50px',
      width: '150px',
      height: 'auto',
      zIndex: '100',
    },
    heading: {
      fontSize: '48px',
      fontWeight: 700,
      marginBottom: '20px',
      textTransform: 'uppercase',
      marginTop:'-150px',

    },
    paragraph: {
      fontSize: '20px',
      fontWeight: 400,
      maxWidth: '800px',
      marginBottom: '40px',
      lineHeight: '1.6',
    },
    btnContainer: {
      display: 'flex',
      gap: '20px',
    },
    btn: {
      padding: '12px 30px',
      borderRadius: '5px',
      fontSize: '18px',
      fontWeight: 500,
      textDecoration: 'none',
      textTransform: 'uppercase',
      cursor: 'pointer',
      display: 'flex',   // Align icon and text horizontally
      alignItems: 'center', // Make sure both the icon and text are aligned in the same row
      justifyContent: 'center',
      transition: 'background-color 0.3s, transform 0.3s',
      width: '200px',
      border: 'none',
    },
    loginBtn: {
      backgroundColor: '#0073e6',
      color: 'white',
      width:'340px',
      height:'70px',
    },
    loginBtnHover: {
      backgroundColor: '#005bb5',
      transform: 'translateY(-5px)',
    },
    signupBtn: {
      backgroundColor: '#f3f3f3',
      color: '#0073e6',
      border: '2px solid #0073e6',
      width:'340px',
      height:'70px',
    },
    signupBtnHover: {
      backgroundColor: '#0073e6',
      color: 'white',
      transform: 'translateY(-5px)',
    },
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>, type: 'login' | 'signup') => {
    if (type === 'login') {
      e.currentTarget.style.backgroundColor = styles.loginBtnHover.backgroundColor || '#005bb5';
    } else {
      e.currentTarget.style.backgroundColor = styles.signupBtnHover.backgroundColor || '#0073e6';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>, type: 'login' | 'signup') => {
    if (type === 'login') {
      e.currentTarget.style.backgroundColor = styles.loginBtn.backgroundColor || '#0073e6';
    } else {
      e.currentTarget.style.backgroundColor = styles.signupBtn.backgroundColor || '#f3f3f3';
    }
  };

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
        <Link href="/services" passHref>
            <StyledLink>
              <FaStethoscope style={{ fontSize: '20px', marginRight: '2px' }} />Services
            </StyledLink>
          </Link>   
        <li style={{color:'green'}}>
         
              <FaEdit style={{ fontSize: '20px', marginRight: '2px',color: 'green' }} /> Register
            
        </li>
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
  
    <div style={styles.mainContainer}>
      {/* <img
        src=""
        alt="Apollo Adlux Hospital Logo"
        style={styles.logo}
      /> */}
      <div style={styles.overlay}>
        <h1 style={styles.heading}>Welcome to Registration page of Apollo Hospital</h1>
        <p style={styles.paragraph}>
          At Apollo Adlux Hospital, we offer world-class healthcare services with a commitment to providing
          compassionate and advanced medical care. Our expert team of doctors and state-of-the-art facilities
          ensure that you receive the best treatment for your health and wellness needs. Whether you&#39;re seeking
          routine check-ups or specialized treatments, we are here to support your health journey every step of the way.
        </p>
        <div style={styles.btnContainer}>
          <Link
            href="/patient"
            style={{ ...styles.btn, ...styles.loginBtn, borderRadius: '30px' }}
            onMouseEnter={(e) => handleMouseEnter(e, 'login')}
            onMouseLeave={(e) => handleMouseLeave(e, 'login')}
          >
            <FaUser style={{ marginRight: '10px' }} />
            Continue as a patient
          </Link>
          <Link
            href="/doctor"
            style={{ ...styles.btn, ...styles.signupBtn, color: 'black', borderRadius: '30px' }}
            onMouseEnter={(e) => handleMouseEnter(e, 'signup')}
            onMouseLeave={(e) => handleMouseLeave(e, 'signup')}
          >
            <FaUserMd style={{ marginRight: '10px' }} />
            Continue as a Doctor
          </Link>
          <Link
            href="/hospc"
            style={{ ...styles.btn, ...styles.signupBtn, color: 'black', borderRadius: '30px' }}
            onMouseEnter={(e) => handleMouseEnter(e, 'signup')}
            onMouseLeave={(e) => handleMouseLeave(e, 'signup')}
          >
            <FaUsers style={{ marginRight: '10px' }} />
            or join our community
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}
