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




export default function Finishing({ finishing, listId }) {
    const [open, setOpen] = useState(false);
    const [newFinishing, setNewFinishing] = useState(finishing);
    const { updateListTitle } = useContext(storeAPI);
    const classes = useStyle();
    const handleOnChange = (e) => {
        setNewFinishing(e.target.value);
    }
    return (
        <div>
            {
                open ? (
                    <div>
                        <InputBase
                            onChange={handleOnChange} value={newFinishing} inputProps={{
                                className: classes.input,
                            }}
                            fullWidth
                             />
                    </div>
                ) :
                    (
                        <div>
                            <Typography onClick={() => setOpen(!open)} className={classes.editableTitle}>
                                {finishing}
                            </Typography>
                        </div>
                    )
            }
        </div>
    )
}