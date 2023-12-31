import axios from 'axios';

const SAMPLE_API_REST_URL = "http://127.0.0.1:8081/api/samples/";
//const SAMPLE_API_REST_URL = "http://127.0.0.1:5000/api/samples/all";

export class APISampleService {

	async getSamplePag(page, rowsPerPage, order, orderBy, filter, checkedState, filterChecks) {
		console.log('APISampleService [getSamplePag]: ', [page, rowsPerPage, order, orderBy, filter, checkedState, filterChecks]);
		const config = {
			method: 'post',
			url: SAMPLE_API_REST_URL,
			data: {
				pagination: {
					page: page,
					size: rowsPerPage,
					sortBy: orderBy,
					sort: order
				},
				text: filter ? filter : null,
				fields: checkedState,
				filterChecks: filterChecks
			},
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		};
		return await axios(config);
	}

	async getLocations(filter, checkedState) {
		console.log('APISampleService [getLocations]: ', [filter, checkedState]);
		const config = {
			method: 'post',
			url: SAMPLE_API_REST_URL + 'locations',
			data: {
				text: filter ? filter : null,
				fields: checkedState
			},
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		};
		return await axios(config);
	}
}

export default new APISampleService();