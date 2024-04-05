/* eslint-disable react/prop-types */
import { useState } from 'react';
import React from 'react';
import style from './App2.module.css'
import Button from 'react-bootstrap/Button';
import Modals from './Modal'
import Card from 'react-bootstrap/Card';

export const CardApi = (props) => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Card style={{ width: '18rem' }} className={style.cardPage}>
            <Card.Img variant="top" src={props.image} alt={props.name} width={150} height={"auto"} className={style.cardImage} />
            <Card.Body>
                <Card.Title className={style.cardTitle}>{props.name}</Card.Title>
                {/* <Card.Text className={style.cardText}>
                    {props.desc}
                </Card.Text>
                <Card.Text className={style.cardValue}>
                    {props.value}
                </Card.Text> */}
                {/* <Button variant="info" className={style.btn} onClick={() => setModalShow(true)}>
                    INFO
                </Button>
                <Modals
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                /> */}
            </Card.Body>
        </Card>
    )
}