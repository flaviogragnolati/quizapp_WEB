import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const rows = [
  { question: "Soy una Escuela ¿Como me Registro?", answer: `Puedes contactarnos para registrarte llenando el formulario "Estoy interesado"
   que se encuentra en la pagina de inicio`, id: 1,},
  { question: "2 + 2", answer: "4", id: 2 },
  { question: "3 + 3", answer: "6", id: 3 },
  { question: "4 + 4", answer: "8", id: 4 },
];

const useStyles = makeStyles({
  table: {
    width: "78vw",
    border: "1px solid #e0e0e0",
  },
  paper_QandA: {
    display: "flex",
    width: "85vw",
    placeContent: "center",
    padding: "60px",
    margin: "60px",
  },
  div_QandA: {
    display: "flex",
    placeContent: "center",
  },
  arrow_center: {
    verticalAlign: "baseline",
  },
  tableBody: {
    verticalAlign: "baseline",
  },
  arrow_style: {
    width: '20px',
  },
});

function QandA() {

  const [open,setOpen] = useState(0)
  const classes = useStyles();

  const handleOpen = (id) => {
    if (open === id) {setOpen(0)}
    if (open !== id) {setOpen(id)}

  }



  return (
    <div className={classes.div_QandA}>
      <TableContainer className={classes.paper_QandA} component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableBody className={classes.tableBody}>
            {rows.map((row) => (
            <>
                <StyledTableRow className={classes.arrow_center} key={row.name}>
                    <StyledTableCell align="left">
                        <Button onClick={(e) => handleOpen(row.id)}><ArrowDownwardIcon /></Button>
                        {row.question}
                    </StyledTableCell>
                </StyledTableRow>
                {open === row.id ?
                <StyledTableRow id={row.id} key={row.name}>
                    <StyledTableCell Style="padding: 22px 45px;" >{row.answer}</StyledTableCell>
                </StyledTableRow> : null}
            </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default QandA;
