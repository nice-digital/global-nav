import React from "react";
import useClickOutside from "./useClickOutside";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

const testFunction = jest.fn();

function App() {
	const testVariable = "test";
	const { ref } = useClickOutside(testVariable, testFunction);

	// function wasClickedOutside(result) {
	// 	if (result == true) context.setidOfOpenDropdown(null);
	// }
	return (
		<>
			<div ref={ref}>
				<button>inside</button>
			</div>
			<button>outside</button>
		</>
	);
}

describe("useClickOutside hook", () => {
	const defaultProps = {};

	beforeEach(() => {
		// window.dataLayer = [];
	});

	afterAll(() => {
		// Cleanup
		// delete window.dataLayer;
	});

	it("Renders without crashing", () => {
		const wrapper = shallow(<App {...defaultProps} />);
		// console.log(wrapper.debug());
		expect(wrapper).toHaveLength(1);
	});

	it("Matches snapshot", () => {
		const wrapper = shallow(<App {...defaultProps} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("Returns true when button outside of referenced element is clicked", () => {
		const wrapper = mount(<App {...defaultProps} />);
		const insideButton = wrapper.findWhere((node) => {
			return (
				node.type() === "button" && node.name() && node.text() === "inside"
			);
		});
		const outsideButton = wrapper.findWhere((node) => {
			return (
				node.type() === "button" && node.name() && node.text() === "outside"
			);
		});

		insideButton.simulate("click");
		console.log("###", insideButton.debug());
		console.log("###", outsideButton.debug());

		// expect(testFunction).toHaveBeenCalled();

		expect(true).toBe(false);
	});
});
