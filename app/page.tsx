'use client';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { FaHeartbeat, FaUserMd,FaSearch, FaHospital,FaEye,FaList , FaStethoscope, FaUser,FaFacebook,FaTwitter,FaInstagram,FaEdit } from 'react-icons/fa';
// Styled Link component
const StyledLink = styled.a`
  display: flex;
  flex-direction: column; /* This stacks the icon on top of the text */
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    color: #FF5733 ;  /* Changes color to red on hover */
  }

  & svg {
    font-size: 2rem; /* Adjust icon size */
    margin-bottom: 0px; /* Adds space between the icon and text */
  }
`;

const HomePage = () => {
  const [visible, setVisible] = useState(false);
  const cardsRef = useRef(null); // Reference for the card container

  // Scroll cards horizontally every 1 second
 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll('.pop-up');
    elements.forEach(element => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <Image style={{ width: '100px', height: 'auto' }} src="https://www.apolloadluxhospital.co/assets/images/ApolloAdluxLogo.png" alt="logo" />
        </div>
        <ul className="nav-links">
          <li style={{ color: 'green' }}><FaHospital style={{ marginLeft: '18px' }} />Home</li>
          <Link href="/about" passHref>   <StyledLink><FaUserMd style={{ marginLeft: '-2px', fontSize:'20px',marginTop:'-2px'}} />About </StyledLink></Link>
          <Link href="/services" passHref>
            <StyledLink>
              <FaStethoscope style={{ fontSize: '20px', marginRight: '2px' }} />Services
            </StyledLink>
          </Link>      
          <Link href="/search" passHref>   <StyledLink><FaSearch style={{ marginLeft: '-2px', fontSize:'20px',marginTop:'-2px'}} />Find a doctor </StyledLink></Link>

          <Link href="/register" passHref>   <StyledLink><FaEdit style={{ marginLeft: '-2px', fontSize:'20px',marginTop:'-2px'}} />Register </StyledLink></Link>
          <Link href="/appopatient" passHref>
            <StyledLink>
              <FaList style={{ fontSize: '20px', marginRight: '2px' }} />My Appointments
            </StyledLink>
          </Link>
<Link href="/reglist" passHref>
            <StyledLink>
              <FaEye style={{ fontSize: '20px', marginRight: '2px' }} />View Tables
            </StyledLink>
          </Link> 
                <Link href="/contact" passHref>   <StyledLink><FaHeartbeat style={{ marginLeft: '-2px', fontSize:'20px',marginTop:'-2px'}} />Contact </StyledLink></Link>
          <Link href="/login" passHref>   <StyledLink><FaUser style={{ marginLeft: '-2px', fontSize:'20px',marginTop:'-2px'}} />Login </StyledLink></Link>
        </ul>
      </nav>

      <div className="carousel">
        <div className="carousel-item">
          <Image src="https://www.apolloadluxhospital.co/images/sliders/desktop-slider-a0dTeVBkc3gzdlNLK2pYK1E5SG9HRG9Jdy85d2J1NUE2Ulc1QWFVMkU2ND0=.jpg" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <Image src="https://www.apolloadluxhospital.co/images/sliders/desktop-slider-azh6SVZsWWEwS0JVdG02RTVTUHZ0Z0h4aDNlWElBZUYzakNJa3pvRlRuZz0=.jpg" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <Image src="https://www.apolloadluxhospital.co/images/sliders/desktop-slider-ZzZzY1gxdG1aby9SQzJwZ3FUUUdnWkRLcU1sVTlhUmJ3M0kxUEJZYXNXQT0=.jpeg" alt="Slide 3" />
        </div>
      </div>

      <div style={{ marginTop: '100px' }} className="content">
        <div style={{ marginLeft: '100px' }} className="left">
          <h3 style={{ color: '#3043b9', fontWeight: 'bolder', fontSize: '28px' }} className={`pop-up ${visible ? 'show' : ''}`}>Welcome to Apollo Adlux</h3>
          <h1 style={{ color: 'black', fontWeight: 'bolder', fontSize: '35px' }} className={`pop-up ${visible ? 'show' : ''}`}>Explore Medical<br />Treatment Tailored to <br />Meet Your Needs</h1>
        </div>
        <div className="right">
          <h3 style={{ color: 'black', fontWeight: 'bolder' }} className={`pop-up ${visible ? 'show' : ''}`}>Namaste,</h3>
          <p style={{ color: 'black' }} className={`pop-up ${visible ? 'show' : ''}`}>
            Welcome to Apollo Adlux Hospital, Kerala&#39;s first Apollo hospital and <br />
            Apollo&#39;s 73rd hospital in India. We are here to redefine the healthcare<br />
            experience and standards of the people in this community. With our <br />
            highly skilled medical fraternity, state-of-the-art facility, and<br />
            professional management team, we are dedicated to providing<br />
            advanced medical care and treatment in a compassionate and<br />
            personalized manner. We look forward to serving you and your family <br />
            with 3E&#39;s - Excellence, Expertise, and Empathy.
          </p>
        </div>
      </div>

      {/* Parallax Section */}
      <div style={{marginTop:'100px',marginBottom:'100px'}} className="parallax-section">
        <div className="parallax-container">
          <div className="stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Beds</p>
            </div>
            <div className="stat">
              <h3>100+</h3>
              <p>Qualified Doctors</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>24 Hour Services</p>
            </div>
          </div>
          <Image src="https://www.apolloadluxhospital.co/images/sliders/desktop-slider-V1hBcFhhQW5LWm5KcHBBdUl5QTNOVE5STVQ4QlhXVWdjMmIwaDVvTG1yST0=.webp" alt="Parallax Image" />
        </div>
      </div>

      {/* Centers of Excellence Section with Horizontal Scrolling */}
      <div className="centers-of-excellence">
  <h2 className="pop-up-title">Our Centers of Excellence</h2>
  <div 
    ref={cardsRef} 
    style={{
      display: 'flex',
      gap: '30px',
      transition: 'transform 1s linear',
      overflowX: 'auto', // Allow horizontal scrolling
      padding: '10px 0', // Optional: To add space around the cards
      scrollBehavior: 'smooth', // Smooth scroll effect
      scrollbarWidth: 'none', // Firefox specific (hides the scrollbar)
      msOverflowStyle: 'none', // Internet Explorer and Edge
    }}
  >
    <div className="card" style={{ flex: '0 0 auto' }}>
      <Image src="https://www.apolloadluxhospital.co/images/services/image44.jpeg" alt="Center 1" />
      <h3>Heart Care</h3>
      <p>Leading heart care treatments with state-of-the-art technology and experienced doctors.</p>
    </div>
    <div className="card" style={{ flex: '0 0 auto' }}>
      <Image src="https://www.apolloadluxhospital.co/images/services/image29.jpeg" alt="Center 2" />
      <h3>Critical care</h3>
      <p>Critical care services provide extreme care for critical injuries from accidents.</p>
    </div>
    <div className="card" style={{ flex: '0 0 auto' }}>
      <Image src="https://www.apolloadluxhospital.co/images/services/image21.jpeg" alt="Center 3" />
      <h3>Orthopedics</h3>
      <p>Comprehensive orthopedic care, including advanced surgeries and treatments for musculoskeletal issues.</p>
    </div>
    <div className="card" style={{ flex: '0 0 auto' }}>
      <Image src="https://www.apolloadluxhospital.co/images/services/image47.jpeg" alt="Center 4" />
      <h3>Pulmonology</h3>
      <p>Apollo Adlux Hospital is the trusted name for providing state-of-the-art services in the field of pulmonary medicine.</p>
    </div>
    <div className="card" style={{ flex: '0 0 auto' }}>
      <Image src="https://www.apolloadluxhospital.co/images/services/image33.jpeg" alt="Center 5" />
      <h3>Neurosurgery</h3>
      <p>Advanced neurosurgery services, providing expert care for brain and spine conditions.</p>
    </div>
    <div className="card" style={{ flex: '0 0 auto' }}>
      <Image src="https://www.apolloadluxhospital.co/images/services/image33.jpeg" alt="Center 6" />
      <h3>Nephrology</h3>
      <p>At Apollo Adlux Hospital’s Department of Nephrology, we understand that kidney disease can be a difficult journey.</p>
    </div>
  </div>
</div><br></br>

<footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 style={{fontWeight:'bolder'}}>At Appolo Adlux<br></br> Hospital Your Health Matters<br></br>To Us</h3>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/patient">Appointment</Link></li>
            <li><Link href="#">FAQs</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>123 Health St, Cityville</li>
            <li>Email: contact@hospital.com</li>
            <li>Phone: +123 456 7890</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><Link href="#" className="social-icon"><FaFacebook/></Link></li>
            <li><Link href="#" className="social-icon"><FaTwitter/></Link></li>
            <li><Link href="#" className="social-icon"><FaInstagram/></Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Appolo hospitals. All rights reserved.</p>
      </div>
    </footer>

      <style jsx>{`
        .navbar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background: rgba(0, 0, 0, 0.5);
          z-index: 100;
        }

        .logo {
          color: white;
          font-size: 24px;
          font-weight: bold;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 40px;
        }

        .nav-links li {
          font-size: 18px;
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .nav-links li:hover {
          color: #ff6347;
        }

        .carousel {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .carousel-item {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0;
          left: 100%;
          transition: left 1s ease-in-out;
        }

        .carousel-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .carousel-item:nth-child(1) {
          animation: slide 9s infinite;
        }

        .carousel-item:nth-child(2) {
          animation: slide 9s infinite 3s;
        }

        .carousel-item:nth-child(3) {
          animation: slide 9s infinite 6s;
        }

        @keyframes slide {
          0% {
            left: 100%;
          }
          33% {
            left: 0%;
          }
          66% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        .content {
          display: flex;
          justify-content: space-between;
          padding: 40px;
          gap: 30px;
        }

        .left, .right {
          flex: 1;
        }

        .pop-up {
          opacity: 0;
          transform: translateY(120px);
          transition: opacity 1s, transform 1s;
        }

        .pop-up.show {
          opacity: 1;
          transform: translateY(0);
        }

        

       .parallax-section {
  position: relative;
}

.parallax-container {
  position: relative;
}

.stats {
  position: absolute;
  top: 10px; /* 10px from the bottom of the container */
  left: 135px; /* 10px from the right of the container */
  display: flex; /* Flexbox to arrange items in a row */
  gap: 60px; /* Space between the items */
  color: green; /* Ensure the text is readable over the image */
  z-index: 10; /* Make sure stats appear over the image */
}

.stat {
  text-align: center; /* Center the text inside each stat */
}

.stat h3 {
  font-size: 2rem; /* Smaller font size to fit on the same line */
  font-weight: bold;
}

.stat p {
  font-size: 1.5rem;
}


        

        

        .centers-of-excellence {
          text-align: center;
          padding: 40px;
          background-color: #f9f9f9;
        }

        .centers-of-excellence h2 {
          font-size: 2.5rem;
          color: #3043b9;
          margin-bottom: 30px;
          font-weight: bold;
        }

        .cards {
          display: flex;
          gap: 30px;
          justify-content: center;
        }

         .card {
          flex-shrink: 0;
          width: 300px;
          height: 350px;
          background: #f5f5f5;
          border-radius: 8px;
          text-align: center;
          overflow: hidden;
        }

        .card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .card h3 {
          font-size: 20px;
          color: #3043b9;
          margin: 10px 0;
        }

        .card p {
          font-size: 14px;
          color: #555;
          padding: 0 10px;
        }

       /* styles/Footer.module.css */

.footer {
  background-color:rgb(12, 12, 12); /* Blue background */
  color: white;
  padding: 40px 0;
  font-family: Arial, sans-serif;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}

.footer-section {
  flex: 1;
  margin: 0 20px;
}

.footer-section h3 {
  font-size: 20px;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 8px;
}

.footer-section ul li a {
  color: white;
  text-decoration: none;
}

.footer-section ul li a:hover {
  text-decoration: underline;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-icon {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.footer-bottom {
  background-color:rgb(43, 43, 44);
  text-align: center;
  padding: 20px 0;
}

.footer-bottom p {
  margin: 0;
  font-size: 14px;
}


      `}</style>
    </div>
  );
};

export default HomePage;
