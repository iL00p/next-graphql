import React from 'react';

export default () => (
    <style jsx="true">
        {`
            div {
                font-family : Arial;
                padding : 10px;
            }
            ul {
                list-style-type: none;
                padding: 0px;
            }

            li {
                cursor: pointer;
                margin: 10px 0;
            }

            li:hover {
                opactiy : 0.5
            }

            .blue-text {
                color : blue;
            }
        `}
    </style>
)