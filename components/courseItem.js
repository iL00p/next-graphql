import React from 'react';

export default ({ data }) => (
    <div>
        <h3>{data.index + 1}. {data.name}</h3>
        <p>{data.description}</p>
    </div>
)