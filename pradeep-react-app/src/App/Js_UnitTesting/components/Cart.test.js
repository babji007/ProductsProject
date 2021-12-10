import React from "react";

import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from "enzyme";
Enzyme.configure({ adapter: new Adapter() });
import Cart from "../../src/components/Cart";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();

describe("testing for cart", () => {
    
    let props={
        item:[],
        cartItems:[],
        decrementCount:(fn)=>(fn),
        incrementCount:(fn)=>(fn),
        removeCart:(fn)=>(fn),
        decreaseFromCart:(fn)=>(fn),
        addToCart:(fn)=>(fn),
        removeFromCart:(fn)=>(fn),

    }
    const value = {
      
          item: [],
    
      };
 
    it("should call count decrement method", () => {
        const wrapper = shallow(<Cart {...props}  />);
        expect(wrapper.instance().decrementCount(value)).toHaveBeenCalled;
      });
    
      it("should call count increment method", () => {
        const wrapper = shallow(<Cart {...props}  />);
        expect(wrapper.instance().incrementCount(value)).toHaveBeenCalled;
      });
      it("should call remove from cart method", () => {
        const wrapper = shallow(<Cart {...props}  />);
        // wrapper.instance().saveDetails(value);
        expect(wrapper.instance().removeCart(value)).toHaveBeenCalled;
      });

     
})