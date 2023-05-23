import styled, { css } from 'styled-components/macro';

interface IStA11yHidden {
  as?: string;
  focusable?: boolean;
}

const StA11yHidden =
  styled.span <
  IStA11yHidden >
  `
  overflow: hidden;
  position: ${(props) => (props.as === 'caption' ? 'static' : 'absolute')};
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: circle(0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;

  &:focus {
    ${(props) =>
      props.focusable &&
      css`
        overflow: initial;
        position: static;
        clip: auto;
        clip-path: unset;
        width: initial;
        height: initial;
        margin: initial;
        white-space: initial;
      `}
  }
`;

export default StA11yHidden;
