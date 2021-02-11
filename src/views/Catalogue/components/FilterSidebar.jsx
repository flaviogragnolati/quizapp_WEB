import React, { useState } from 'react';
import {
  Divider,
  makeStyles,
  Box,
  InputBase,
  fade,
  Button,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
import FilterGroup from './FilterGroup';
import SchoolFilterDetail from './SchoolFilterDetail';
import SubjectFilterDetail from './SubjectFilterDetail';
import QuizFilterDetail from './QuizFilterDetail';
import { useDispatch } from 'react-redux';
import { ACTIONS } from 'store/rootReducer';


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
const initialFilterValues = {
  school: null,
  subject: null,
  quiz: null,
  tag: null,
};
function FilterSidebar({page}) {
  const c = useStyles();
  const dispatch = useDispatch();
  const [filterValues, setFilterValues] = useState(initialFilterValues);
  const handleClear = () => {
    dispatch(ACTIONS.catalogue.setFilter(false));
    setFilterValues(initialFilterValues);
  };
  const handleFilter = () => {
    dispatch(ACTIONS.catalogue.filter(filterValues));
    dispatch(ACTIONS.catalogue.setFilter(true));
    page(1)
  };

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
        <FilterGroup title="Buscar por Escuela">
          <SchoolFilterDetail setFilter={setFilterValues} />
        </FilterGroup>
        <Divider />
        <FilterGroup title="Buscar por Materia">
          <SubjectFilterDetail setFilter={setFilterValues} />
        </FilterGroup>
        <Divider />
        <FilterGroup title="Buscar por Quiz">
          <QuizFilterDetail setFilter={setFilterValues} />
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
            LIMPIAR
          </Button>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            onClick={handleFilter}
          >
            BUSCAR!
          </Button>
        </Box>
      </>
    </SidebarDiv>
  );
}
export default FilterSidebar;
