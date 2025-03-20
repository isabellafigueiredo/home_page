import React from "react";
import {TextField, Button, Box} from "@mui/material";
import {formProps} from "../contract/formProps";

export const LoginForm = ({onSubmit, onChange, formData}: formProps) => {
    return(
        <>
        <Box
            component="form" onSubmit={onSubmit}
            sx={{display: "flex", flexDirection: "column", gap: 2}}
        >
            <TextField label= "Nome" name= "name" value={formData.name} onChange={onChange} fullWidth required/>
            <TextField label= "Email" name= "email" value={formData.email} onChange={onChange} fullWidth required/>
            <TextField label= "Senha" name= "password" value={formData.password} onChange={onChange} fullWidth required/>
            <Button type="submit" variant="contained" color="primary" fullWidth>Entrar</Button>

        </Box>
        </>
    )
}