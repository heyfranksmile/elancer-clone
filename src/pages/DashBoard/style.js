import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const SizeDiv = styled.div`
  width: 96%;
  height: 96%;
  margin: auto;
  padding: 2rem 0;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    width: 1240px;
  }
`;

export const H1 = styled.h1`
  font-size: 0.9rem;
  font-weight: 800;
  padding: ${(props) => props.top} 0 ${(props) => props.bottom} 0;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    font-size: 2.2rem;
    padding: ${(props) => props.laptoptop} 0 ${(props) => props.laptopBottom} 0;
  }
`;

export const OverFlowDiv = styled.div`
  overflow: auto;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    overflow: hidden;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: start;
  width: ${(props) => props.width};
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    width: ${(props) => props.width};
  }
`;
export const MenuDiv = styled.div`
  display: none;
  @media ${TABLET} {
    display: block;
  }
  @media ${LAPTOP} {
    width: 290px;
  }
`;

export const BoardDiv = styled.div`
  width: 100%;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    width: 80%;
    margin: 0 auto;
  }
`;
export const MiddleDiv = styled.div`
  display: none;
  @media ${TABLET} {
    display: block;
  }
  @media ${LAPTOP} {
    width: 120px;
  }
`;

export const CardSpan = styled.span`
  color: white;
  font-weight: 800;
  padding: 0.7rem 0.6rem;
  background-color: ${(props) => props.bgcolor};
  margin-right: 0.5rem;
  border-radius: 0.3rem;
  text-align: center;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
    font-size: 1.1rem;
    padding: 1.2rem 0.9rem;
    border-radius: 0.6rem;
    margin-right: 0.8rem;
  }
`;

export const UlTag = styled.ul``;
export const MenuLi = styled.li`
  font-size: 1.3rem;
  font-weight: 600;
  padding: 1rem 1rem;
  border-radius: 0.6rem;
  margin-bottom: 0.2rem;
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const LiTag = styled.li`
  font-size: 0.8rem;
  font-weight: 800;
  background-color: #e1e1e1;
  padding: 0.8rem 0.6rem;
  border-radius: 0.4rem;
  margin-bottom: 0.4rem;
  @media ${TABLET} {
  }
  @media ${LAPTOP} {
  }
`;
