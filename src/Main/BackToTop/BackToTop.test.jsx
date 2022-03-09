import React from "react";

import { BackToTop } from "./BackToTop";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("BackToTop", () => {
	const scrollIntoViewMock = jest.fn();
	let wrapper;

	beforeEach(() => {
		let contentDiv = document.createElement("div");
		contentDiv.id = "top";
		document.body.appendChild(contentDiv);
		document.getElementById("top").scrollIntoView = scrollIntoViewMock;
		wrapper = shallow(<BackToTop />);
	});

	afterEach(() => {
		wrapper.unmount();
		document.body.innerHTML = "";
		scrollIntoViewMock.mockReset();
	});

	it("Renders without crashing", () => {
		expect(wrapper).toHaveLength(1);
	});

	it("Matches snapshot", () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("Renders a link with the default hash when no scroll target id prop provided", () => {
		expect(wrapper.find("a[href='#top']").length).toEqual(1);
	});

	it("Prevents default and moves focus to the back to top link target on click", () => {
		const preventDefault = jest.fn();
		wrapper
			.find("a")
			.at(0)
			.simulate("click", {
				currentTarget: {
					getAttribute: () => "#top",
				},
				preventDefault: preventDefault,
			});

		expect(preventDefault).toHaveBeenCalledTimes(1);
		expect(document.getElementById("top").getAttribute("tabIndex")).toEqual(
			"-1"
		);
		expect(document.activeElement).toBe(document.getElementById("top"));
	});

	it("Scrolls element with id = back to top link target into view on back to top click", () => {
		wrapper
			.find("a")
			.at(0)
			.simulate("click", {
				currentTarget: {
					getAttribute: () => "#top",
				},
				preventDefault: () => {},
			});

		expect(scrollIntoViewMock).toHaveBeenCalledTimes(1);
	});
});
