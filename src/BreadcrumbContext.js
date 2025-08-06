import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { Link, useNavigationType, useLocation } from 'react-router-dom';

export const BreadcrumbContext = createContext();

export function useBreadcrumbs() {
  return useContext(BreadcrumbContext);
}

// contains all the state of the breadcrumbs
export function BreadcrumbProvider({ children }) {

  const location = useLocation();
  const initialSet = location.pathname !== '/' ? ['/', location.pathname] : ['/'];
  const [breadcrumbsList, setBreadcrumbsList] = useState(initialSet);

  useEffect(() => {
    const path = location.pathname; // or location.hash if using HashRouter
    setBreadcrumbsList((prev) => [...prev, path]);
  }, []);

  function addBreadcrumb(newCrumb) {
    setBreadcrumbsList(prevList => [...prevList, newCrumb]);
  }

  function removeBreadcrumbsAfter(index, addToLost=false) {
    setBreadcrumbsList(prev => prev.slice(0, index + 1));
  }

  const value = {
    breadcrumbsList,
    addBreadcrumb,
    removeBreadcrumbsAfter,
    setBreadcrumbsList,
  };

  return (
    <BreadcrumbContext.Provider value={value}>
      {children}
    </BreadcrumbContext.Provider>
  );
}

// wtach window width for truncation
export function useWindowWidth() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return width;
}

// Detect back/forward navigation
export function useBackButton(popHandler) {
  const location = useLocation();
  const navigationType = useNavigationType(); // 'POP' | 'PUSH' | 'REPLACE'

  // run when navigationType or location.key changes
  useEffect(() => {
    if (navigationType === 'POP') {
      popHandler();
    }
  }, [navigationType, location]);
}

// External breadcrumb link to add to list
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

function processCrumbString(crumb) {
  if (!crumb) return '';
  if(crumb == '/cv') return '/CV';

  return crumb.replace(
    /([a-zA-Z])/,
    (match) => match.toUpperCase()
  );
}

// Breadcrumb UI component
export function DropBreadcrumbs() {
  const { breadcrumbsList, removeBreadcrumbsAfter } = useBreadcrumbs();
  const width = 0.4 * useWindowWidth();
  const approxCrumbWidth = 60; // px for breadcrumb length
  const allowedCrumbs = Math.max(2, Math.floor(width / approxCrumbWidth));

  const processedCrumbs =
    breadcrumbsList.length > allowedCrumbs
      ? [breadcrumbsList[0], '...', ...breadcrumbsList.slice(-(allowedCrumbs - 1))]
      : breadcrumbsList;


  useBackButton(
    () => {
      if (breadcrumbsList.length > 1) {
        removeBreadcrumbsAfter(breadcrumbsList.length - 2, true);
      }
    });

  if(processCrumbString.length < 2 && window.location.hash === '#/') return;

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {processedCrumbs.map((crumb, idx) => {
        const key = `${String(crumb)}-${idx}`;

        if (crumb === '...') {
          return (
            <span className="smallLink" key={key}>
              /&hellip;
            </span>
          );
        }

        const to = crumb === '/' ? '/' : (crumb.startsWith('/') ? crumb : `/${crumb}`);
        const label = crumb === '/' ? `${idx === 0 ? '' : '/'}Home` : processCrumbString(crumb);

        return (
          <span key={key}>
            <Link
              className="smallLink"
              to={to}
              onClick={() => removeBreadcrumbsAfter(idx)}
            >
              {label}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
