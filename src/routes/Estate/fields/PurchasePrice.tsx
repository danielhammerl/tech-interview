import React from "react";
import { useFormContext } from "react-hook-form";

export const PurchasePrice = () => {
    const { register } = useFormContext();

    return (
        <label htmlFor="estate.purchasePrice">
            Kaufpreis&nbsp;
            <input {...register("estate.purchasePrice")} type="text" />
        </label>
    );
};
