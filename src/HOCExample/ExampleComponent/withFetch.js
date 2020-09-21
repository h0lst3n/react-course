//https://hn.algolia.com/api/v1/search?query=react

import React from 'react';
import withFetch from '../withFetch';

const MyComponentWithFetch = props => (<div>{JSON.stringify(props, null, 2)}</div>);

export default withFetch(/*'https://hn.algolia.com/api/v1/search?query=react'*/)(MyComponentWithFetch);
