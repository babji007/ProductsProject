import Enzyme, { shallow } from "enzyme";
import SelButton from "../../src/components/Common/SelButtons";
// import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


describe("passing props", () => {
  let props = {
    data:[],
    Rchange: (fn) => fn,
    hanonChange: (fn) => fn,
  };
  
  it("should call hanonChange method", () => {
   
    const wrapper = shallow(<SelButton {...props} />);
    const para = wrapper.find('select');
    para.simulate('change');
    expect(wrapper.find("Rchange")).toHaveBeenCalled;
    
  });
});
