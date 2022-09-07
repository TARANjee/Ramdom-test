import { Divider, Grid } from '@mui/material'
import React, { useState } from 'react'
import Question from './Question'
import QuestionList from './QuestionList'
const question = [
    {
        id: '1',
        title: 'Two Sum',
        difficulty:'Easy',
        description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order.',
        examples: [
            {
                id: 1,
                input: 'nums = [2,7,11,15], target = 9',
                output: '[0, 1]',
                explaination: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
            },
            {
                id: 2,
                input: 'nums = [3,2,4], target = 6',
                output: '[1,2]',
            },
            {
                id: 3,
                input: 'nums = [3,3], target = 6',
                output: '[0,1]',
            },
        ],
        Constraints: ["2 <= nums.length <= 104", "-109 <= nums[i] <= 109", "-109 <= target <= 109", "Only one valid answer exists."],
        companies: ['facebook', 'google', 'amazon']
    },
    {
        id: '2',
        title: 'Reverse Integer',
    },
    {
        id: '3',
        title: 'Palindrome Number',
    },
    {
        id: '4',
        title: 'Search in Rotated Sorted Array',
    },
    {
        id: '5',
        title: 'Find First and Last Position of Element in Sorted Array',
    }
]

const Test = () => {
    const [title, setTitle] = useState(question[0].title);
    const [item, setItem] = useState(question[0]);
    const callbackTitle = (item) => {
        setItem(item)
        
    }
   
    return (
        <Grid container style={{ minHeight: '92vh' }} >

            <Grid item md={3}>
                <QuestionList question={question} callbackTitle={callbackTitle} />
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item md={8}>
                <Question question={question} item={item} />
            </Grid>

        </Grid>
    )
}

export default Test