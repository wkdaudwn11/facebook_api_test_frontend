import styled from "styled-components";

export const SidebarWrap = styled.div`
  width: 260px;
  height: 100%;
  float: left;

  &:after {
    clear: both;
    display: block;
    content: "";
  }
`;
