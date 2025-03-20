import React from "react";

export interface formProps{
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formData: {
        name: string;
        email: string;
        password: string;
    }
}