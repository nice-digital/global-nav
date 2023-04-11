import React from "react";

import Services from "./Services";

import { render, within } from "@testing-library/react";

import services from "./__mocks__/services.json";

jest.mock("./../../services.json", () => require("./__mocks__/services.json"));

describe("Services", () => {
	it("Matches snapshot", () => {
		const { container } = render(<Services service="pathways" />);
		expect(container).toMatchSnapshot();
	});

	it("should render link(s) if footer boolean is set to true", () => {
		const { getByRole } = render(<Services service="cks" />);

		const servicesNav = getByRole("navigation", { name: "Our services" });

		const servicesLinks = within(servicesNav).getAllByRole("link");

		const expectedServiceLabels = services.external
			.filter((s) => s.footer)
			.map((s) => s.text);

		expect(servicesLinks.map((l) => l.textContent)).toStrictEqual(
			expectedServiceLabels
		);
	});
});
