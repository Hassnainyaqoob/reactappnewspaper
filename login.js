import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import SMbutton from "../components/button";
import SMinput from "../components/input";


export default function Login() {

    const navigate = useNavigate();

    let loginButton = () => {

        navigate("/", {
            state:
            {
                user: true
            }
        })
    }

    return (
        <Box>
            <Box>
                <h1>Login</h1>
            </Box>

            <Box sx={{ padding: 1 }}>

                <SMinput label='Email' type='email' />

                <Box sx={{ padding: 4 }}>

                    <SMinput label='Password' type='password' />

                </Box>

                <Box sx={{ padding: 1 }}>

                    <SMbutton onClick={loginButton} label='Login' />

                </Box>

            </Box>

        </Box>
    )
}