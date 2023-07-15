import CarForm from './CarForm'
import { Box} from '@mui/material';

type Props = {
    id?: string[],
    open: boolean;
    onClose: () => void;
}
const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    height:'90%',
    bgcolor: 'background.paper',
    border: '2px solid black',
    borderRadius:'4px',
    px: 5,
    py:2,
    zIndex:'modal',
    overflow:'auto'
  };

const bgFade={
    position: 'absolute' as 'absolute',
    zIndex:'modal',
    bgcolor: 'black',
    height:'100%',
    width:'100%',
    opacity:'60%'
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return (<></>)
    return (
        <Box>
            <Box sx={bgFade}></Box>
            <Box  sx={modalStyle}>
                <Box>
                    <p  onClick={props.onClose}>
                        X
                    </p>
                </Box>
                <Box>
                    <CarForm id={props.id} onClose={props.onClose} />
                </Box>
            </Box>

        
        </Box>
    )
}

export default Modal