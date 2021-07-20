export const COIN_LIST_TABLE_COLUMNS = [
    {
        id: 'image',
        label: 'Image',
        minWidth: 100
    },
    { id: 'name', label: 'Name', minWidth: 80 },
    {
        id: 'symbol',
        label: 'Symbol',
        minWidth: 100
    },
    {
        id: 'current_price',
        label: 'Price',
        minWidth: 100,
        format: (value) => value.toFixed(2),
    },
    {
        id: 'high_24h',
        label: 'High 24 hour Price',
        minWidth: 100,
        format: (value) => value.toFixed(2),
    },
    {
        id: 'low_24h',
        label: 'Low 24 hour Price',
        minWidth: 100,
        format: (value) => value.toFixed(2),
    },
    {
        id: 'action',
        label: 'Action',
        minWidth: 100
    }
];

export const TABLE_STYLES = {
    root: {
        width: '100%',
        padding : 10,
        minHeight : 550,
        marginTop : '60px'
    },
    container: {
        maxHeight: 520
    },
    coinDetailcontainer: {
        maxHeight: 550
    },
    image : { 
        width: 30, 
        borderRadius: '50%' 
    },
    loader :{
        display : 'flex',
        width : '100%',
        height : 580,
        alignItems : 'center',
        justifyContent : 'center'
    }
};

export const COIN_DETAILS_TABLE_COLUMNS = [
    {
        id: '',
        label: '',
        minWidth: 50
    },
    {
        id: 'name',
        label: 'Name',
        minWidth: 100
    },
    {
        id: 'symbol',
        label: 'Symbol',
        minWidth: 100
    },
    {
        id: 'hashing',
        label: 'Hashing algorithm',
        minWidth: 100
    },
    {
        id: 'euro',
        label: 'Market cap in Euro',
        minWidth: 100
    },
    {
        id: 'homepage',
        label: 'Homepage',
        minWidth: 100
    },
    {
        id: 'genesis',
        label: 'Genesis Date',
        minWidth: 100
    }
];

export const NUMBER_OF_ROWS_RENDERED = 10;