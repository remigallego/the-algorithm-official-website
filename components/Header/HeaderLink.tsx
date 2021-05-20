import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { FunctionComponent } from "react";

interface Props {
  href: string;
}

const HeaderLink: FunctionComponent<Props> = (props) => {
  const router = useRouter();
  return (
    <>
      <Link passHref={true} href={props.href}>
        <a className="bold-text">{props.children}</a>
      </Link>
      <style jsx>{`
        a {
          text-shadow: 0px 0px 10px rgb(0 255 255 / 50%);
          transition: all 150ms ease-out;
          display: inline-block;
          letter-spacing: 0.12em;
          text-decoration: none;
          margin-bottom: 7px;
          align-self: flex-end;
          color: ${props.href === router.route ? "#ff0" : "white"}};
        }
        a:focus,
        a:hover {
          color: #ff0;
          letter-spacing: 0.13em;
          text-shadow: 0px 0px 5px #ff0;
        }
      `}</style>
    </>
  );
};

export default HeaderLink;
