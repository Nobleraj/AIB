import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as coinAction from '../store/actions/coin';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import CoinsItem from '../components/CoinsItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import { NO_COINS_AVAILABLE } from '../constants/error-message.js';
import { COIN_LIST_TABLE_COLUMNS,TABLE_STYLES,NUMBER_OF_ROWS_RENDERED }  from '../constants/table-datas';

const useStyles = makeStyles(TABLE_STYLES);

const CoinScreen = (props) => {

    const [isLoaded,setIsLoaded]=useState(false);
    const coins = useSelector(state => state.coins.coins);
    const dispatch = useDispatch();

    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(NUMBER_OF_ROWS_RENDERED);

    const handleChangePage = useCallback((event, newPage) => {
        setPage(newPage);
    },[setPage]);

    const handleChangeRowsPerPage = useCallback((event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    },[setPage]);

    useEffect(()=> {
        const loadCoinList = async ()=>{
            document.getElementById('toolbar').innerHTML="AIB - Coin List";
            setIsLoaded(true);
            await dispatch(coinAction.getAllCoins());
            setIsLoaded(false);
          };
          loadCoinList();
    }, [dispatch]);

    if(isLoaded){
        return(
          <Paper className={classes.loader}>
          <CircularProgress disableShrink />
          </Paper>
        )
    }
    if(!isLoaded && coins.length===0){
        return(
            <Paper className={classes.loader}>
            <Alert severity="info">{NO_COINS_AVAILABLE}</Alert>
            </Paper>
          )
    }

    return (
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {COIN_LIST_TABLE_COLUMNS.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        style={{ minWidth: column.minWidth }}>
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {coins.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <CoinsItem row={row} key={row.id} onSelect={()=> props.history.push({
                                        pathname : '/details',
                                        state : { coinId : row.id }
                                    }) }/>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={coins.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
    )

};

export default CoinScreen;