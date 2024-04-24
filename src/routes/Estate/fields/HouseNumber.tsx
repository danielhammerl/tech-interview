import React from "react";
import { useFormContext } from "react-hook-form";

export const HouseNumber = () => {
    const { register } = useFormContext();

    return (
        <label htmlFor="estate.houseNumber">
            Hausnummer&nbsp;
            <input {...register("estate.houseNumber")} type="text" />
        </label>
    );
};
