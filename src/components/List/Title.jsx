import React, { useContext, useState } from "react";
import { InputBase, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import storeAPI from "../../utils/storeAPI";
const useStyle = makeStyles((theme) => ({
    editableTitle: {
        marginLeft: "20px",
        flexGrow: 1,
        fontSize: "1.2rem",
        fontWeight: "lightbold"
    },
    input: {
        margin: "8px",
    }
}));




export default function Title({ title, listId }) {
    const [open, setOpen] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const { updateListTitle } = useContext(storeAPI);
    const classes = useStyle();
    const handleOnChange = (e) => {
        setNewTitle(e.target.value);
    }
    const handleOnBlur = () => {
        updateListTitle(newTitle, listId);
        setOpen(false);
    }
    return (
        <div>
            {
                open ? (
                    <div>
                        <InputBase
                            onChange={handleOnChange} value={newTitle} inputProps={{
                                className: classes.input,
                            }}
                            fullWidth
                            onBlur={handleOnBlur} />
                    </div>
                ) :
                    (
                        <div>
                            <Typography onClick={() => setOpen(!open)} className={classes.editableTitle}>
                                {title}
                            </Typography>
                        </div>
                    )
            }
        </div>
    )
}