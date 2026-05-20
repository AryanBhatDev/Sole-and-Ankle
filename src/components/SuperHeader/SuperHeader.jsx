import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton";

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>Free shipping on domestic orders over $75!</MarketingMessage>
      <SearchInput />
      <HelpLink href="/help">Help</HelpLink>
      <UnstyledButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  min-height: 40px;
  padding: 8px 32px;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  font-size: ${14 / 16}rem;
  font-family: Raleway, "sans-serif";
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;
  padding: 0 24px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
