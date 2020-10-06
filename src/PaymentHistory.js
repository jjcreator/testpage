import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Box, Table, TableHead, TableBody, TableCell, TableRow, TableFooter, TablePagination} from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import MyChip from './MyChip.js';

const useStyles = makeStyles((theme)=> ({
  root: {
    width: "100%",
    padding: 0
  },
  cardContent: {
    padding: 0
  },
  topBox: {
      display: "flex",
      justifyContent: "space-between",
      padding: "20px 40px 20px 20px"
  },
  table: {
      width: "100%"
  },
  selected: {
      backgroundColor: "#FAFAFA !important",
      color: theme.palette.textSecondary.main
  },
  flex: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
  },
  greyText: {
      color: theme.palette.textSecondary.main
  },
  green: {
      color: "#4CAF50"
  },
  red: {
      color: "#F44336"
  },
  normalWeight: {
    fontWeight: "500"
  },
  pagination: {
      border: "none"
  }
}));



function createData(ticked, date, amount, plan, paymentMethod) {
    return { ticked, date, amount, plan, paymentMethod };
  }

const rows = [
    createData(true, "Thu, 12 July, 2018", "$204.96", "PRO", "Visa 4*** **** **** 9221"),
    createData(false, "Sat, 12 July, 2018", "$408.62", "BASIC", "Bank Account 3**** 9221"),
    createData(true, "Thu, 12 July, 2018", "$260.04", "PREMIUM", "Visa 4*** **** **** 9221"),
    createData(true, "Sat, 12 July, 2018", "$699.45", "PRO", "Bank Account 3**** 9221"),
    createData(true, "Sat, 12 July, 2018", "$699.45", "PRO", "Bank Account 3**** 9221"),
    createData(false, "Thu, 14 July, 2018", "$204.96", "PREMIUM", "Visa 4*** **** **** 9221"),
    createData(false, "Sat, 14 July, 2018", "$408.62", "BASIC", "Bank Account 3**** 9221"),
    createData(true, "Thu, 15 July, 2018", "$260.04", "PREMIUM", "Visa 4*** **** **** 9221"),
    createData(true, "Sat, 15 July, 2018", "$699.45", "PRO", "Bank Account 3**** 9221"),
    createData(false, "Sat, 17 July, 2018", "$699.45", "PRO", "Bank Account 3**** 9221"),
    createData(true, "Thu, 17 July, 2018", "$204.96", "PRO", "Visa 4*** **** **** 9221"),
    createData(false, "Sat, 19 July, 2018", "$408.62", "BASIC", "Bank Account 3**** 9221"),
    createData(true, "Thu, 19 July, 2018", "$260.04", "PREMIUM", "Visa 4*** **** **** 9221"),
    createData(false, "Sat, 22 July, 2018", "$699.45", "BASIC", "Bank Account 3**** 9221"),
    createData(true, "Sat, 25 July, 2018", "$699.45", "PRO", "Bank Account 3**** 9221"),
];

export default function PaymentHistory(props) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  const classes = useStyles();

  const renderChips = chipType => {
      switch(chipType) {
          case "PRO": return <MyChip size="small" label="PRO" type="blue"/>;
          case "BASIC": return <MyChip size="small" label="BASIC" type="red"/>;
          case "PREMIUM": return <MyChip size="small" label="PREMIUM" type="green"/>;
          default: break;
      }
  }

  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent classes={{root: classes.cardContent}}>
        <Box className={classes.topBox}>
            <Box>
                <Typography variant="subtitle1" className={classes.normalWeight}>Payment history</Typography>
                <Typography variant="body2" color="textSecondary" align="left" className={classes.normalWeight}>See All Invoices</Typography>
            </Box>
            <Box>
                <GetAppIcon color="primary"/>
            </Box>
        </Box>
        <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell align="left">Amount</TableCell>
                    <TableCell align="left">Plan</TableCell>
                    <TableCell align="left">Payment Method</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {(rowsPerPage > 0
                    ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : rows
                    )
                    .map(row => (
                    <TableRow selected={row.ticked? false: true} classes={{selected: classes.selected, hover: classes.selected}} key={rows.indexOf(row)}>
                        <TableCell component="th" scope="row" align="center">
                            <Box className={classes.flex}>
                                {row.ticked? <CheckIcon className={classes.green}/> : <ClearIcon className={classes.red}/>}
                            </Box> 
                        </TableCell>
                        <TableCell align="left" className={classes.greyText}>{row.date}</TableCell>
                        <TableCell align="left" className={row.ticked? "": classes.greyText}>{row.amount}</TableCell>
                        <TableCell align="left">{renderChips(row.plan)}</TableCell>
                        <TableCell align="left" className={row.ticked? "": classes.greyText}>{row.paymentMethod}</TableCell>
                    </TableRow>
                ))}
                {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                    </TableRow>
                )}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TablePagination
                    className={classes.pagination}
                    rowsPerPageOptions={[5, 10, 15, { label: 'All', value: -1 }]}
                    colSpan={5}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                        inputProps: { 'aria-label': 'rows per page' },
                        native: true,
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </TableRow>
            </TableFooter>
        </Table>
        
      </CardContent>
    </Card>
  );
}