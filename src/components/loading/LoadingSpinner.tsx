import styled from 'styled-components/macro';

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const Spinner = styled.div``;

const LoadingSpinner = () => {
  return (
    <LoadingOverlay>
      <Spinner aria-label="Loading-Spinner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="200px"
          height="200px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle cx="75" cy="50" fill="#f38a9b" r="5">
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              times="0;0.1;0.2;0.3;1"
              dur="0.8695652173913042s"
              repeatCount="indefinite"
              begin="-0.7971014492753623s"
            ></animate>
            <animate
              attributeName="fill"
              values="#f38a9b;#f38a9b;#ff153c;#f38a9b;#f38a9b"
              repeatCount="indefinite"
              times="0;0.1;0.2;0.3;1"
              dur="0.8695652173913042s"
              begin="-0.7971014492753623s"
            ></animate>
          </circle>
          <circle cx="71.65063509461098" cy="62.5" fill="#f38a9b" r="5">
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              times="0;0.1;0.2;0.3;1"
              dur="0.8695652173913042s"
              repeatCount="indefinite"
              begin="-0.7246376811594203s"
            ></animate>
            <animate
              attributeName="fill"
              values="#f38a9b;#f38a9b;#ff153c;#f38a9b;#f38a9b"
              repeatCount="indefinite"
              times="0;0.1;0.2;0.3;1"
              dur="0.8695652173913042s"
              begin="-0.7246376811594203s"
            ></animate>
          </circle>
          <circle cx="62.5" cy="71.65063509461096" fill="#f38a9b" r="5">
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              times="0;0.1;0.2;0.3;1"
              dur="0.8695652173913042s"
              repeatCount="indefinite"
              begin="-0.6521739130434783s"
            ></animate>
            <animate
              attributeName="fill"
              values="#f38a9b;#f38a9b;#ff153c;#f38a9b;#f38a9b"
              repeatCount="indefinite"
              times="0;0.1;0.2;0.3;1"
              dur="0.8695652173913042s"
              begin="-0.6521739130434783s"
            ></animate>
          </circle>
          <circle cx="50" cy="75" fill="#f38a9b" r="5">
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              times="0;0.1;0.2;0.3;1"
              dur="0.8695652173913042s"
              repeatCount="indefinite"
              begin="-0.5797101449275363s"
            ></animate>
            <animate
              attributeName="fill"
              values="#f38a9b;#f38a9b;#ff153c;#f38a9b;#f38a9b"
              repeatCount="indefinite"
              times="0;0.1;0.2;0.3;1"
              dur="0.8695652173913042s"
              begin="-0.5797101449275363s"
            ></animate>
          </circle>
          <circle
            cx="37.50000000000001"
            cy="71.65063509461098"
            fill="#f38a9b"
            r="5"
          >
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              times="0;0.1;0.2;0.3;1"
              dur="0.8695652173913042s"
              repeatCount="indefinite"
              begin="-0.5072463768115941s"
            ></animate>
            <animate
              attributeName="fill"
              values="#f38a9b;#f38a9b;#ff153c;#f38a9b;#f38a9b"
              repeatCount="indefinite"
              times="0;0.1;0.2;0.3;1"
              dur="0.8695652173913042s"
              begin="-0.5072463768115941s"
            ></animate>
          </circle>
          <circle cx="28.34936490538903" cy="62.5" fill="#f38a9b" r="5">
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              times="0;0.1;0.2;0.3;1"
              dur="0.8695652173913042s"
              repeatCount="indefinite"
              begin="-0.43478260869565216s"
            ></animate>
            <animate
              attributeName="fill"
              values="#f38a9b;#f38a9b;#ff153c;#f38a9b;#f38a9b"
              repeatCount="indefinite"
              times="0;0.1;0.2;0.3;1"
              dur="0.8695652173913042s"
              begin="-0.43478260869565216s"
            ></animate>
          </circle>
          <circle cx="25" cy="50" fill="#f38a9b" r="5">
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              times="0;0.1;0.2;0.3;1"
              dur="0.8695652173913042s"
              repeatCount="indefinite"
              begin="-0.36231884057971014s"
            ></animate>
            <animate
              attributeName="fill"
              values="#f38a9b;#f38a9b;#ff153c;#f38a9b;#f38a9b"
              repeatCount="indefinite"
              times="0;0.1;0.2;0.3;1"
              dur="0.8695652173913042s"
              begin="-0.36231884057971014s"
            ></animate>
          </circle>
          <circle
            cx="28.34936490538903"
            cy="37.50000000000001"
            fill="#f38a9b"
            r="5"
          >
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              times="0;0.1;0.2;0.3;1"
              dur="0.8695652173913042s"
              repeatCount="indefinite"
              begin="-0.2898550724637681s"
            ></animate>
            <animate
              attributeName="fill"
              values="#f38a9b;#f38a9b;#ff153c;#f38a9b;#f38a9b"
              repeatCount="indefinite"
              times="0;0.1;0.2;0.3;1"
              dur="0.8695652173913042s"
              begin="-0.2898550724637681s"
            ></animate>
          </circle>
          <circle
            cx="37.499999999999986"
            cy="28.34936490538904"
            fill="#f38a9b"
            r="5"
          >
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              times="0;0.1;0.2;0.3;1"
              dur="0.8695652173913042s"
              repeatCount="indefinite"
              begin="-0.21739130434782608s"
            ></animate>
            <animate
              attributeName="fill"
              values="#f38a9b;#f38a9b;#ff153c;#f38a9b;#f38a9b"
              repeatCount="indefinite"
              times="0;0.1;0.2;0.3;1"
              dur="0.8695652173913042s"
              begin="-0.21739130434782608s"
            ></animate>
          </circle>
          <circle cx="49.99999999999999" cy="25" fill="#f38a9b" r="5">
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              times="0;0.1;0.2;0.3;1"
              dur="0.8695652173913042s"
              repeatCount="indefinite"
              begin="-0.14492753623188406s"
            ></animate>
            <animate
              attributeName="fill"
              values="#f38a9b;#f38a9b;#ff153c;#f38a9b;#f38a9b"
              repeatCount="indefinite"
              times="0;0.1;0.2;0.3;1"
              dur="0.8695652173913042s"
              begin="-0.14492753623188406s"
            ></animate>
          </circle>
          <circle cx="62.5" cy="28.349364905389034" fill="#f38a9b" r="5">
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              times="0;0.1;0.2;0.3;1"
              dur="0.8695652173913042s"
              repeatCount="indefinite"
              begin="-0.07246376811594203s"
            ></animate>
            <animate
              attributeName="fill"
              values="#f38a9b;#f38a9b;#ff153c;#f38a9b;#f38a9b"
              repeatCount="indefinite"
              times="0;0.1;0.2;0.3;1"
              dur="0.8695652173913042s"
              begin="-0.07246376811594203s"
            ></animate>
          </circle>
          <circle
            cx="71.65063509461096"
            cy="37.499999999999986"
            fill="#f38a9b"
            r="5"
          >
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              times="0;0.1;0.2;0.3;1"
              dur="0.8695652173913042s"
              repeatCount="indefinite"
              begin="0s"
            ></animate>
            <animate
              attributeName="fill"
              values="#f38a9b;#f38a9b;#ff153c;#f38a9b;#f38a9b"
              repeatCount="indefinite"
              times="0;0.1;0.2;0.3;1"
              dur="0.8695652173913042s"
              begin="0s"
            ></animate>
          </circle>
        </svg>
      </Spinner>
    </LoadingOverlay>
  );
};
export default LoadingSpinner;
