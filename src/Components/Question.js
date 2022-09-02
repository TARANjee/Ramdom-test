import { Divider, Typography } from '@mui/material'
import React from 'react'

const Question = ({ question }) => {

    return (
        <div>


            <Typography variant="h4" component="h3">
                1.{question[0].title}
            </Typography>
            

        </div>
    )
}

export default Question