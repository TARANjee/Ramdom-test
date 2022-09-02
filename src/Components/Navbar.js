import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

import { Button, Modal, Typography, Box, AppBar, Toolbar, Fab, Container } from '@mui/material';
import { Upload } from '@mui/icons-material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box >

            <AppBar position="static" className="mr">

                <Container >
                    <div className='row btw'>
                        <div className='row'>
                            <Typography variant="h6" component="div"  >
                                <Link to='/' className='customBtn space' >Home</Link>
                            </Typography>
                            <Typography variant="h6" component="div" >
                                <Link to='/about' className='customBtn space'>About</Link>
                            </Typography>
                            <Typography variant="h6" component="div" >
                                <Link to='/contact' className='customBtn space'>Contact </Link>
                            </Typography>
                        </div>
                        <div className='row '>
                        <Typography variant="h6" component="div">
                        <Link to='/test' className='customBtn space'>Test </Link>
                            
                            </Typography>
                            <Typography variant="h6" component="div">
                                <Fab variant="extended" className=' space'>
                                    <Upload onClick={handleOpen} />
                                </Fab>
                            </Typography>
                            <Typography variant="h6" component="div" >
                                <Fab variant="extended">login</Fab>
                            </Typography>
                        </div>
                    </div>
                </Container>

            </AppBar>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </Box>
        // <div>
        //     <nav >
        //         <ul>
        //             <li>
        //                 
        //             </li>
        //             <li>
        //                 <Link to='/about'>About</Link>
        //             </li>
        //         </ul>
        //     </nav>
        // </div>
    )
}

export default Navbar