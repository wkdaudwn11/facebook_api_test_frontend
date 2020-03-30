import styled from "styled-components";

export const RouterWrap = styled.div`
  width: calc(100% - 260px);
  height: 100%;
  background-color: #f6f7fd;
  float: left;

  &:after {
    clear: both;
    display: block;
    content: "";
  }
`;
