import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Button, fade, IconButton, InputBase, Paper } from "@material-ui/core";
import storeAPI from "../../utils/storeAPI";
import "./Header.css"
import Image1 from "./images.jsx"
const useStyle = makeStyles((theme) => ({
    card: {
        width:"280px",
        margin: "0px 8px 8px 8px",
        paddingBottom: "8px",

    },
    input: {
        margin: "8px",
    },
    btnConfirm: {
        background: "#5AAC44",
        color: "#fff",
        "&:hover": {
            background: fade("#5AAC44", 0.75)
        }
    },
    confirm: {
        margin: "0px 8px 8px 8px",
    }
}));


 

export default function InputCard({ setOpen, listId, type }) {
    const classes = useStyle();
    const { addMoreCard, addMoreList } = useContext(storeAPI);
    const [title, setTitle] = useState("");
    const [quantity, setQuantity] = useState("");
    const [material, setMaterial] = useState("");
    const [images1, setImages1] = useState("");
    const [finishing, setFinishing] = useState("");
    

    const handleOnChange = (e) => {
        setTitle(e.target.value);
    };
    const handleOnChange1 = (e) => {
        setQuantity(e.target.value);
    };
    const handleOnChange2 = (e) => {
        setMaterial(e.target.value);
    };
    const handleOnChange3 = (e) => {
        setFinishing(e.target.value);
    };
    const handleOnChange4 = (e) => {
        setImages1(e.target.value);
    };
   

    const handleBtnConfirm = () => {
        if (type === 'card') {
            addMoreCard(title,quantity,material,finishing,images1, listId);
            setTitle('');
            setQuantity('');
            setMaterial('');
            setFinishing('');
            setImages1('');
           
            setOpen(false);
        } else {
            addMoreList(title);
           setTitle('');
            //setQuantity('');
            
            setOpen(false);
        }
      
    };
   
    return (
        <div>
            <div>
                <Paper className={classes.card}>
                    {type==='card' ? (
                    <>
                    <Image1
                    onChange={handleOnChange4}
                    onBlur={() => setOpen(false)}
                    value={images1}
                    />
                    <InputBase
                        onChange={handleOnChange}
                        onBlur={() => setOpen(false)}
                        multiline
                        fullWidth
                        inputProps={{
                            className: classes.input,
                        }}
                        placeholder={"Enter the party-name" }
                        value={title}
                        
                    />
                    
                          <InputBase
                          onChange={handleOnChange1}
                          onBlur={() => setOpen(false)}
                          multiline
                          fullWidth
                          inputProps={{
                              className: classes.input,
                          }}
                          placeholder={ "Enter quantity" }
                          value={quantity}
                      />
                      <InputBase
                          onChange={handleOnChange2}
                          onBlur={() => setOpen(false)}
                          multiline
                          fullWidth
                          inputProps={{
                              className: classes.input,
                          }}
                          placeholder={ "Enter material" }
                          value={material}
                      />
                      <InputBase
                          onChange={handleOnChange3}
                          onBlur={() => setOpen(false)}
                          multiline
                          fullWidth
                          inputProps={{
                              className: classes.input,
                          }}
                          placeholder={ "Enter finishing"}
                          value={finishing}
                      />
                      </>) :
                       (<InputBase
                        onChange={handleOnChange}
                        onBlur={() => setOpen(false)}
                        multiline
                        fullWidth
                        inputProps={{
                            className: classes.input,
                        }}
                        placeholder={type === 'card' ? "Enter the party-name" : "Enter the phase name"}
                        value={title}
                    />)}  
                </Paper>
            </div>
            <div className={classes.confirm}>
                <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>{type === "card" ? "Add Card" : "Add List"}</Button>
                <IconButton onClick={() => setOpen(false)}>
                    x
                </IconButton>
            </div>
        </div>
    )
}