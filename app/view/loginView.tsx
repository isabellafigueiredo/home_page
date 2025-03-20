"use client";
import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import { LoginForm } from "../components/loginForm";
import { loginController } from "../controller/loginController";

export const LoginView: React.FC = () => {
    const { formData, onChange, onSubmit } = loginController();
    return (
        <Container>
            <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
                <Typography variant="h4" align="center">Login</Typography>
                <LoginForm formData={formData} onChange={onChange} onSubmit={onSubmit} />
            </Paper>
        </Container>
    )
}