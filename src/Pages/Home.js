import { Stack } from '@mui/material';
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TaskIcon from '@mui/icons-material/Task';
import { Link } from 'react-router-dom';
import '../App.css';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const questions = [
    {
        question: 'Two Sum',
        // description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order.',
        // examples: [
        //     {
        //         Input: 'Input: nums = [2,7,11,15], target = 9',
        //         Output: 'Output: [0, 1]',
        //         Explanation: 'Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].'
        //     }
        // ]
    },
    {
        question: 'Reverse Integer',
    },
    {
        question: 'Palindrome Number',
    },
    {
        question: 'Search in Rotated Sorted Array',
    },
    {
        question: 'Find First and Last Position of Element in Sorted Array',
    }
]
function createData(id,title, solution, difficulty) {
    return { id,title, solution, difficulty};
  }
  
const rows = [
    createData(1,'Find the Duplicate Number', <TaskIcon color="primary" />,'Easy'),
    createData(2,'Find All Duplicate in an Array', <TaskIcon color="primary" />,'Easy'),
    createData(3,'Intersection of Two Array', <TaskIcon color="primary" />,'Medium'),
    createData(4,'Two Sum', <TaskIcon color="primary" />,'Easy'),
    createData(5,'Peak Index in a Mountain Array', <TaskIcon color="primary" />,'Medium'),
    
];
const Home = () => {
    const [open, setOpen] = useState(false);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell>Title(Questions)</StyledTableCell>
                        <StyledTableCell >Solution</StyledTableCell>
                        <StyledTableCell >Difficulty</StyledTableCell>
                        </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell >{row.id}</StyledTableCell>
                            <StyledTableCell component="th" >{row.title}</StyledTableCell>
                            <StyledTableCell ><Link to={`${row.title}/solution`}>{row.solution}</Link> </StyledTableCell>
                            <StyledTableCell style={row.difficulty==='Easy'?{color:'green'}:{color:'#FEBF1D'} } >{row.difficulty}</StyledTableCell>
                           </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        // <div className='container center'>
        //     <Stack spacing={2}>
        //         {questions.map((item) => (
        //             <div>{item.question}</div>
        //         ))}



        //     </Stack>
        // </div>

    )
}
export default Home;