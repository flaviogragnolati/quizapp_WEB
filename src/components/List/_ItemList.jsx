import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles,
} from '@material-ui/core';
import Button from 'components/Home_MUI/Button';
import { Link, useHistory, useParams } from 'react-router-dom';
import {
  deleteSubject,
  editSubject,
  delateQuiz,
} from 'views/School/SchoolSlice';
import { useDispatch } from 'react-redux';
import ModalTeacher from './Modal';
// import getInitials from 'src/utils/getInitials';
import { enrollToSudent, activationQuiz } from 'views/Teacher/TeacherSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'none',
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  button: {
    padding: '16px 5px',
  },
  Table: {
    whidth: 'auto',
    margin: 'none',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

// school-quiz,quiz-loader
// PUEDE RECIBIR HASTA 3 BOTONES
/// este componente deberia recibir NOMBRE DE COLUMNAS COMO ARRAY (columnName)
/// este componente deberia recibir NOMBRE DE BOTONES COMO ARRAY ( ButtonName)
/// este componente deberia recibir DATOS COMO ARRAY DE OBJETOS (customers)

const Results = ({
  className,
  customers = [],
  whidth,
  columnName,
  ButtonName,
  User,
  actions,
  propsNames,
  ...rest
}) => {
  const params = useParams();
  const classes = useStyles();
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const History = useHistory();
  const dispatch = useDispatch();
  let btnProps = ['add', 'edit', 'delete','activate','enroll', 'accept', 'reject']

  if (propsNames.length !== columnName.length) {
    throw new Error('Las propiedades y las columnas no coinciden');
  }

  for (const key in actions) {
    if (Object.hasOwnProperty.call(actions, key)) {
      const element = actions[key];
      if (typeof element !== 'function') {
        throw new Error(`La accion ${key} no es una funcion`);
      }
      if (!btnProps.includes(key)) {
        throw new Error(`La accion ${key} no esta en btnProps`);
      }
    }
  }

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }
    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const HandleClick = (e, name) => {
   
   
  
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];
    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(1)
      );
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      {customers[0] ? (
        <>
          <Box Width={whidth ? whidth : 1}>
            <Table size={'small'} className={customers ? 's' : null}>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.length === customers.length}
                      color="primary"
                      indeterminate={
                        selectedCustomerIds.length > 0 &&
                        selectedCustomerIds.length < customers.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  {columnName.map((name) => {
                    return <TableCell>{name}</TableCell>;
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {customers.map((info) => (
                  <TableRow
                    hover
                    key={info.id}
                    selected={selectedCustomerIds.indexOf(info.id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedCustomerIds.indexOf(info.id) !== -1}
                        onChange={(event) => handleSelectOne(event, info.id)}
                        value="true"
                      />
                    </TableCell>
                    {propsNames.map((prop) => {
                      if (btnProps.includes(prop)) {
                        return (
                          <TableCell>
                            <Button
                              className={classes.button}
                              name={prop}
                              id={info.id}
                              onClick={() => actions[prop](info.id)}
                            >
                              {prop}
                            </Button>
                          </TableCell>
                        );
                      }
                      // puse este if porque a la info de subjects la recibe dentro de otro objeto
                      if (typeof info[prop] === 'object') {
                        return (
                          <TableCell>
                            {info[prop].name ? info[prop].name : '-'}
                          </TableCell>
                        );
                      } else {
                        return (
                          <TableCell>
                            {info[prop] ||
                            typeof info[prop] === 'boolean' ||
                            info[prop] === 0
                              ? info[prop] + ''
                              : '-'}
                          </TableCell>
                        );
                      }
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
          <TablePagination
            component="div"
            count={customers.length}
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </>
      ) : null}
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired,
};

export default Results;
