'use client';
import Link from 'next/link';
import { FaUser, FaEdit } from "react-icons/fa";
import styled from 'styled-components';

// Styled Components
const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url("https://www.apolloadluxhospital.co/images/sliders/desktop-slider-V1hBcFhhQW5LWm5KcHBBdUl5QTNOVE5STVQ4QlhXVWdjMmIwaDVvTG1yST0=.webp");
  background-size: cover;
  background-position: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 0 20px;
`;

const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 50px;
  width: 150px;
  height: auto;
  z-index: 100;
`;

const Heading = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 400;
  max-width: 800px;
  margin-bottom: 40px;
  line-height: 1.6;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Btn = styled.a`
  padding: 12px 30px;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  transition: background-color 0.3s, transform 0.3s;
  border: none;
  text-align: center;
`;

const LoginBtn = styled(Btn)`
  background-color:rgb(26, 107, 39);
  color: white;
  &:hover {
    background-color:rgb(0, 181, 75);
    transform: translateY(-5px);
  }
`;

const SignUpBtn = styled(Btn)`
  background-color: #f3f3f3;
  color: #0073e6;
  border: 2px solid #0073e6;
  &:hover {
    background-color: #0073e6;
    color: white;
    transform: translateY(-5px);
  }
`;

export default function Home() {
  return (
    <MainContainer>
      <Logo
        src="https://www.apolloadluxhospital.co/assets/images/ApolloAdluxLogo.png"
        alt="Apollo Adlux Hospital Logo"
      />
      <Overlay>
        <Heading>Welcome to Apollo Adlux Hospital</Heading>
     <Paragraph>
  At Apollo Adlux Hospital, we offer world-class healthcare services with a commitment to providing
  compassionate and advanced medical care. Our expert team of doctors and state-of-the-art facilities
  ensure that you receive the best treatment for your health and wellness needs. Whether you&#39;re seeking
  routine check-ups or specialized treatments, we are here to support your health journey every step of the way.
</Paragraph>

        <BtnContainer>
          <Link href="/login1" passHref>
            <LoginBtn>
              <FaUser style={{ marginRight: '10px' }} />
              Login
            </LoginBtn>
          </Link>
          <Link href="/signup" passHref>
            <SignUpBtn>
              <FaEdit style={{ marginRight: '10px' }} />
              Sign Up
            </SignUpBtn>
          </Link>
        </BtnContainer>
      </Overlay>
    </MainContainer>
  );
}
