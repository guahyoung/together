import styled, { css } from 'styled-components/macro';
import { rem } from '@/theme/utils';

interface StSvgProps {
  className?: string;
  desktopW?: number | string;
  desktopH?: number | string;
  tabletW?: number | string;
  tabletH?: number | string;
  width: number | string;
  height: number | string;
}
const StSvg =
  styled.svg <
  StSvgProps >
  `
  width: ${(props) => rem(props.width)};
  height: ${(props) => rem(props.height)};
  display: inline-block;

  ${(props) =>
    props.tabletW &&
    props.tabletH &&
    css <
      StSvgProps >
      `
      @media (min-width: 768px) {
        width: ${(props) => rem(props.tabletW as number | string)};
        height: ${(props) => rem(props.tabletH as number | string)};
      }
    `}

  ${(props) =>
    props.desktopW &&
    props.desktopH &&
    css <
      StSvgProps >
      `
      @media (min-width: 1920px) {
        width: ${(props) => rem(props.desktopW as number | string)};
        height: ${(props) => rem(props.desktopH as number | string)};
      }
    `}
`;

interface SvgProps extends StSvgProps {
  id: string;
}
const Svg = ({
  id,
  desktopW,
  desktopH,
  tabletW,
  tabletH,
  width,
  height,
  ...restProps
}: SvgProps) => {
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
