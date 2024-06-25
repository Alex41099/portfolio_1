import React from 'react';

export const Menu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <ul>
            {props.menuItems.map((item, index) => {
                return <li key={index}>
                    <a href="#">{item}</a>
                </li>
            })}
        </ul>
    );
};

