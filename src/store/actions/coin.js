import { GET_COINS_LIST,GET_COINS_ITEM } from '../../endpoints/url';
import { GET_ALL_COINS,GET_COIN_DETAILS } from '../reducers/coin';

export const getAllCoins = () =>{
    return async dispatch =>{
        await fetch(GET_COINS_LIST + '?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false',{
            method : 'GET'
        })
        .then(res => res.json())
        .then(response=>{
            dispatch({
                type : GET_ALL_COINS,
                payload : response
            })
        }).catch(err=>{
            dispatch({
                type : GET_ALL_COINS,
                payload : []
            })
        })
        
    }
}

export const getCoinDetails = (coinId) =>{

    return async dispatch =>{
        await fetch(GET_COINS_ITEM + coinId,{
            method : 'GET'
        })
        .then(res => res.json())
        .then(response=>{
            dispatch({
                type : GET_COIN_DETAILS,
                payload : response
            })
        }).catch(err=>{
            dispatch({
                type : GET_COIN_DETAILS,
                payload : {}
            })
        })
        
    }
}