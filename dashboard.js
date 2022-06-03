import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Mainlayout from "./mainlayout";


export default function Dashboard() {

    const [user, setUser] = useState(false)

    const navigate = useNavigate();

    const location = useLocation();

    useEffect(() => {

        {
            location.state && location.state.user ?
                navigate("/")
                :
                navigate("login")
        }

    }, []

    )

    return (

        <Mainlayout />

    )
}
