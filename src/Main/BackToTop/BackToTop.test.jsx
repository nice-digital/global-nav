import { BackToTop } from "./BackToTop";
import { render, createEvent, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("BackToTop", () => {
	const scrollIntoViewMock = jest.fn();

	let top;

	beforeEach(() => {
		top = document.createElement("div");
		top.id = "top";
		top.scrollIntoView = scrollIntoViewMock;
		document.body.appendChild(top);
	});

	afterEach(() => {
		document.body.innerHTML = "";
		scrollIntoViewMock.mockReset();
	});

	it("Matches snapshot", () => {
		const { container } = render(<BackToTop />);
		expect(container).toMatchSnapshot();
	});

	it("Renders a link with an accessible name", () => {
		const { getByRole } = render(<BackToTop />);
		expect(getByRole("link")).toHaveAccessibleName("Back to top");
	});

	it("Renders a link with the default hash when no scroll target id prop provided", () => {
		const { getByRole } = render(<BackToTop />);
		expect(getByRole("link")).toHaveAttribute("href", "#top");
	});

	it("Prevents default and moves focus to the back to top link target on click", () => {
		const { getByRole } = render(<BackToTop />),
			link = getByRole("link"),
			clickEvent = createEvent.click(link);

		fireEvent(link, clickEvent);

		expect(clickEvent.defaultPrevented).toBe(true);
		expect(top).toHaveAttribute("tabindex", "-1");
		expect(top).toHaveFocus();
	});

	it("Scrolls element with id = back to top link target into view on back to top click", async () => {
		const { getByRole } = render(<BackToTop />),
			link = getByRole("link"),
			user = userEvent.setup();

		await user.click(link);

		expect(scrollIntoViewMock).toHaveBeenCalledTimes(1);
	});
});
