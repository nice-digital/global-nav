const tableScriptURL =
		"https://abc123.eu-west-1.sdk.awswaf.test/abc123/def456/jsapi.js",
	overrideScriptURL = "https://localhost:4000/mock-aws-waf-jsapi.js";

describe("aws-waf", () => {
	// The module remembers being switched off, so load a fresh copy for each test
	const loadModule = (integrations = []) => {
		jest.resetModules();
		jest.doMock("./integrations", () => ({ integrations }));

		return require("./index");
	};

	const integrationForThisHost = (extras) => ({
		hosts: ["www.nice.org.uk", window.location.hostname],
		scriptURL: tableScriptURL,
		...extras,
	});

	afterEach(() => {
		document.head.innerHTML = "";
		document.body.innerHTML = "";

		delete window.AwsWafIntegration;
		delete window.awsWafCookieDomainList;
	});

	describe("getIntegration", () => {
		it("Finds the integration that lists the hostname", () => {
			const integration = integrationForThisHost(),
				{ getIntegration } = loadModule([
					{ hosts: ["bnf.nice.org.uk"], scriptURL: "https://other.test/" },
					integration,
				]);

			expect(getIntegration("www.nice.org.uk")).toBe(integration);
		});

		it("Returns undefined for a hostname that isn't listed", () => {
			const { getIntegration } = loadModule([integrationForThisHost()]);

			expect(getIntegration("unknown.nice.org.uk")).toBeUndefined();
		});

		it("Doesn't match a subdomain of a listed hostname", () => {
			const { getIntegration } = loadModule([integrationForThisHost()]);

			expect(getIntegration("test.www.nice.org.uk")).toBeUndefined();
		});
	});

	describe("loadAwsWafChallenge", () => {
		it("Loads nothing when the hostname isn't listed", () => {
			const { loadAwsWafChallenge, scriptId } = loadModule([
				{ hosts: ["bnf.nice.org.uk"], scriptURL: tableScriptURL },
			]);

			expect(loadAwsWafChallenge()).toBe(false);
			expect(document.getElementById(scriptId)).toBeNull();
		});

		it("Loads nothing when the hostname's integration has no script URL yet", () => {
			const { loadAwsWafChallenge, scriptId } = loadModule([
				integrationForThisHost({
					scriptURL: "",
					cookieDomains: [".nice.org.uk"],
				}),
			]);

			expect(loadAwsWafChallenge()).toBe(false);
			expect(document.getElementById(scriptId)).toBeNull();
			expect(window.awsWafCookieDomainList).toBeUndefined();
		});

		it("Uses the given script URL when the hostname's integration has none yet", () => {
			const { loadAwsWafChallenge, scriptId } = loadModule([
				integrationForThisHost({ scriptURL: "" }),
			]);

			expect(loadAwsWafChallenge(overrideScriptURL)).toBe(true);
			expect(document.getElementById(scriptId)).toHaveAttribute(
				"src",
				overrideScriptURL
			);
		});

		it("Adds the script for the hostname's integration to the head", () => {
			const { loadAwsWafChallenge, scriptId } = loadModule([
				integrationForThisHost(),
			]);

			expect(loadAwsWafChallenge()).toBe(true);

			const script = document.getElementById(scriptId);

			expect(script.parentElement).toBe(document.head);
			expect(script).toHaveAttribute("src", tableScriptURL);
			expect(script.async).toBe(true);
		});

		it("Uses the given script URL over the hostname's integration", () => {
			const { loadAwsWafChallenge, scriptId } = loadModule([
				integrationForThisHost(),
			]);

			expect(loadAwsWafChallenge(overrideScriptURL)).toBe(true);
			expect(document.getElementById(scriptId)).toHaveAttribute(
				"src",
				overrideScriptURL
			);
		});

		it("Uses the given script URL when the hostname isn't listed", () => {
			const { loadAwsWafChallenge, scriptId } = loadModule();

			expect(loadAwsWafChallenge(overrideScriptURL)).toBe(true);
			expect(document.getElementById(scriptId)).toHaveAttribute(
				"src",
				overrideScriptURL
			);
		});

		it("Only adds the script once", () => {
			const { loadAwsWafChallenge } = loadModule([integrationForThisHost()]);

			expect(loadAwsWafChallenge()).toBe(true);
			expect(loadAwsWafChallenge()).toBe(false);
			expect(loadAwsWafChallenge(overrideScriptURL)).toBe(false);

			expect(document.querySelectorAll("script")).toHaveLength(1);
		});

		it("Loads nothing when passed false", () => {
			const { loadAwsWafChallenge, scriptId } = loadModule([
				integrationForThisHost(),
			]);

			expect(loadAwsWafChallenge(false)).toBe(false);
			expect(document.getElementById(scriptId)).toBeNull();
		});

		it("Stays switched off for later callers once passed false", () => {
			const { loadAwsWafChallenge, scriptId } = loadModule([
				integrationForThisHost(),
			]);

			loadAwsWafChallenge(false);

			expect(loadAwsWafChallenge()).toBe(false);
			expect(loadAwsWafChallenge(overrideScriptURL)).toBe(false);
			expect(document.getElementById(scriptId)).toBeNull();
		});

		it("Loads nothing when the SDK has already run", () => {
			const { loadAwsWafChallenge, scriptId } = loadModule([
				integrationForThisHost(),
			]);

			window.AwsWafIntegration = {};

			expect(loadAwsWafChallenge()).toBe(false);
			expect(document.getElementById(scriptId)).toBeNull();
		});

		it("Loads nothing when the host page includes the SDK itself", () => {
			const { loadAwsWafChallenge, scriptId } = loadModule([
					integrationForThisHost(),
				]),
				hostPageScript = document.createElement("script");

			hostPageScript.src =
				"https://xyz789.eu-west-1.sdk.awswaf.com/xyz789/abc/jsapi.js";
			document.head.appendChild(hostPageScript);

			expect(loadAwsWafChallenge()).toBe(false);
			expect(document.getElementById(scriptId)).toBeNull();
		});

		describe("Cookie domains", () => {
			it("Sets the integration's cookie domains before adding the script", () => {
				const { loadAwsWafChallenge } = loadModule([
					integrationForThisHost({ cookieDomains: [".nice.org.uk"] }),
				]);

				let cookieDomainsWhenScriptAdded;
				const appendChild = jest
					.spyOn(document.head, "appendChild")
					.mockImplementation(() => {
						cookieDomainsWhenScriptAdded = window.awsWafCookieDomainList;
					});

				loadAwsWafChallenge();

				appendChild.mockRestore();

				expect(cookieDomainsWhenScriptAdded).toEqual([".nice.org.uk"]);
			});

			it("Leaves cookie domains alone when the integration has none", () => {
				const { loadAwsWafChallenge } = loadModule([integrationForThisHost()]);

				loadAwsWafChallenge();

				expect(window.awsWafCookieDomainList).toBeUndefined();
			});

			it("Doesn't overwrite cookie domains set by the host page", () => {
				const { loadAwsWafChallenge } = loadModule([
					integrationForThisHost({ cookieDomains: [".nice.org.uk"] }),
				]);

				window.awsWafCookieDomainList = ["test.nice.org.uk"];

				loadAwsWafChallenge();

				expect(window.awsWafCookieDomainList).toEqual(["test.nice.org.uk"]);
			});

			it("Doesn't set cookie domains when nothing gets loaded", () => {
				const { loadAwsWafChallenge } = loadModule([
					integrationForThisHost({ cookieDomains: [".nice.org.uk"] }),
				]);

				loadAwsWafChallenge(false);

				expect(window.awsWafCookieDomainList).toBeUndefined();
			});
		});
	});

	describe("whenAwsWafTokenReady", () => {
		// Lets the promise chain inside the module run
		const flushPromises = async () => {
			for (let i = 0; i < 5; i++) await Promise.resolve();
		};

		const addSdkScript = (scriptId) => {
			const script = document.createElement("script");

			script.id = scriptId;
			document.head.appendChild(script);

			return script;
		};

		afterEach(() => {
			jest.useRealTimers();
		});

		it("Resolves straight away when there's no SDK on the page", async () => {
			const { whenAwsWafTokenReady } = loadModule();

			await expect(whenAwsWafTokenReady()).resolves.toBeUndefined();
		});

		it("Waits for the SDK's token when the SDK has already loaded", async () => {
			const { whenAwsWafTokenReady } = loadModule(),
				onReady = jest.fn();

			let resolveToken;

			window.AwsWafIntegration = {
				getToken: jest.fn(
					() => new Promise((resolve) => (resolveToken = resolve))
				),
			};

			whenAwsWafTokenReady().then(onReady);
			await flushPromises();

			expect(window.AwsWafIntegration.getToken).toHaveBeenCalledTimes(1);
			expect(onReady).not.toHaveBeenCalled();

			resolveToken("a-token");
			await flushPromises();

			expect(onReady).toHaveBeenCalledWith(undefined);
		});

		it("Waits for the script to load, then for the SDK's token", async () => {
			const { whenAwsWafTokenReady, scriptId } = loadModule(),
				script = addSdkScript(scriptId),
				getToken = jest.fn(() => Promise.resolve("a-token")),
				onReady = jest.fn();

			whenAwsWafTokenReady().then(onReady);
			await flushPromises();

			expect(onReady).not.toHaveBeenCalled();

			window.AwsWafIntegration = { getToken };
			script.dispatchEvent(new Event("load"));
			await flushPromises();

			expect(getToken).toHaveBeenCalledTimes(1);
			expect(onReady).toHaveBeenCalled();
		});

		it("Finds a script added just after it's called", async () => {
			const { whenAwsWafTokenReady, scriptId } = loadModule(),
				onReady = jest.fn();

			whenAwsWafTokenReady().then(onReady);

			const script = addSdkScript(scriptId);

			await flushPromises();

			expect(onReady).not.toHaveBeenCalled();

			script.dispatchEvent(new Event("load"));
			await flushPromises();

			expect(onReady).toHaveBeenCalled();
		});

		it("Resolves when the script fails to load", async () => {
			const { whenAwsWafTokenReady, scriptId } = loadModule(),
				script = addSdkScript(scriptId),
				ready = whenAwsWafTokenReady();

			await flushPromises();
			script.dispatchEvent(new Event("error"));

			await expect(ready).resolves.toBeUndefined();
		});

		it("Resolves when the SDK can't get a token", async () => {
			const { whenAwsWafTokenReady } = loadModule();

			window.AwsWafIntegration = {
				getToken: () => Promise.reject(new Error("No token for you")),
			};

			await expect(whenAwsWafTokenReady()).resolves.toBeUndefined();
		});

		it("Resolves when the SDK has no getToken", async () => {
			const { whenAwsWafTokenReady } = loadModule();

			window.AwsWafIntegration = {};

			await expect(whenAwsWafTokenReady()).resolves.toBeUndefined();
		});

		it("Gives up waiting after the timeout", async () => {
			jest.useFakeTimers();

			const { whenAwsWafTokenReady } = loadModule(),
				onReady = jest.fn();

			window.AwsWafIntegration = { getToken: () => new Promise(() => {}) };

			whenAwsWafTokenReady(2000).then(onReady);

			jest.advanceTimersByTime(1999);
			await flushPromises();

			expect(onReady).not.toHaveBeenCalled();

			jest.advanceTimersByTime(1);
			await flushPromises();

			expect(onReady).toHaveBeenCalled();
		});
	});

	describe("integrations", () => {
		it("Every integration lists at least one hostname", () => {
			const { integrations } = jest.requireActual("./integrations");

			integrations.forEach(({ hosts }) => {
				expect(hosts.length).toBeGreaterThan(0);
			});
		});

		it("Every integration's script URL is empty or absolute and https", () => {
			const { integrations } = jest.requireActual("./integrations");

			integrations.forEach(({ scriptURL }) => {
				expect(typeof scriptURL).toBe("string");

				if (scriptURL) {
					expect(new URL(scriptURL).protocol).toBe("https:");
				}
			});
		});

		it("Every hostname is a lower case hostname with no scheme, port or path", () => {
			const { integrations } = jest.requireActual("./integrations");

			integrations.forEach(({ hosts }) => {
				hosts.forEach((host) => {
					expect(host).toMatch(/^([a-z0-9-]+\.)+[a-z]+$/);
				});
			});
		});

		it("Every cookie domain is a domain the hostnames sit under", () => {
			const { integrations } = jest.requireActual("./integrations");

			integrations.forEach(({ hosts, cookieDomains = [] }) => {
				cookieDomains.forEach((cookieDomain) => {
					hosts.forEach((host) => {
						expect(host.endsWith(cookieDomain)).toBe(true);
					});
				});
			});
		});

		it("No hostname is listed against more than one integration", () => {
			const { integrations } = jest.requireActual("./integrations"),
				allHosts = integrations.reduce(
					(hosts, integration) => hosts.concat(integration.hosts),
					[]
				);

			expect(new Set(allHosts).size).toBe(allHosts.length);
		});
	});
});
