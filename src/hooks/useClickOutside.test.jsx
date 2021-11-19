import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

// import useClickOutside from "./useClickOutside";

describe("useClickOutside hook", () => {
	it("Passes a test", () => {
		const wrapper = shallow(<div></div>);
		console.log(wrapper.html());

		// document.createElement("div");
		// ReactDOM.render(<div>hello</div>, document.querySelector("div"));
		// expect
		// expect(useClickOutside()).toBeCalled();
	});
});
