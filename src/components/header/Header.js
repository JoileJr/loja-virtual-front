import { styled } from "styled-components"
import SearchInput from "../searchInput/SearchInput"

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }
`

const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
    font-family: 'Saira Stencil One', cursive;
`

const Header = (props) => {
  return(
    <TagHeader>
    <Logo>Boutique da Daiani</Logo>
    <div>
        <SearchInput/>
    </div>
    </TagHeader>
    )
}

export default Header