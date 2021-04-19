import React, { FunctionComponent } from "react";
import Link, { LinkProps } from "next/link";

interface Props extends React.PropsWithChildren<LinkProps> {
  style?: React.CSSProperties;
}

const AppLink: FunctionComponent<Props> = (props) => {
  return (
    <>
      <Link {...props} passHref={true}>
        <a>{props.children}</a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
        }
      `}</style>
    </>
  );
};

export default AppLink;
