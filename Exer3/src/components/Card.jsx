/* eslint-disable react/prop-types */
import { useState } from 'react';
import style from './App.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Cards = (props) => {

  function Green() {
    return <div className={style.cardStats}></div>
  }

  function Red() {
    return <div className={style.cardStats2}></div>
  }

  function ReturnRender(props) {
    if (props.status === "mostruario")
      return <Red/>;
    else 
      return <Green/>
  }

  return(
    <Card style={{ width: '18rem' }}  className={style.cardPage}>
    <Card.Img variant="top" src={props.image} alt={props.name} width={150} height={"auto"} className={style.cardImage}/>
    <Card.Body>
    <Card.Title  className={style.cardTitle}>{props.name}</Card.Title>
      <Card.Text className={style.cardText}>
        {props.desc}
      </Card.Text>
      <Card.Text className={style.cardValue}>
        {props.value}
      </Card.Text>
      <ReturnRender/>
      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
  </Card>
  )
}