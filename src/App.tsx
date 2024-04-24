import "./styles.css";
import React from "react";
import { Navigation } from "./navigation/Navigation";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Person } from "./routes/Person/Person";
import { Estate } from "./routes/Estate/Estate";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import { FormInputs } from "./types";
import { formData } from "./data";
import {MandatoryFields} from "./routes/MandatoryFields/MandatoryFields";

export default function App() {
  const rhfMethods = useForm<FormInputs>({
    defaultValues: formData,
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) =>
    console.log("Save!", data);

  return (
    <div className="App">
      <div className="header">
        <h1 className="app-headline">Daten zu Ihrer Baufinanzierung</h1>
      </div>
      <div className="content-wrapper">
        <MemoryRouter initialEntries={["/person"]}>
          <FormProvider {...rhfMethods}>
          <Navigation />
          <main>
            <form onSubmit={rhfMethods.handleSubmit(onSubmit)}>
              <Routes>
                <Route path="/person" element={<Person />} />
                <Route path="/estate" element={<Estate />} />
                <Route path="/pfp" element={<MandatoryFields />} />
              </Routes>
            </form>
          </main>
          </FormProvider>
        </MemoryRouter>
      </div>
    </div>
  );
}
