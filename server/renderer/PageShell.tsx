import React, { FC } from "react";

import type { PageContext } from "./types";

import { PageContextProvider } from "../../src/hooks/usePageContext";
import { App } from "../../src/pages/App";

interface PageShellProps {
  children: React.ReactNode;
  pageContext: PageContext;
}

const PageShell: FC<PageShellProps> = ({ children, pageContext }) => {
  return (
    <PageContextProvider pageContext={pageContext}>
      <App children={children} />
    </PageContextProvider>
  );
};

export { PageShell };
