import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import AGLogo from './icons/ag'
import FootprintLogo from './icons/footprint'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`;

  const Logo = () => {
  return (
    (<Link href="/" scroll={false}>
      <LogoBox>
        <AGLogo />
      </LogoBox>
    </Link>)
 );
}

export default Logo
