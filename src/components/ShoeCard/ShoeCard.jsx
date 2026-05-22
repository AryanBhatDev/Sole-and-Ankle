import styled from "styled-components";

import { COLORS, WEIGHTS } from "../../constants";
import { formatPrice, isNewShoe, pluralize } from "../../utils";
import Spacer from "../Spacer";

const ShoeCard = ({ slug, name, imageSrc, price, salePrice, releaseDate, numOfColors }) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  const TagName = variant === "on-sale" ? "Sale" : "Just Released!";

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image alt="" src={imageSrc} />
          <Tag
            style={{
              "--background-color": variant === "on-sale" ? COLORS.primary : COLORS.secondary,
            }}
          >
            {TagName}
          </Tag>
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          {variant === "on-sale" ? (
            <PreviousPrice>{formatPrice(price)}</PreviousPrice>
          ) : (
            <Price>{formatPrice(price)}</Price>
          )}
        </Row>
        <Row>
          <ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
          {variant === "on-sale" && <SalePrice>{formatPrice(salePrice)}</SalePrice>}
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.article`
  flex: 1;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Tag = styled.div`
  position: absolute;
  top: 12px;
  right: -4px;
  padding: 7px 9px 9px 11px;
  border-radius: 2px;
  font-weight: 700;
  font-size: ${14 / 16}rem;
  height: 2rem;
  color: ${COLORS.white};
  background-color: var(--background-color);
`;

const Image = styled.img`
  width: 100%;
  border-radius: 16px 16px 4px 4px;
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  color: ${COLORS.gray[900]};
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span``;

const PreviousPrice = styled(Price)`
  color: ${COLORS.gray[700]};
  text-decoration: line-through;
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

export default ShoeCard;
