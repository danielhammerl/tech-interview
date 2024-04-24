import React from "react";
import { HouseNumber } from "./fields/HouseNumber";
import { PurchasePrice } from "./fields/PurchasePrice";
import {FormPage} from "../../components/FormPage";

export function Estate() {
  return (
    <FormPage title="Daten zur Immobilie">
      <HouseNumber />
      <PurchasePrice />
    </FormPage>
  );
}
