import React,{ useState } from 'react';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


const CoinDetails = (props)=> {
  const { row } = props;
  const [open, setOpen] = useState(true);

  const descriptionData = row.description;

  const homePageData = row.links.homepage.filter(link=>{
    return link!=="";
  });

  const marketCapEuro = row.market_data.market_cap;

  const genesisDate = row.genesis_date ? row.genesis_date.split("-").reverse().join("-") : "";

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(true)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{row.name}</TableCell>
        <TableCell>{row.symbol}</TableCell>
        <TableCell>{row.hashing_algorithm}</TableCell>
        <TableCell>{marketCapEuro["eur"]}</TableCell>
        <TableCell>{homePageData.length>0 ? homePageData[0] : "" }</TableCell>
        <TableCell>{genesisDate}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table stickyHeader size="medium" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>{descriptionData["en"]}</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default CoinDetails;