import { Collapse, fade, Paper, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import InputCard from "./InputCard";
const useStyle = makeStyles((theme) => ({
    root: {
        marginTop: "10px",
        width:"300px",
    },
    addCard: {
        padding: "4px 4px 4px 8px",
        margin: "0px 8px 8px 8px",
        backgroundColor: "#EBECF0",
        "&:hover": {
            backgroundColor: fade("#000", 0.25)
        }
    },
}));



export default function InputContainer({listId,type}) {
    const classes = useStyle();
    const [open, setOpen] = useState(false);
    return (
        <div className={classes.root}>
            <Collapse in={open}>
                <InputCard setOpen= {setOpen} listId={listId} type={type}/>
            </Collapse>
            <Collapse in={!open}>
                <Paper className={classes.addCard} elevation={0} onClick={()=> setOpen(!open)}>
                    <Typography>
                    {type ==="card"? "+ Add Card" : "+ Add List"}
                    </Typography>
                </Paper>
            </Collapse>
        </div>
    )
}