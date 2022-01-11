import Link from 'next/link';
import styled from '@emotion/styled';

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

function NavLink({ href, name }) {
  return (
    <Link href={href} passHref>
      <StyledLink>{name}</StyledLink>
    </Link>
  );
}

export default NavLink;
