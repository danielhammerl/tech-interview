import React from "react";

type FormPageProps = React.PropsWithChildren & {
  title: string;
};

export function FormPage({ title, children }: FormPageProps) {
  return (
    <div className="form">
      <h1>{title}</h1>
      {children}
      <button type="submit">Speichern!</button>
    </div>
  );
}
