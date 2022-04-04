import styled from "styled-components";
import {Link, NavLink} from "react-router-dom";

const Header = () => {
  return (<Container>
    <Content>
      <Logo>
        <Link to="/home">
          <img src="/images/home-logo.svg" alt="home logo"/>
        </Link>
      </Logo>
      <Search>
        <div>
          <input type="text" placeholder="Search"/>
        </div>
        <SearchIcon>
          <img src="/images/search-icon.svg" alt="search icon"/>
        </SearchIcon>
      </Search>
      <Nav>
        <NavListWrap>
          <NavList>
            <NavLink to="/home">
              <img src="/images/nav-home.svg" alt="home icon"/>
              <span>Home</span>
            </NavLink>
          </NavList>

          <NavList>
            <NavLink to="/network">
              <img src="/images/nav-network.svg" alt="network icon"/>
              <span>My Network</span>
            </NavLink>
          </NavList>
          <NavList>
            <NavLink to="/jobs">
              <img src="/images/nav-jobs.svg" alt="jobs icon"/>
              <span>Jobs</span>
            </NavLink>
          </NavList>
          <NavList>
            <NavLink to="/messaging">
              <img src="/images/nav-messaging.svg" alt="messaging icon"/>
              <span>Messaging</span>
            </NavLink>
          </NavList>
          <NavList>
            <NavLink to="/notifications">
              <img src="/images/nav-notifications.svg" alt="notifications icon"/>
              <span>Notifications</span>
            </NavLink>
          </NavList>

          <User>
            <Link to="/home">
              <img src="/images/user.svg" alt="user icon"/>
              <span>Me</span>
              <img src="/images/down-icon.svg" alt="down icon"/>
            </Link>

            <SignOut>
              <NavLink to="/home">
                Sign out
              </NavLink>
            </SignOut>
          </User>

          <Work>
            <Link to="/home">
              <img src="/images/nav-work.svg" alt="work icon"/>
              <span>Work</span>
              <img src="/images/down-icon.svg" alt="down icon"/>
            </Link>
          </Work>

        </NavListWrap>
      </Nav>


    </Content>
  </Container>)
}

const Container = styled.div`
  width: 100vw;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: 0 24px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;

`;

export default Header
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.div`
  font-size: 0;
`;
const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;

  & > div {
    max-width: 280px;

    input {
      background-color: #eef3f8;
      border-radius: 4px;
      width: 218px;
      box-shadow: none;
      color: rgba(0, 0, 0, 0.9);
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      vertical-align: text-top;
      border: 1px solid transparent;
      outline: none;

      &:focus {
        border-color: #0a66c2;
      }
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  top: 10px;
  left: 12px;
  margin: 0;
  pointer-events: none;
`;

const Nav = styled.nav`
  margin-left: 0;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #fff;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;

  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: #fff;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
`;

const User = styled(NavList)`
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  &:hover {
    ${SignOut} {
      display: block;
    }
  }
`;
const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;


