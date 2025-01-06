
import { useContext } from "react"
import { userContext } from "../App"

const ChildC = () => {
    const user = useContext(userContext)
    return (
        <div>
            {/*in this we are accessing data in app.jsx */}
            {user.name}
        </div>
    )
}

export default ChildC
