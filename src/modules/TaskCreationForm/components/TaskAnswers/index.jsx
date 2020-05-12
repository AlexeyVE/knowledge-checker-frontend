import React, { useState } from 'react'
import { Checkbox, Input, Divider, Button, Radio, Empty } from 'antd'
import { randomString } from 'helpers'
import AnswerPictures from './AnswerPictures'
import { TaskAnswer } from '../'
import './taskAnswers.scss'


const TaskAnswers = ({ setAnswers,answers }) => {
  const initialState = {
    answer_body: null,
    isCorrect: false
  }  

  const [answer, setAnswer] = useState(initialState)

  const onAnswerTextChange = (e) => {
    setAnswer({...answer,answer_body: e.target.value})
  }
  const onSetAsCorrect = (e) => {
    setAnswer({...answer, isCorrect: e.target.checked})
  }
  const addAnswer = () => {
   setAnswers(answer)
   return setAnswer(initialState)
 }
return(
  <div className = "task-answers">
    <div className = "task-answers-header">
      <Button onClick = {addAnswer}>Додати відповідь</Button>
      <Radio.Group style = {{marginLeft:15}} defaultValue = {"text"}> 
        <Radio value = {"text"}>Текст</Radio>
        <Radio value = {"image"}>Малюнок</Radio>
      </Radio.Group>
    </div>  
    <Input style = {{marginBottom:24}}
      value = {answer.answer_body} 
      onChange = {onAnswerTextChange}
      addonAfter = {
        <Checkbox 
          checked = {answer.isCorrect} 
          onChange = {onSetAsCorrect}
        />}
    />
    {answers.length > 0 && answers.map((answer,index) =>
      <TaskAnswer
        key = {randomString(21)}        
        answerBody = {answer.answer_body} 
        isCorrect = {answer.isCorrect}/>
    )}    
   </div>
)}
export default TaskAnswers    

