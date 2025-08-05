import { createContext, useContext } from 'react';
import { Link } from 'react-router-dom';

export const BreadcrumbContext = createContext();

export function useBreadcrumbs() {
  return useContext(BreadcrumbContext);
}

export function BreadcrumbLink({ to, crumbLabel, children, ...props }) {
  const { addBreadcrumb } = useBreadcrumbs();

  return (
    <Link
      to={to}
      onClick={() => addBreadcrumb(to)}
      {...props}
    >
      {children}
    </Link>
  );
}
