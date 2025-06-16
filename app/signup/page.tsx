'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaUser, FaLock, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function SignUp() {
  const styles: { [key: string]: React.CSSProperties } = {
    mainContainer: {
      position: 'relative',
      width: '100%',
      height: '100vh',
      backgroundImage: 'url("/images/360_F_302758568_XJea7KU2j3cHnysHC0bvfAOFEdEb7X9U.jpg")',
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
    },
    formContainer: {
      background: 'rgba(0, 0, 0, 0.85)',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
      width: '100%',
      maxWidth: '400px',
      marginTop: '20px',
    },
    inputGroup: {
      marginBottom: '20px',
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      padding: '12px',
      fontSize: '16px',
      borderRadius: '30px',
      border: '1px solid #ccc',
      backgroundColor: '#f9f9f9',
      color: '#333',
      outline: 'none',
      width: '320px',
    },
    inputIcon: {
      position: 'absolute',
      left: '12px',
      top: '16px',
      color: '#0073e6',
    },
    inputWrapper: {
      position: 'relative',
    },
    btn: {
      padding: '12px 30px',
      borderRadius: '30px',
      fontSize: '18px',
      fontWeight: 500,
      textDecoration: 'none',
      textTransform: 'uppercase',
      cursor: 'pointer',
      display: 'inline-block',
      textAlign: 'center',
      transition: 'background-color 0.3s, transform 0.3s',
      width: '42%',
      backgroundColor: '#0073e6',
      color: 'white',
      border: 'none',
    },
    btnHover: {
      backgroundColor: '#005bb5',
      transform: 'translateY(-5px)',
    },
    signinText: {
      marginTop: '20px',
      fontSize: '16px',
      color: '#ccc',
    },
    signinLink: {
      color: '#0073e6',
      textDecoration: 'none',
    },
    socialIconsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px', // Adds space between the icons
      marginTop: '20px',
    },
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = styles.btnHover.backgroundColor || '#005bb5';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = styles.btn.backgroundColor || '#0073e6';
  };

  return (
    <div style={styles.mainContainer}>
      <Image
        src="https://www.apolloadluxhospital.co/assets/images/ApolloAdluxLogo.png"
        alt="Apollo Adlux Hospital Logo"
        style={styles.logo}
      />
      <div style={styles.overlay}>
        <h1 style={styles.heading}>Create Your Account</h1>
        <div style={styles.formContainer}>
          <div style={styles.inputGroup}>
            <label style={{ color: 'white', marginBottom: '8px' }}></label>
            <div style={styles.inputWrapper}>
              <FaUser style={styles.inputIcon} />
              <input type="text" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enter your username" style={styles.input} />
            </div>
          </div>
          <div style={styles.inputGroup}>
            <label style={{ color: 'white', marginBottom: '8px' }}></label>
            <div style={styles.inputWrapper}>
              <FaLock style={styles.inputIcon} />
              <input type="password" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enter your password" style={styles.input} />
            </div>
          </div>
          <div style={styles.inputGroup}>
            <label style={{ color: 'white', marginBottom: '8px' }}></label>
            <div style={styles.inputWrapper}>
              <FaLock style={styles.inputIcon} />
              <input type="password" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Confirm your password" style={styles.input} />
            </div>
          </div>
          <Link href="/">
          <button
            style={styles.btn}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Sign Up
          </button>
          </Link>
          <div style={styles.signinText}>
            Already have an account? <Link href="/login1" style={styles.signinLink}>Login</Link>
          </div>
          <br />
          
          <div style={styles.socialIconsContainer}>
            <FaFacebook style={{ fontSize: '24px', color: '#1877f2' }} />
            <FaInstagram style={{ fontSize: '24px', color: '#e4405f' }} />
            <FaTwitter style={{ fontSize: '24px', color: '#1da1f2' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
