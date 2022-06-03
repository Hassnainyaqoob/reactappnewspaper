import Button from '@mui/material/Button';


export default function SMbutton(props) {
    const { label , onClick } = props

    return (

        <Button onClick={onClick} variant="contained">{label}</Button>


    )
}