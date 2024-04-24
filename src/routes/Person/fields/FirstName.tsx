import React from "react";
import { useFormContext } from "react-hook-form";

export const FirstName = () => {
  const { register } = useFormContext();

  return (
    <label htmlFor="person.firstName">
      Vorname&nbsp;
      <input {...register("person.firstName")} type="text" />
    </label>
  );
};
