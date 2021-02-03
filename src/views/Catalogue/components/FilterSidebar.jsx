import React, { useState } from 'react';
import {
  Container,
  Divider,
  makeStyles,
  Box,
  InputBase,
  fade,
  Button,
  IconButton,
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
import FilterGroup from './FilterGroup';
import SchoolFilterDetail from './SchoolFilterDetail';
import SubjectFilterDetail from './SubjectFilterDetail';
import QuizFilterDetail from './QuizFilterDetail';

const SidebarDiv = styled.div`
  /* background-color: gray; */
  /* border-width: 1px;
  border-style: solid;
  border-color: gray; */
  align-items: center;
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

  const handleClear = () => {};
  const handleFilter = (filter) => {};

  return (
    <SidebarDiv>
      <>
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
      </>
      <>
        <FilterGroup title="School Filter">
          <SchoolFilterDetail />
        </FilterGroup>
        <Divider />
        <FilterGroup title="Subject Filter">
          <SubjectFilterDetail />
        </FilterGroup>
        <Divider />
        <FilterGroup title="Quiz Filter">
          <QuizFilterDetail />
        </FilterGroup>
        <Divider />
      </>
      <>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          mt={2}
        >
          <Button
            color="primary"
            variant="contained"
            size="large"
            onClick={handleClear}
          >
            CLEAR
          </Button>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            onClick={handleFilter}
          >
            FIND!
          </Button>
        </Box>
      </>
    </SidebarDiv>
  );
}
export default FilterSidebar;
