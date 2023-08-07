import React, { useState } from 'react'

interface DropdownProps {
    currentValue: string | null
    items: (number | string)[]
    dataId: string
    selectItem: (id: string, value: string) => void
}

const Dropdown: React.FC<DropdownProps> = (props) => {
    const [isDropped, setIsDropped] = useState(false)

    const handleClick = () => {
        setIsDropped(!isDropped)
    }

    const handleSelect = (item: string | number) => {
        props.selectItem(props.dataId, item.toString())
        setIsDropped(false)
    }

    return (
        <div className="dropdown">
            <div>{props.dataId} :</div>
            <div className={"value" + (isDropped ? " dropped" : "")} onClick={handleClick}>
                {props.currentValue ?? 'select'}
                {isDropped && (
                    <ul className="list">
                        {props.items.map((item, key) => (
                            <li key={key} onClick={() => handleSelect(item)}>
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Dropdown
