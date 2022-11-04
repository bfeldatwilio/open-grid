import React, { useEffect, useState } from "react";
import { getRefreshSignedRequest, decode } from "./utils/canvasUtil";
import "@salesforce/canvas-js-sdk";

export default function Grid() {
	const [sr, setSr] = useState();

	useEffect(() => {
		populateSignedRequest();
	}, []);

	const populateSignedRequest = () => {
		getRefreshSignedRequest().then((data) => {
			let payload = data.payload.response;
			// TODO  Add in the validation.  Get the consumer key from env and decode the payload[0] to verify authenticity
			let part = payload.split(".")[1];
			let signedRequest = decode(part);
			let signedRequestJSON = JSON.parse(signedRequest);
			setSr(signedRequestJSON);
			console.log(signedRequest);
		});
	};
	return <div>grid</div>;
}
