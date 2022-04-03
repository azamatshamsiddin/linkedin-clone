import styled from "styled-components";
import {Link} from "react-router-dom";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            width="16"
            height="16"
            focusable="false"
          >
            <path
              d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
          </svg>
        </SearchIcon>
      </Search>
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

  svg {
    fill: #696969
  }
`;
