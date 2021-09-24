import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

import IconButton from "@material-ui/core/IconButton";

import { v4 as uuidv4 } from "uuid";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
        },
    },
    button: {
        margin: theme.spacing(1),
    },
}));

function First() {
    const classes = useStyles();
    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), firstName: "", lastName: "" },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", inputFields);
    };

    const handleChangeInput = (id, event) => {
        console.log(id);
        const newInputFields = inputFields.map((i) => {
            if (id === i.id) {
                console.log(i.id);
                i[event.target.name] = event.target.value;
            }
            return i;
        });

        setInputFields(newInputFields);
    };

    const handleAddFields = () => {
        setInputFields([
            ...inputFields,
            { id: uuidv4(), firstName: "", lastName: "" },
        ]);
    };

    const handleRemoveFields = (id) => {
        const values = [...inputFields];
        values.splice(
            values.findIndex((value) => value.id === id),
            1
        );
        setInputFields(values);
    };

    return (
        <Container>
            <h1>Add New Member</h1>
            <form className={classes.root} onSubmit={handleSubmit}>
                {inputFields.map((inputField) => (
                    <div key={inputField.id}>
                        <TextField
                            name="firstName"
                            label="First Name"
                            variant="filled"
                            value={inputField.firstName}
                            onChange={(event) =>
                                handleChangeInput(inputField.id, event)
                            }
                        />
                        <TextField
                            name="lastName"
                            label="Last Name"
                            variant="filled"
                            value={inputField.lastName}
                            onChange={(event) =>
                                handleChangeInput(inputField.id, event)
                            }
                        />
                        <IconButton
                            disabled={inputFields.length === 1}
                            onClick={() => handleRemoveFields(inputField.id)}
                        >
                            <i class="fas fa-times"></i>
                        </IconButton>
                        <IconButton onClick={handleAddFields}>
                            <i class="fas fa-plus"></i>
                        </IconButton>
                    </div>
                ))}

                <button
                    type="button"
                    class="btn btn-outline-success"
                    onClick={handleSubmit}
                >
                    <i class="fas fa-paper-plane"></i> Send
                </button>
            </form>
        </Container>
    );
}

export default First;
