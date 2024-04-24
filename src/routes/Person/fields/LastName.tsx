import React from "react";
import { useFormContext } from "react-hook-form";

export const LastName = () => {
    const { register } = useFormContext();

    return (
        <label htmlFor="person.lastName">
            Nachname&nbsp;
            <input {...register("person.lastName")} type="text" />
        </label>
    );
};
