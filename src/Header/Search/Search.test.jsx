import React from "react";
import Search from "./Search";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

describe("Search", () => {
	const defaultProps = {};
	let appContainer;

	beforeEach(() => {
		appContainer = document.createElement("div");
		document.body.appendChild(appContainer);
	});

	afterEach(() => {
		document.body.removeChild(appContainer);
	});

	describe("Rendering", () => {
		it("Renders without crashing", () => {
			const wrapper = shallow(<Search {...defaultProps} />);
			expect(wrapper).toHaveLength(1);
		});

		it("Matches snapshot", () => {
			const wrapper = shallow(<Search {...defaultProps} query="test" />);
			expect(toJson(wrapper)).toMatchSnapshot();
		});

		it("Renders SVG search icon when in an SVG-compatible browser", () => {
			window.SVGRect = {};
			const wrapper = shallow(<Search {...defaultProps} />);
			expect(wrapper.find("SvgSearch").length).toEqual(1);
			expect(wrapper.find("SvgSearch").props()).toEqual({ className: "icon" });
			window.SVGRect = undefined;
		});

		it("Renders fallback unicode search button text when in an non SVG-compatible browser", () => {
			const wrapper = shallow(<Search {...defaultProps} />);
			expect(wrapper.find("button").text()).toEqual("search");
		});
	});

	describe("Autocomplete", () => {
		it("Passes props to autocomplete component", () => {
			const wrapper = shallow(
				<Search
					{...defaultProps}
					autocomplete="variableName"
					placeholder="Test placeholder"
					query="diabetes"
				/>
			);
			expect(wrapper.find("Autocomplete").props()).toEqual({
				source: "variableName",
				placeholder: "Test placeholder",
				query: "diabetes",
			});
		});
	});

	describe("onSearching", () => {
		it("should call searchSubmitHandler when the form is submitted", () => {
			const wrapper = shallow(<Search {...defaultProps} />);
			const handleSubmit = jest.spyOn(
				wrapper.instance(),
				"searchSubmitHandler"
			);

			// Need to force update for some reason, see https://github.com/airbnb/enzyme/issues/944#issuecomment-322271527
			wrapper.instance().forceUpdate();

			wrapper.find("form").at(0).simulate("submit");

			expect(handleSubmit).toHaveBeenCalledTimes(1);
		});

		it("should call searchSubmitHandler when the button is clicked", () => {
			const wrapper = shallow(<Search {...defaultProps} />);
			const handleSubmit = jest.spyOn(
				wrapper.instance(),
				"searchSubmitHandler"
			);

			// Need to force update for some reason, see https://github.com/airbnb/enzyme/issues/944#issuecomment-322271527
			wrapper.instance().forceUpdate();

			wrapper.find("button").at(0).simulate("click");

			expect(handleSubmit).toHaveBeenCalledTimes(1);
		});

		it("should prevent default and call callback with the search query for a onSearching function", () => {
			const onSearching = jest.fn();
			const wrapper = mount(
				<Search {...defaultProps} query="test" onSearching={onSearching} />,
				{ attachTo: appContainer }
			);

			const preventDefault = jest.fn();

			wrapper
				.find("form")
				.at(0)
				.simulate("submit", { preventDefault: preventDefault });

			expect(preventDefault).toHaveBeenCalled();
			expect(onSearching).toHaveBeenCalledWith({ query: "test" });
		});

		it("should prevent default and call callback for a named onSearching global function", () => {
			const onSearching = jest.fn();
			window.onSearchingHandler = onSearching;

			const wrapper = mount(
				<Search
					{...defaultProps}
					query="test"
					onSearching="onSearchingHandler"
				/>,
				{ attachTo: appContainer }
			);

			const preventDefault = jest.fn();

			wrapper
				.find("form")
				.at(0)
				.simulate("submit", { preventDefault: preventDefault });

			expect(preventDefault).toHaveBeenCalled();
			expect(onSearching).toHaveBeenCalledWith({ query: "test" });
		});

		it("should not prevent default with no onSearching prop", () => {
			const wrapper = shallow(<Search {...defaultProps} />);

			const preventDefault = jest.fn();

			wrapper
				.find("form")
				.at(0)
				.simulate("submit", { preventDefault: preventDefault });

			expect(preventDefault).not.toHaveBeenCalled();
		});

		it("should not prevent default with missing onSearching global function prop", () => {
			const wrapper = shallow(
				<Search {...defaultProps} onSearching="blahblah" />
			);

			const preventDefault = jest.fn();

			wrapper
				.find("form")
				.at(0)
				.simulate("submit", { preventDefault: preventDefault });

			expect(preventDefault).not.toHaveBeenCalled();
		});
	});

	describe("enter key", () => {
		it("should call onSearching callback prop if the enter key is pressed", () => {
			const onSearching = jest.fn();
			const wrapper = mount(
				<Search {...defaultProps} onSearching={onSearching} />,
				{
					attachTo: appContainer,
				}
			);

			wrapper.find("#autocomplete").at(0).simulate("keyDown", { key: "Enter" });

			expect(onSearching).toHaveBeenCalledTimes(1);
		});

		it("should submit form if the enter key is pressed with no onSearching prop", () => {
			const wrapper = mount(<Search {...defaultProps} />, {
				attachTo: appContainer,
			});

			const formSubmit = jest.fn();
			wrapper.find("form").instance().submit = formSubmit;

			wrapper.find("#autocomplete").at(0).simulate("keyDown", { key: "Enter" });

			expect(formSubmit).toHaveBeenCalledTimes(1);
		});
	});
});
