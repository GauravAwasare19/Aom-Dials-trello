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




export default function Quantity({ quantity, listId }) {
    const [open, setOpen] = useState(false);
    const [newQuantity, setNewQuantity] = useState(quantity);
    const { updateListTitle } = useContext(storeAPI);
    const classes = useStyle();
    const handleOnChange = (e) => {
        setNewQuantity(e.target.value);
    }
    return (
        <div>
            {
                open ? (
                    <div>
                        <InputBase
                            onChange={handleOnChange} value={newQuantity} inputProps={{
                                className: classes.input,
                            }}
                            fullWidth
                             />
                    </div>
                ) :
                    (
                        <div>
                            <Typography onClick={() => setOpen(!open)} className={classes.editableTitle}>
                                {quantity}
                            </Typography>
                        </div>
                    )
            }
        </div>
    )
}