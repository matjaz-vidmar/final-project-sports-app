import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import iconJoggingHeader from '../public/iconJoggingHeader.svg';

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  background-color: #e0e0e0;
  max-width: auto;
  position: sticky;
  top: 0;
  opacity: 90%;
  z-index: 2;
  padding: 5px;
`;
const h1Style = css`
  font-family: 'Pacifico', cursive;
  font-weight: bold;
  font-size: 30px;
  padding-top: 3px;
  font-weight: 650;
  color: #1a2169;
`;
const faviconStyle = css`
  padding: 8px;
  border: solid 2px;
  border-radius: 35px;
  border-color: black;
  position: relative;
  justify-content: center;
  display: flex;
  margin-left: 15px;
`;
const buttonsNavStyle = css`
  gap: 20px;

  align-items: space-between;
  display: flex;
  justify-content: center;
  position: relative;
`;

const headerButtonStyle = css`
  border-radius: 5px;
  width: 100px;
  height: 40px;
  left: 85px;
  top: 250px;

  text-decoration: none;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15px;
  background-color: #dcdcdc;
  color: black;
  :hover {
    background-color: #2f88ff;
    transition: 0.5s;
  }
`;
function Anchor({ children, ...restProps }) {
  // using a instead of Link since we want to force a full refresh
  return <a {...restProps}>{children}</a>;
}
export default function Header(props) {
  return (
    <header css={headerStyle}>
      <nav css={buttonsNavStyle}>
        <div css={faviconStyle}>
          <Link href="./">
            <Image src={iconJoggingHeader} alt="icon jogging header" />
          </Link>
        </div>
        <nav css={h1Style}>Sportify</nav>
      </nav>
      <nav css={headerStyle}>
        <Anchor
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;

            border-radius: 5px;
            margin-right: 20px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size: 15px;
            background-color: #e0e0e0;
            color: black;
            :hover {
              text-decoration: underline;
              transition: 0.5s;
            }
          `}
          href="/private-profile"
        >
          Profile:
          {props.user && props.user.username}
        </Anchor>
        {props.user ? (
          <Anchor
            css={css`
              display: flex;
              border: solid 2px;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              border-radius: 5px;
              width: 100px;
              height: 40px;
              left: 85px;
              top: 250px;
              text-decoration: none;
              font-family: Verdana, Geneva, Tahoma, sans-serif;
              font-size: 15px;
              background-color: #e0e0e0;
              color: black;
              :hover {
                text-decoration: underline;
                transition: 0.5s;
              }
            `}
            href="/logout"
          >
            Logout
          </Anchor>
        ) : (
          <nav css={buttonsNavStyle}>
            <Link href="./register">
              <button css={headerButtonStyle}>Register</button>
            </Link>

            <Link href="./login">
              <button css={headerButtonStyle}>Login</button>
            </Link>
          </nav>
        )}
      </nav>
    </header>
  );
}
