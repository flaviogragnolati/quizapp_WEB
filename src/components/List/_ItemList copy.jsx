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
import { Link, useHistory, useParams } from "react-router-dom";
import {
  delateSubject,
  editSubject,
  delateQuiz,
} from "views/School/SchoolSlice";
import { useDispatch } from "react-redux";
import ModalTeacher from "./Modal";
// import getInitials from 'src/utils/getInitials';
import { enrollToSudent, activationQuiz } from "views/Teacher/TeacherSlice";


const useStyles = makeStyles((theme) => ({
  root: {
    margin: "none",
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  button: {
    padding: "16px 5px",
  },
  Table: {
    whidth: "auto",
    margin: "none",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
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
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const params = useParams()
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [QuizId, setQuizId] = useState(0);
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
    if (name === "Editar Preguntas") {
      History.push(`/question-loader/${e}`);
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
    if (name === "Borrar Quiz") {
      dispatch(delateQuiz(e));
    }
    if (name === "TEACHER") {
      setOpen(true);
      setQuizId(e);
    }
    if (name === "Enrolar") {
      History.push(`/enroll-list/${e}`);
    }
    if (name === "Aceptar En Quiz") {
      dispatch(enrollToSudent({ QuizId:params.id , UserId: e , accepted:true}))
    }
    if (name === "Rechazar") {
      dispatch(enrollToSudent({ QuizId:params.id , UserId: e , accepted:false}))
    }
    if (name === "Activar/Desactivar") {
      dispatch(activationQuiz(e))
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
      {customers[0] ? (
        <>
          <Box Width={whidth ? whidth : 1}>
            <Table size={"small"} className={customers ? "s" : null}>
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
                {customers &&
                  customers.slice(0, limit).map((customer) => (
                    <TableRow
                      hover
                      key={customer.id}
                      selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedCustomerIds.indexOf(customer.id) !== -1
                          }
                          onChange={(event) =>
                            handleSelectOne(event, customer.id)
                          }
                          value="true"
                        />
                      </TableCell>
                      {customer.avatarUrl && customer.name ? (
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
                            {customer.name && (
                              <Typography color="textPrimary" variant="body1">
                                {customer.name}
                              </Typography>
                            )}
                          </Box>
                        </TableCell>
                      ) : customer.name ? <TableCell>{customer.name}</TableCell> : null}
                      {customer.Subject && (
                        <TableCell>{customer.Subject.name}</TableCell>
                      )}
                      {customer.description && (
                        <TableCell>{customer.description}</TableCell>
                      )}
                      {customer.quiz && <TableCell>{customer.quiz}</TableCell>}
                      {customer.review && (
                        <TableCell>{customer.review}</TableCell>
                      )}
                      {customer.alumnos && (
                        <TableCell>{customer.alumnos}</TableCell>
                      )}
                      {customer.firstName && customer.lastName ? (
                        <TableCell>{`${customer.firstName} ${customer.lastName}`}</TableCell>
                      ) : null}
                      {customer.email && (
                        <TableCell>{customer.email}</TableCell>
                      )}
                      {customer.address && (
                        <TableCell>
                          {customer.address.city}, {customer.address.state},{" "}
                          {customer.address.country}
                        </TableCell>
                      )}

                      {customer.phone && (
                        <TableCell>{customer.phone}</TableCell>
                      )}
                      {customer.active === false ? (<TableCell>Desactivado</TableCell>) : customer.active === true ? (<TableCell>Activado</TableCell>) : null}
                      {ButtonName && ButtonName[0] && (
                        <TableCell>
                          <Button
                            className={classes.button}
                            name={ButtonName[0]}
                            id={customer.id}
                            onClick={() =>
                              HandleClick(customer.id, ButtonName[0])
                            }
                          >
                            {ButtonName[0]}
                          </Button>
                        </TableCell>
                      )}
                      {ButtonName && ButtonName[1] && (
                        <TableCell>
                          <Button
                            className={classes.button}
                            name={ButtonName[1]}
                            onClick={() =>
                              HandleClick(customer.id, ButtonName[1])
                            }
                          >
                            {ButtonName[1]}
                          </Button>
                        </TableCell>
                      )}
                      {ButtonName && ButtonName[2] && (
                        <TableCell>
                          <Button
                            className={classes.button}
                            classes
                            name={ButtonName[2]}
                            onClick={() =>
                              HandleClick(customer.id, ButtonName[2])
                            }
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
        </>
      ) : null}
      <ModalTeacher Id={QuizId} open={open} setOpen={setOpen}></ModalTeacher>
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired,
};

export default Results;