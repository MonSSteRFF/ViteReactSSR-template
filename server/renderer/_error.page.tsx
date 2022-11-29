import React from "react";
import { ErrorPage } from "../../src/components/ErrorPage";

function Page({ is404 }: { is404: boolean }) {
  return <ErrorPage is404={is404} />;
}

export { Page };
