import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import CoinScreen from './CoinScreen';
Enzyme.configure({ adapter : new EnzymeAdapter() });

describe('render coin list screen', () => {

    it("should have component-head classname", () => {
      const setup = (props = {}) => {
        const wrapper = shallow(<CoinScreen {...props} />);
        expect(wrapper.find(".MuiPaper-rounded")).toBeDefined();
      };
    }); 
    
    it("should have table-container classname", () => {
      const setup = (props = {}) => {
        const wrapper = shallow(<CoinScreen {...props} />);
        expect(wrapper.find(".MuiTable-stickyHeader")).toBeDefined();
      };
    }); 
  
    it("should have table img classname", () => {
      const setup = (props = {}) => {
        const wrapper = shallow(<CoinScreen {...props} />);
        expect(wrapper.find(".makeStyles-image-9")).toBeDefined();
      };
    });
    
});
  