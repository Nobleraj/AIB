import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import CoinDetailScreen from './CoinDetailScreen';
Enzyme.configure({ adapter : new EnzymeAdapter() });

describe('render coin details screen', () => {

  it("should have component-head classname", () => {
    const setup = (props = {}) => {
      const wrapper = shallow(<CoinDetailScreen {...props} />);
      expect(wrapper.find(".MuiPaper-rounded")).toBeDefined();
    };
  }); 
  
  it("It should have table-container classname", () => {
    const setup = (props = {}) => {
      const wrapper = shallow(<CoinDetailScreen {...props} />);
      expect(wrapper.find(".MuiTable-stickyHeader")).toBeDefined();
    };
  }); 
  
});