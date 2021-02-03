import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
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
} from "@material-ui/core";
import Button from "components/Home_MUI/Button";
import { Link, useHistory } from "react-router-dom";
import { delateSubject, editSubject } from "views/School/SchoolSlice";
import { useDispatch } from "react-redux";
// import getInitials from 'src/utils/getInitials';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "none",
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  Table: {
    whidth: "auto",
    margin: "none",
  },
}));

// school-quiz,quiz-loader
// PUEDE RECIBIR HASTA 3 BOTONES
/// este componente deberia recibir NOMBRE DE COLUMNAS COMO ARRAY (columnName)
/// este componente deberia recibir NOMBRE DE BOTONES COMO ARRAY ( ButtonName)
/// este componente deberia recibir DATOS COMO ARRAY DE OBJETOS (customers)

const Results = ({
  className,
  customers,
  whidth,
  columnName,
  ButtonName,
  ...rest
}) => {
  const classes = useStyles();
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [columna, setColumna] = useState(false);
  const History = useHistory();
  const dispatch = useDispatch();

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
    if (name === "EDIT QUIZ") {
      History.push("/question-loader");
    }
    if (name === "Delate Subject") {
      dispatch(delateSubject(e));
    }
    if (name === "Edit Subject") {
      History.push({
        pathname: `/subject-loader/${e}`,
        state: {
          edit: true,
        },
      });
    }
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
      {customers ? 
      <>
      <Box Width={whidth ? whidth : 1}>
        <Table size={"small"} className={customers ? 's' : null}>
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
            {customers.slice(0, limit).map((customer) => (
              <TableRow
                hover
                key={customer.id}
                selected={selectedCustomerIds.indexOf(customer.id) !== -1}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                    onChange={(event) => handleSelectOne(event, customer.id)}
                    value="true"
                  />
                </TableCell>
                <TableCell>
                  <Box alignItems="center" display="flex">
                    {customer.avatarUrl && (
                      <Avatar
                        className={classes.avatar}
                        src={customer.avatarUrl}
                      >
                        {/* {getInitials(customer.name)} */}
                        {customer.name && customer.name}
                      </Avatar>
                    )}
                    <Typography color="textPrimary" variant="body1">
                      {customer.name && customer.name}
                    </Typography>
                  </Box>
                </TableCell>
                {customer.Subject && (
                  <TableCell>{customer.Subject.name}</TableCell>
                )}
                {customer && <TableCell>{customer.description}</TableCell>}
                {customer.quiz && <TableCell>{customer.quiz}</TableCell>}
                {customer.review && <TableCell>{customer.review}</TableCell>}
                {customer.alumnos && <TableCell>{customer.alumnos}</TableCell>}

                {customer.email && <TableCell>{customer.email}</TableCell>}
                {customer.address && (
                  <TableCell>
                    {customer.address.city}, {customer.address.state},{" "}
                    {customer.address.country}
                  </TableCell>
                )}

                {customer.phone && <TableCell>{customer.phone}</TableCell>}

                {ButtonName && ButtonName[0] && (
                  <TableCell>
                    <Button
                      name={ButtonName[0]}
                      id={customer.id}
                      onClick={() => HandleClick(customer.id, ButtonName[0])}
                    >
                      {ButtonName[0]}
                    </Button>
                  </TableCell>
                )}
                {ButtonName && ButtonName[1] && (
                  <TableCell>
                    <Button
                      name={ButtonName[1]}
                      onClick={() => HandleClick(customer.id, ButtonName[1])}
                    >
                      {ButtonName[1]}
                    </Button>
                  </TableCell>
                )}
                {ButtonName && ButtonName[2] && (
                  <TableCell>
                    <Button
                      name={ButtonName[2]}
                      onClick={() => HandleClick(ButtonName[2])}
                    >
                      {ButtonName[2]}
                    </Button>
                  </TableCell>
                )}
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
      </>: null}
      
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired,
};

export default Results;
