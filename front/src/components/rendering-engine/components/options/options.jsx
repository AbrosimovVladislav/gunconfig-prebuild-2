import React from "react";
import { Menu, Button } from "@mantine/core";

const Options = ({ title, components, setVisibleData, visibleData }) => {
    const handleClick = (el) => {
        setVisibleData((prev) => {
            let tempData = prev.filter((comp) => comp.type !== el.type);
            const data = [...tempData, el];
            return data;
        });
    };

    return (
        <Menu shadow="md">
            <Menu.Target>
                <Button>{title}</Button>
            </Menu.Target>

            <Menu.Dropdown>
                {components.map((el, idx) => (
                    <Menu.Item onClick={() => handleClick(el)} key={idx}>
                        {el.name}
                    </Menu.Item>
                ))}
            </Menu.Dropdown>
        </Menu>
    );
};

export default Options;
