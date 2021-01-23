import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import styled from 'styled-components';

const SidebarDiv = styled.div`
  background-color: blue;
  border-width: 1rem;
  border-color: gold;
  padding: 1rem;
  align-items: center;
`;
function FilterSidebar() {
  return <SidebarDiv>filter sidebar</SidebarDiv>;
}
export default FilterSidebar;
