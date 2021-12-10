import React from "react";

import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from "enzyme";
Enzyme.configure({ adapter: new Adapter() });
import Container from '../../src/components/Container'
import Products from "../../src/components/Products";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();

describe("testing for products page", () => {
    
    let props={
        res:[],
        cartItems:[],
        changeCategory:(fn)=>(fn),
        fetchproductsByCategory:(fn)=>(fn),
        sortBy:(fn)=>(fn),
        sortProducts:(fn)=>(fn),
        // res:(fn)=>(fn),
        removeFilters:(fn)=>(fn),
        fetchproducts:(fn)=>(fn),
        loadRefreshContent:(fn)=>(fn),
        content:(fn)=>(fn)


    }

      it('should check `componentDidMount()`', () => {
        const wrapper = shallow(<Products{...props}/>)
        const instance = wrapper.instance();
        instance.componentDidMount();
        expect(instance.fetchproducts).toHaveBeenCalled; 
      });
   
})