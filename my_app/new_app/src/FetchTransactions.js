import React from 'react'
import SingRow from './SingRow'
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, styled  } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 14,
    textAlign:'center'
}));

export default function FetchTransactions({ hashe, events, from, to, value }) {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  // const classes = useStyles();

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - hashe.length) : 0;


  return (
    <div>
      <div>
        <TableContainer sx={{ maxHeight: "100%" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead >
              <TableRow>
                <StyledTableCell>Tx hash</StyledTableCell>
                <StyledTableCell>Event</StyledTableCell>
                <StyledTableCell>From</StyledTableCell>
                <StyledTableCell>To</StyledTableCell>
                <StyledTableCell>Value</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                hashe.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((hash, index) => {
                  return <SingRow key={hash} hash={hash} events={events} from={from} to={to} value={value[index]} />
                })
              }
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={hashe.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
}