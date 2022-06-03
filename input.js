import TextField from '@mui/material/TextField';


export default function SMinput(props) {

    const { label, type } = props

    return (
        <>

            <TextField
                id="outlined-password-input"
                label={label}
                type={type}
                variant='outlined'
            />

        </>
    )
}