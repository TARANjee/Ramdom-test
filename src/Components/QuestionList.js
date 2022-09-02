import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Divider } from '@mui/material';

const QuestionList = ({ question }) => {
    return (
        <Box >
            <List>
                {question.map((text, index) => (
                    <div>
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AssignmentIcon />
                                </ListItemIcon>
                                <ListItemText primary={text.title} />

                            </ListItemButton>

                        </ListItem>
                        <Divider light />
                    </div>
                ))}
            </List>
        </Box>
    )
}

export default QuestionList