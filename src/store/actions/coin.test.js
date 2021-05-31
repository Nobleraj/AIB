import configureMockStore from "redux-mock-store";
import { getAllCoins, getCoinDetails} from "./coin";
import fetchMock from "fetch-mock";
import { GET_COINS_LIST, GET_COINS_ITEM } from "../../endpoints/url";
import thunk from 'redux-thunk';
const mockStore = configureMockStore([thunk]);
const store = mockStore({});
const fetch = require('node-fetch'); 

describe("Coins list and details action", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("get coin list", () => {
    fetchMock.get(GET_COINS_LIST + '?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false', {
      method: "GET"
    });
    store.dispatch(getAllCoins());
    expect(store.getState()).toEqual({});
  });

  it("get coin details based on ID", () => {
    let coinId = "bitcoin";
    fetchMock.get(GET_COINS_ITEM + coinId, {
      method: "GET"
    });

    store.dispatch(getCoinDetails(coinId));
    expect(store.getState()).toEqual({});
  });
  
  
});
