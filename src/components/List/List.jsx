import React from "react";
import { CssBaseline, Paper, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import Title from "./Title";
import Quantity from "./Quantity"
import Material from "./Material"
import Image1 from "../Input/images";
import Finishing from "./Finishing";
import Card from "../Card.jsx";
import InputContainer from "../Input/InputContainer";
import { Draggable, Droppable } from "react-beautiful-dnd";

const useStyle = makeStyles((theme) => ({
    root: {
        minwidth: '300px',
        backgroundColor: '#EBECF0',
        marginLeft: "20px",
        margin: "10px",
        padding: "3px"
    },
    cardContainer: {
        marginTop: "20px"
    }
}));






export default function List({ list, index }) {
    const classes = useStyle();
    return (
        <Draggable draggableId={list.id} index={index}>
            {(provided) => (
                <div {...provided.draggableProps} ref={provided.innerRef}>
                    <Paper className={classes.root} {...provided.dragHandleProps}>
                        <CssBaseline />
                        <Title title={list.title} listId={list.id} />
                        <Image1 Image1={list.Image1} listId={list.id} />
                        <Quantity quantity={list.quantity} listId={list.id} />
                        <Material material={list.material} listId={list.id} />
                        <Finishing finishing={list.finishing} listId={list.id} />
                        
                        <Droppable droppableId={list.id}>
                            {(provided) => (<div ref={provided.innerRef}{...provided.droppableProps} className={classes.cardContainer}>
                                {list.cards.map((card, index) => (
                                    <Card key={card.id} card={card} index={index} />
                                ))}
                                {provided.placeholder}
                            </div>)}
                        </Droppable>
                        <InputContainer listId={list.id} type="card" />
                    </Paper>
                </div>
            )}
        </Draggable>
    )
}