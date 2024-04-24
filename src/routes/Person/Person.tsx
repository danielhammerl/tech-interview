import React from "react";
import { FirstName } from "./fields/FirstName";
import { LastName } from "./fields/LastName";
import { FormPage } from "../../components/FormPage";

export function Person() {
  return (
    <FormPage title="Daten zur Immobilie">
      <FirstName />
      <LastName />
    </FormPage>
  );
}
