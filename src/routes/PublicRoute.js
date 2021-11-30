//import { Navigate } from 'react-router';

export function PublicRoute({ component: Component }) {
  return (
    <>
      {/* <h1>PUBLIC</h1> */}
      <Component />
    </>
  );
}
