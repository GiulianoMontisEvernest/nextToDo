import Link from 'next/link';
import { StyledLink } from './styled';

function NavLink({ href, name }) {
  return (
    <Link href={href} passHref>
      <StyledLink>{name}</StyledLink>
    </Link>
  );
}

export default NavLink;
