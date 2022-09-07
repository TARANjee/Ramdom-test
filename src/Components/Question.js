import { Button, Chip, Divider, Fab, IconButton, ListItemText, Typography } from '@mui/material'
import React from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Question = ({ item }) => {

    const text = item.description;
    const description = text.split('.');

    return (
        <div className='margin'>
            {/*Title */}
            <div className='margin title'>
                <div >
                    <Typography variant="h6">
                        {item.id}. {item.title}
                    </Typography>
                </div>
                <div className='row marginTB '>
                    <div className={`${item.difficulty == "Easy" ? "green" : item.difficulty == "Medium" ? "yellow" : "red"}  `}>
                        <Typography variant="p">
                            {item.difficulty}
                        </Typography>
                    </div>
                    <div className='marginL'>
                        <Button color="inherit" startIcon={< ThumbUpOffAltIcon />}>
                            213658
                        </Button>

                    </div>
                    <div className='marginL'>
                        <Button color="inherit" startIcon={< ThumbDownOffAltIcon />}>
                            2138
                        </Button>


                    </div>
                    <div className='marginL'>
                        <Button style={{ textTransform: 'none' }} color="inherit" startIcon={< FavoriteBorderIcon />}>
                            Add to List
                        </Button>
                    </div>
                    <div className='marginL'>
                        <Button style={{ textTransform: 'none' }} color="inherit" startIcon={< ShareIcon />}>
                            Share
                        </Button>
                    </div>

                </div>

            </div>
            <Divider />
            {/*Description */}
            <div className='margin'>
                <div className='marginTB'>
                    {description.map((text) => (
                        <div className='marginT'>
                            <div >{text}</div>
                        </div>
                    ))}
                </div>
            </div>
            {/*Example */}
            <div className='margin'>
                {item.examples.map((example) => (
                    <div className='marginTB'>
                        <div style={{ fontWeight: 'bold' }}>Example {example.id}:</div>
                        <div className='example'>
                            <div className='exp'><p style={{ fontWeight: 'bold' }}>Input:</p>{example.input}</div>
                            <div className='exp'><p style={{ fontWeight: 'bold' }}>Output:</p>{example.output}</div>
                            <div className='exp row'>{example.explaination == null ? "" : (<div className='row'><p style={{ fontWeight: 'bold' }}>Explaination: </p> {example.explaination}</div>)}</div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Constraints */}
            <div className='margin '>
                <div>Constraints</div>
                <ul className='margin marginTB'>
                    {item.Constraints.map((list) => (

                        <li className='marginT'>{list}</li>

                    ))}
                </ul>
            </div>
            <div className='margin'>
                <div>Companies</div>
                <div className=' marginTB'>
                    {item.companies.map((company) => (
                        <Chip label={company} variant="outlined" />
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Question