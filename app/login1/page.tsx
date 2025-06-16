'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaUser, FaLock, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useState, CSSProperties } from 'react';

const Button = () => {

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
  const x = e.pageX - e.currentTarget.offsetLeft;
  const y = e.pageY - e.currentTarget.offsetTop;
  e.currentTarget.style.setProperty('--x', `${x}px`);
  e.currentTarget.style.setProperty('--y', `${y}px`);
};

  const buttonStyle: CSSProperties = {
    position: 'relative',
    padding: '12px 30px',
    borderRadius: '30px',
    fontSize: '18px',
    fontWeight: 500,
    textDecoration: 'none',
    textTransform: 'uppercase',
    cursor: 'pointer',
    display: 'inline-block',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    backgroundColor: 'black',
    color: '#fff',
    width: '36%',
    overflow: 'hidden',
    border: '1px solid rgba(0, 0, 0, 0.5)',
  };

  return (
    <Link href="/" passHref>
    <button
      style={buttonStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => document.documentElement.style.setProperty('--clr', '#65bbf0')}
      onMouseLeave={() => document.documentElement.style.setProperty('--clr', 'transparent')}
      type="button"
    >
    
  <span>Login</span> 
      <div
        style={{
          position: 'absolute',
          top: `var(--y)`,
          left: `var(--x)`,
          transform: 'translate(-50%, -50%)',
          width: '120px',
          height: '130px',
          background: 'radial-gradient(var(--clr), transparent, transparent)',
          transition: '0.3s, top 0s, left 0s',
          opacity: 2,
        }}
      ></div>
      <div
        style={{
          content: "''",
          position: 'absolute',
          inset: '3px',
          background: '#1d1d1dcc',
          borderRadius: '50px',
        }}
      ></div>
    </button>
    </Link>
  );
};

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const styles: { [key: string]: CSSProperties } = {
    mainContainer: {
      position: 'relative',
      width: '100%',
      height: '100vh',
      backgroundImage: 'url("/images/360_F_310613409_bBe2DBeScgbycqwWqPStJK1PREze0u9S.jpg")',
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
      zIndex: 100,
    },
    heading: {
      fontSize: '48px',
      fontWeight: 700,
      marginBottom: '-15px',
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
    signupText: {
      marginTop: '10px',
      fontSize: '16px',
      color: '#ccc',
    },
    signupLink: {
      color: '#0073e6',
      textDecoration: 'none',
    },
    socialIconsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.mainContainer}>
      <Image
        src="https://www.apolloadluxhospital.co/assets/images/ApolloAdluxLogo.png"
        alt="Apollo Adlux Hospital Logo"
        style={styles.logo}
      />
      <div style={styles.overlay}>
        <h1 style={styles.heading}>Login to Your Account</h1>
        <div style={styles.formContainer}>
          <form onSubmit={(e) => e.preventDefault()}>
            <div style={styles.inputGroup}>
              <div style={styles.inputWrapper}>
                <FaUser style={styles.inputIcon} />
                <input
                  type="text"
                  placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={styles.input}
                />
              </div>
            </div>
            <div style={styles.inputGroup}>
              <div style={styles.inputWrapper}>
                <FaLock style={styles.inputIcon} />
                <input
                  type="password"
                  placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={styles.input}
                />
              </div>
            </div>
            <Button />
          </form>
          <div style={styles.signupText}>
            Don&#39;t have an account? <Link href="/signup" style={styles.signupLink}>Sign Up</Link>
          </div>
          <div style={styles.signupText}>or</div>
          <div style={styles.signupText}>
            <Link href="/dlogin" style={styles.signupLink}>Continue as a doctor</Link>
          </div>
          <div style={styles.signupText}>
            <Link href="/loginh" style={styles.signupLink}>Continue as Hospital</Link>
          </div>
          <br /><br />
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
