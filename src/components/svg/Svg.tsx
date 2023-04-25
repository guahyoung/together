import { string, number, oneOfType } from 'prop-types';
import styled, { css } from 'styled-components/macro';
import { rem } from '@/theme/utils';

const StSvg = styled.svg`
  width: ${(props) => rem(props.width)};
  height: ${(props) => rem(props.height)};
  display: inline-block;

  ${(props) =>
    props.tabletW &&
    props.tabletH &&
    css`
      @media (min-width: 768px) {
        width: ${(props) => rem(props.tabletW)};
        height: ${(props) => rem(props.tabletH)};
      }
    `}

  ${(props) =>
    props.desktopW &&
    props.desktopH &&
    css`
      @media (min-width: 1920px) {
        width: ${(props) => rem(props.desktopW)};
        height: ${(props) => rem(props.desktopH)};
      }
    `}
`;

const Svg = ({
  id,
  desktopW,
  desktopH,
  tabletW,
  tabletH,
  width,
  height,
  ...restProps
}) => {
  return (
    <StSvg
      width={width}
      height={height}
      tabletW={tabletW}
      tabletH={tabletH}
      desktopW={desktopW}
      desktopH={desktopH}
      {...restProps}
    >
      <use href={`/assets/sprite.svg#${id}`} />
    </StSvg>
  );
};

export default Svg;

Svg.propTypes = {
  id: string.isRequired,
  desktopW: oneOfType([number, string]),
  desktopH: oneOfType([number, string]),
  tabletW: oneOfType([number, string]),
  tabletH: oneOfType([number, string]),
  width: oneOfType([number, string]).isRequired,
  height: oneOfType([number, string]).isRequired,
};
