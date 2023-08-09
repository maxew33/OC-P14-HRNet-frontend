import React from 'react'

import styles from '../../style/DataTable.module.css'

interface DataTableProps {
    title?: string
    headingNames?: { [key: string]: string } | null
    data: object[]
}

export const DataTable: React.FC<DataTableProps> = (props) => {

    let namesGiven = props.headingNames
        ? Object.values(props.headingNames)
        : null

    let dataKeys: string[] = props.headingNames
        ? Object.keys(props.headingNames)
        : []

    //check if headingNames keys and data keys are the same
    if (props.headingNames) {

        const dataKeysToCompare = props.data.length > 0 ? Object.keys(props.data[0]) : [];

        const missingKeys = Object.keys(props.headingNames).filter(key => !dataKeysToCompare.includes(key));

        if (missingKeys.length > 0) {
            namesGiven = null
            dataKeys = Object.keys(props.data[0])
            console.warn(`Key${missingKeys.length > 2 ? 's' : ''} ${missingKeys.join(', ')} ${
                missingKeys.length > 2 ? 'are' : 'is'
            } missing in the heading names objects given. Data keys will be used instead.`);
        }
    }

    //get the table colmuns heading name
    const headingNames = namesGiven || Object.keys(props.data[0])

    //recréer un tableau avec les keys et valeurs + idx

    return (
        <table className={styles.table}>
            <caption>{props.title ?? ''}</caption>
            <tbody>
                <tr>
                    {headingNames.map((name, idx) => (
                        <th scope="col" key={'col' + idx}>
                            {name}
                        </th>
                    ))}
                </tr>
                {props.data.map((data, rowIdx) => (
                    <tr key={'row' + rowIdx + 1}>
                        {dataKeys.map((key, colIdx) => (
                            <th
                                scope="col"
                                key={'row' + rowIdx + 'col' + colIdx}
                            >
                                {data[key as keyof typeof data]}
                            </th>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
