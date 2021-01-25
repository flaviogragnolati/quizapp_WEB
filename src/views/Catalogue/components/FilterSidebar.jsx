import React from 'react';
import {
  Container,
  Divider,
  makeStyles,
  Box,
  InputBase,
  fade,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';

const SidebarDiv = styled.div`
  background-color: gray;
  border-width: 5px;
  border-style: solid;
  border-color: green;
  align-items: center;
`;
const Title = styled.h2`
  color: ${(props) => props.theme.main};
`;

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function FilterSidebar() {
  const c = useStyles();
  return (
    <SidebarDiv>
      <Container>
        <Box mt={3}>
          <div className={c.search}>
            <div className={c.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Buscar..."
              classes={{
                root: c.inputRoot,
                input: c.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Box>
      </Container>
      <Container>
        <Box mt={5}>
          <Title>Schools</Title>
        </Box>
        <Divider />
        <Box mt={5}>filter subject</Box>
        <Divider />
        <Box mt={5}>filter quiz</Box>
        <Divider />
      </Container>
    </SidebarDiv>
  );
}
export default FilterSidebar;
