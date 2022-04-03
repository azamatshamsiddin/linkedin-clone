import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="login logo"/>
        </a>

        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-hero.svg" alt="hero"/>
        </Hero>
        <Form>
          <Google>
            <img src="/images/google.svg" alt="google logo"/>
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  )
}


const Container = styled.div`
  padding: 0;
`;
const Nav = styled.div`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  flex-wrap: nowrap;
  justify-content: space-between;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;
const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  //padding-bottom: 130px;
  //padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  margin: auto;
  align-items: center;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0;
  }

`;

const Hero = styled.div`
  width: 100%;

  h1 {
    font-size: 56px;
    line-height: 70px;
    font-weight: 200;
    color: #2977c9;
    padding-bottom: 0;
    width: 55%;
    @media (max-width: 768px) {
      width: 100%;
      line-height: 2;
      font-size: 20px;
      text-align: center;
    }
  }

  img {
    width: 100%;
    //z-index: -1;
    max-width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      position: initial;
      height: initial;
      width: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
    width: 100%;
  }
`;
const Google = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 28px;
  width: 100%;
  height: 56px;
  box-shadow: inset 0 0 0 1px rgb(0, 0,0 / 60%), inset 0 0 0 2px rgb(0, 0,0 / 0%), inset 0 0 0 1px rgb(0, 0,0 / 0%);

  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }


`;
export default Login
