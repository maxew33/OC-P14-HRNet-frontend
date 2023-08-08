import { useAtom } from "jotai"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import routesConfig from "./routes/routesConfig"
import { useEffect } from "react"
import CallData from "./CallData/CallData"
import { employeesAtom } from "./main"


export const App = () => {
    
const router = createBrowserRouter(routesConfig)

const [employees, setEmployees] = useAtom(employeesAtom)

useEffect(() => {
    if (employees.length === 0) {
        const fetchData = async () => {
            const url = ''

            const callData = new CallData(url)

            const employeesData = await callData.getEmployeesData()

            setEmployees([...employees, ...employeesData])
        }
        fetchData()
    }
}, [])

    return (
        <div>
            {employees.length !== 0 && <RouterProvider router={router} />}
        </div>
    )
}
