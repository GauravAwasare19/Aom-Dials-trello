import React from "react";
import { Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import { Draggable } from "react-beautiful-dnd";
const useStyle = makeStyles((theme) => ({
    card: {
        padding: "4px 4px 4px 8px",
        margin: "8px",
    }
}));



export default function Card({ card, index }) {
    const classes = useStyle();
    return (
        <Draggable draggableId={card.id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                >
                    <Paper className={classes.card}>
                        {card.title}
                        <br></br>
                        {card.images1}
                        <br></br>
                        {card.quantity}
                        <br></br>
                        {card.material}
                        <br></br>
                        {card.finishing}
                    </Paper>
                </div>
            )}
        </Draggable>
    )
}