import React from "react";

import Main from "./Main";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Main", () => {
	it("Renders without crashing", () => {
		const wrapper = shallow(<Main></Main>);
		expect(wrapper).toHaveLength(1);
	});

	it("Matches snapshot", () => {
		const wrapper = shallow(
			<Main>
				<p>test</p>
			</Main>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
