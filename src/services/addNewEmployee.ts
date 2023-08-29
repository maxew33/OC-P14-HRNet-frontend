export default async function addNewEmployee(data: object) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        // body: JSON.stringify({
        //     data: data,
        // }),
    }

    return fetch('http://localhost:3000/api/employees', requestOptions)
        .then((res) => {
            return res.json()
        })

        .catch((err) => {
            console.error('Error in updating profile', err)
        })
}
