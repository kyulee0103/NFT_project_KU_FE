import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useWindowScrollEvent } from '../../hooks/useScrollEvent';
import { checkIsInViewport } from '../CheckViewPort';

export type DirectionType = 'top' | 'bottom' | 'right' | 'left';

export type ScrollRevealSlideAnimationProps = {
  children: React.ReactNode;
  direction?: DirectionType;
  reLoading: boolean;
};

function ScrollRevealSlideAnimation({ children, reLoading, direction = 'top' }: ScrollRevealSlideAnimationProps) {
  const elemRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  const [isInViewPort, setIsInViewPort] = useState(checkIsInViewport(elemRef?.current));

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsInViewPort(checkIsInViewport(elemRef.current));
    if (reLoading !== false) {
      setLoading(false);
    }
  }, [elemRef?.current === undefined, reLoading]); // eslint-disable-line react-hooks/exhaustive-deps

  useWindowScrollEvent(() => {
    setIsInViewPort(checkIsInViewport(elemRef.current));
  });

  return (
    <Wrapper ref={elemRef} isInViewPort={isInViewPort} direction={direction} reLoading={loading}>
      {children}
    </Wrapper>
  );
}

export default ScrollRevealSlideAnimation;

const Wrapper = styled.div<{
  isInViewPort: boolean;
  direction: DirectionType;
  reLoading: boolean;
}>`
  ${({ isInViewPort, direction }) => {
    const axis = direction === 'top' || direction === 'bottom' ? 'Y' : 'X';
    const dir = direction === 'bottom' || direction === 'right' ? -1 : 1;

    const [translateFrom, translateTo] = [`translate${axis}(${4 * dir}rem)`, `translate${axis}(0)`];
    const defaultStyle = css`
      transform: ${translateFrom};
      opacity: 0;
    `;
    const keyframe = keyframes`
        from { transform: ${translateFrom}; opacity: 0; }
        to { transform: ${translateTo}; opacity: 1; }
    `;
    const animationRule = css`
      ${keyframe} 2s ease
    `;

    return css`
      ${!isInViewPort && defaultStyle}
      animation: ${isInViewPort && animationRule};
    `;
  }}
`;
