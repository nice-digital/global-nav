import Main from "./Main";
import { render } from "@testing-library/react";

describe("Main", () => {
	it("Matches snapshot", () => {
		const { container } = render(
			<Main>
				<p>test</p>
			</Main>
		);
		expect(container).toMatchSnapshot();
	});
});
