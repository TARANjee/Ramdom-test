import { Diversity1 } from '@mui/icons-material'
import { Divider, Grid } from '@mui/material'
import React from 'react'
import Question from './Question'
import QuestionList from './QuestionList'
const question = [
    {
        title: 'Two Sum',
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
        title: 'Reverse Integer',
    },
    {
        title: 'Palindrome Number',
    },
    {
        title: 'Search in Rotated Sorted Array',
    },
    {
        title: 'Find First and Last Position of Element in Sorted Array',
    }
]
const Test = () => {
    return (
        <Grid container style={{minHeight:'92vh'}} >

            <Grid item  md={3}>
                <QuestionList question={question} />
            </Grid>
            <Divider orientation="vertical" flexItem/>
            <Grid item  md={8}>
                <Question question={question} />
            </Grid>

        </Grid>
    )
}

export default Test