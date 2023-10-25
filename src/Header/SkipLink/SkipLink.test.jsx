import SkipLink from "./SkipLink";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("SkipLinks", () => {
	it("Matches snapshot with a hash", () => {
		const { container } = render(<SkipLink to="#test">Skip</SkipLink>);
		expect(container).toMatchSnapshot();
	});

	it("Matches snapshot with an external destination", () => {
		const { container } = render(
			<SkipLink to="https://a11y.com">Skip</SkipLink>
		);
		expect(container).toMatchSnapshot();
	});

	it("Renders skip link id href from prop", () => {
		const { getByRole } = render(<SkipLink to="#test">Skip</SkipLink>);

		expect(getByRole("link", { name: "Skip" })).toHaveAttribute(
			"href",
			"#test"
		);
	});

	it("Renders an external link if supplied", () => {
		const { getByRole } = render(
			<SkipLink to="https://a11y.com">Skip</SkipLink>
		);

		expect(getByRole("link", { name: "Skip" })).toHaveAttribute(
			"href",
			"https://a11y.com"
		);
	});

	it("Prevents default, moves focus and scrolls to the skip link target on click", async () => {
		const scrollIntoView = jest.fn();

		const oldScrollIntoView = Element.prototype.scrollIntoView;
		Element.prototype.scrollIntoView = scrollIntoView;

		const targetDiv = document.createElement("div");
		targetDiv.setAttribute("id", "test");
		document.body.appendChild(targetDiv);

		const { getByRole } = render(<SkipLink to="#test">Skip</SkipLink>),
			link = getByRole("link", { name: "Skip" }),
			user = userEvent.setup();

		await user.click(link);

		expect(targetDiv).toHaveAttribute("tabIndex", "-1");
		expect(targetDiv).toHaveFocus();
		expect(scrollIntoView).toHaveBeenCalled();

		Element.prototype.scrollIntoView = oldScrollIntoView;
	});
});
