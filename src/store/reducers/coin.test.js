import { GET_ALL_COINS, GET_COIN_DETAILS } from './coin';
import coinReducer from './coin';

const initialState = { coins: [], coinDetails: [] };

const coinItem = {
  "id": "bitcoin",
  "symbol": "btc",
  "name": "Bitcoin",
  "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
  "current_price": 29517,
  "market_cap": 551215626154,
  "market_cap_rank": 1,
  "fully_diluted_valuation": 618280282280,
  "total_volume": 27931576947,
  "high_24h": 29947,
  "low_24h": 27196,
  "price_change_24h": 1836.89,
  "price_change_percentage_24h": 6.63616,
  "market_cap_change_24h": 26309902034,
  "market_cap_change_percentage_24h": 5.01231,
  "circulating_supply": 18722137,
  "total_supply": 21000000,
  "max_supply": 21000000,
  "ath": 54205,
  "ath_change_percentage": -45.57512,
  "ath_date": "2021-04-14T11:54:46.763Z",
  "atl": 51.3,
  "atl_change_percentage": 57408.5579,
  "atl_date": "2013-07-05T00:00:00.000Z",
  "roi": null,
  "last_updated": "2021-05-30T17:56:34.208Z"
};

describe("Coins Reducer", () => {

  it("returns initial state coins empty array", () => {
    const newState = coinReducer(initialState, { type: GET_ALL_COINS, payload: [] });
    expect(newState.coins).toEqual([]);
  });

  it("returns initial state coinDetails empty array", () => {
    const newState = coinReducer(initialState, { type: GET_COIN_DETAILS, payload: [] });
    expect(newState.coinDetails).toEqual([]);
  });

  it("should display the coin list", () => {
    const coin = [coinItem];

    const newState = coinReducer(initialState, {
      type: GET_ALL_COINS,
      payload: coin
    });
    expect(newState.coins).toEqual(expect.arrayContaining([
      expect.objectContaining(coinItem)
    ]));
  });

  it("should display the coin details by id", () => {

    const newState = coinReducer(initialState, {
      type: GET_COIN_DETAILS,
      payload: [].concat(coinItem)
    });
    expect(newState.coinDetails).toEqual(expect.arrayContaining([
      expect.objectContaining(coinItem)
    ]))
  });


})
