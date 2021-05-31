import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as coinAction from '../store/actions/coin';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import CoinDetails from '../components/CoinDetails';
import { TABLE_STYLES, COIN_DETAILS_TABLE_COLUMNS } from '../constants/table-datas';
import CircularProgress from '@material-ui/core/CircularProgress';

const useRowStyles = makeStyles(TABLE_STYLES);

const CoinDetailScreen = (props) => {
  
  const [isLoaded,setIsLoaded]=useState(false);
  const classes = useRowStyles();
  const coinId = props.location.state.coinId;
  const coinDetails = useSelector(state => state.coins.coinDetails);

  const dispatch = useDispatch();


  useEffect(() => {
    const loadCoinDetails=async ()=>{
      document.getElementById('toolbar').innerHTML="AIB - Coin Details";
      setIsLoaded(true);
      await dispatch(coinAction.getCoinDetails(coinId));
      setIsLoaded(false);
    };
    loadCoinDetails();
  }, [dispatch, coinId]);

  if(isLoaded){
    return(
      <Paper className={classes.loader}>
      <CircularProgress disableShrink />
      </Paper>
    )
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.coinDetailcontainer}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              {COIN_DETAILS_TABLE_COLUMNS.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {coinDetails.map((row) => (
              <CoinDetails key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )

};

export default CoinDetailScreen;