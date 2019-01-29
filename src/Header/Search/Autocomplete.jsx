import React, { Component } from "react";
import Autocomplete from "accessible-autocomplete/react";

import "!style-loader!css-loader!accessible-autocomplete/dist/accessible-autocomplete.min.css";

function suggest(query, syncResults) {
	fetch(`https://www.nice.org.uk/autocomplete?q=${query}&ajax=ajax`)
		.then(response => response.json())
		.then(data => {
			syncResults(data);
		});
}

const templates = {
	inputValue: suggestion => suggestion && suggestion.Title,
	suggestion: suggestion =>
		suggestion && `<a href="${suggestion.Link}">${suggestion.Title}</a>`
};

const onConfirm = suggestion => {
	if (suggestion) window.location.href = suggestion.Link;
};

export default class Search extends Component {
	render() {
		return (
			<Autocomplete
				id="autocomplete"
				source={suggest}
				templates={templates}
				onConfirm={onConfirm}
			/>
		);
	}
}
