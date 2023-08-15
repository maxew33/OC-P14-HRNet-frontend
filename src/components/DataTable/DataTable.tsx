import React, { useEffect, useState } from 'react'

import styles from '../../style/DataTable.module.css'

interface DataTableProps {
    title?: string
    headingNames?: { [key: string]: string } | null
    data: object[]
}

export const DataTable: React.FC<DataTableProps> = (props) => {
    const { title, headingNames, data } = props

    const [sortedData, setSortedData] = useState(data)

    const [sortedKey, setSortedKey] = useState({ key: '', asc: false })

    let namesGiven = headingNames ? Object.values(headingNames) : null

    const dataKeys: string[] = Object.keys(data[0])

    const headings: { [key: string]: string } = {}

    //check if headingNames keys and data keys are the same
    if (headingNames) {
        const dataKeysToCompare = data.length > 0 ? dataKeys : []

        const missingKeys = Object.keys(headingNames).filter(
            (key) => !dataKeysToCompare.includes(key)
        )

        if (missingKeys.length > 0) {
            namesGiven = null
            console.warn(
                `Key${missingKeys.length > 2 ? 's' : ''} ${missingKeys.join(
                    ', '
                )} ${
                    missingKeys.length > 2 ? 'are' : 'is'
                } missing in the heading names objects given. Data keys will be used instead.`
            )
        }
    }

    //get the table colmuns heading name
    const headingNamesGot = namesGiven || dataKeys

    dataKeys.forEach((data, idx) => {
        headings[data] = headingNamesGot[idx]
    })

    //sort data by clicking on the tbale header

    const handleSort = (key: string) => {
        //je récupère la clé
        console.log(key)

        sortedKey.key === key
            ? setSortedKey((prevSortedKey) => ({
                  ...prevSortedKey,
                  asc: !prevSortedKey.asc,
              }))
            : setSortedKey({ key: key, asc: false })        
    }

    useEffect(()=>{

        const tmpData = [...data].sort((a: any, b: any) => {
            if (a[sortedKey.key] > b[sortedKey.key]) return (sortedKey.asc ? 1 : -1)
            if (a[sortedKey.key] < b[sortedKey.key]) return (sortedKey.asc ? -1 : 1)
            return 0
        })

        setSortedData(tmpData)

    }, [sortedKey])

    return (
        <table className={styles.table}>
            <caption>{title ?? ''}</caption>
            <tbody>
                <tr>
                    {Object.keys(headings).map((name: string, idx) => (
                        <th
                            scope="col"
                            key={'col' + idx}
                            onClick={() => handleSort(name)}
                        >
                            {headings[name]} {name === sortedKey.key && (sortedKey.asc ? "▲" : "▼")}
                        </th>
                    ))}
                </tr>
                {sortedData.map((data, rowIdx) => (
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
