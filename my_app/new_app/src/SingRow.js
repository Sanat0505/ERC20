import React from 'react'
import {TableRow, TableCell, styled } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    backgroundColor: green,
    border: 0,
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.common.black,
  fontSize: 14,
  textAlign:'center'
}));

function SingRow({hash,events,from,to,value}) {
    // console.log(hash)
  return (
    <StyledTableRow>
        <StyledTableCell>{hash.substr(0, 25)}...</StyledTableCell>
        <StyledTableCell>{events}</StyledTableCell>
        <StyledTableCell>{from.toString().substr(0, 25)}...</StyledTableCell>
        <StyledTableCell>{to.toString().substr(0, 25)}...</StyledTableCell>
        <StyledTableCell>{value.toString().substr(0, 19)} ETH</StyledTableCell>
    </StyledTableRow>
  )
}

export default SingRow

/*
ether.utils  
parseEther
formatEther
parseUnits
formateUnits
*/