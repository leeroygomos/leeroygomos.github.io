// icon:bx-error-circle | Boxicons https://boxicons.com/ | Atisa
import * as React from "react";

function IconError(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="2em"
      width="2em"
      {...props}
    >
      <path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z" />
      <path d="M11 7h2v7h-2zm0 8h2v2h-2z" />
    </svg>
  );
}

export default IconError;