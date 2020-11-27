import { ensureDataLayer, eventName, eventTimeout, trackEvent } from "./";

describe("tracker", () => {
	beforeEach(() => {
		window.dataLayer = [];
	});

	afterAll(() => {
		// Cleanup
		delete window.dataLayer;
	});

	describe("ensureDataLayer", () => {
		it("should use existing dataLayer array", () => {
			window.dataLayer = [99];

			ensureDataLayer();

			expect(window.dataLayer).toEqual([99]);
		});

		it("should create new, empty dataLayer array if none exists", () => {
			window.dataLayer = null;

			ensureDataLayer();

			expect(window.dataLayer).toEqual([]);
		});
	});

	describe("trackEvent", () => {
		it("should push category, action and label to the dataLayer", () => {
			trackEvent("test category", "test action", "test label");

			expect(window.dataLayer).toEqual([
				{
					event: eventName,
					eventCategory: "test category",
					eventAction: "test action",
					eventLabel: "test label",
				},
			]);
		});

		it("should push category, action, label and value to the dataLayer", () => {
			trackEvent("test category", "test action", "test label", 99);

			expect(window.dataLayer).toEqual([
				{
					event: eventName,
					eventCategory: "test category",
					eventAction: "test action",
					eventLabel: "test label",
					eventValue: 99,
				},
			]);
		});

		it("should pass event callback function into dataLayer and clear fallback timer", () => {
			jest.useFakeTimers();
			const eventCallback = jest.fn();

			trackEvent(
				"test category",
				"test action",
				"test label",
				99,
				eventCallback
			);

			window.dataLayer[0].eventCallback();

			expect(eventCallback).toHaveBeenCalledTimes(1);
			expect(clearTimeout).toHaveBeenCalledTimes(1);
		});

		it("should use fallback timer for event callback", () => {
			jest.useFakeTimers();

			const eventCallback = jest.fn();

			trackEvent(
				"test category",
				"test action",
				"test label",
				99,
				eventCallback
			);

			expect(setTimeout).toHaveBeenCalledWith(
				expect.any(Function),
				eventTimeout
			);

			// Call the (wrapped) callback
			setTimeout.mock.calls[0][0]();

			expect(eventCallback).toHaveBeenCalledTimes(1);
		});
	});
});
