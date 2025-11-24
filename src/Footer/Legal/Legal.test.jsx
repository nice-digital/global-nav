import MockDate from "mockdate";

import Legal from "./Legal";
import { render, screen } from "@testing-library/react";

const mockDate = (isoDate) => {
	jest.useFakeTimers();
	jest.setSystemTime(new Date(isoDate));
};

describe("Legal", () => {
	afterEach(() => {
		jest.useRealTimers();
	});
	it("Matches snapshot", () => {
		MockDate.set("2000-11-22");
		const { container } = render(<Legal />);
		expect(container).toMatchSnapshot();
		MockDate.reset();
	});

	it("renders Cyber Essentials iframe when certificate is valid", () => {
		mockDate("2025-06-01T23:59:59.500Z");

		render(<Legal />);
		const iframe = screen.getByTitle("Cyber Essentials Certification");

		expect(iframe).toBeInTheDocument();
		expect(iframe.tagName).toBe("IFRAME");
	});
	it("does not render Cyber Essentials iframe when certificate is invalid", () => {
		mockDate("2026-06-03T00:00:00Z");

		render(<Legal />);
		const iframe = screen.queryByTitle("Cyber Essentials Certification");
		expect(iframe).not.toBeInTheDocument();
	});
});
