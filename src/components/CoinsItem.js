import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import { COIN_LIST_TABLE_COLUMNS,TABLE_STYLES } from '../constants/table-datas';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(TABLE_STYLES);

const CoinsItem = props => {

    const {  row, onSelect } = props;
    const classes = useStyles();

    return (
        <TableRow onClick={onSelect} hover role="checkbox" tabIndex={-1}>
            {COIN_LIST_TABLE_COLUMNS.map((column) => {
                const value = row[column.id];
                return (
                    <TableCell key={column.id} align={column.align}>
                        { column.id === 'image' ?
                            <img src={value} className={classes.image} alt="" /> :
                            column.format && typeof value === 'number' ? column.format(value) :
                                    column.id === 'action' ?
                                        <Button id={row.id} onClick={()=>onSelect} size="small" variant="contained" color="primary">Details</Button> :
                                        value}
                    </TableCell>
                );
            })}
        </TableRow>
    )

};

export default CoinsItem;