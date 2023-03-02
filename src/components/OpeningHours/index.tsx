import React from 'react';

type Props = {
    header: string,
    list: Item[]
}

export function Schedule({header, list}: Props) {
    return (
        <div className="content">
            <div className="header">
                {header}
            </div>
            <ul className="list">
                {list.map(el => <li>{el.caption}</li>)}
            </ul>
        </div>
    );
}