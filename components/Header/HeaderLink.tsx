import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { FunctionComponent } from "react";

interface Props {
  href: string;
  className?: string;
}

const HeaderLink: FunctionComponent<Props> = (props) => {
  const router = useRouter();
  const active = props.href === router.route;
  return (
    <>
      <Link passHref={true} href={props.href}>
        <a className={`bold-text ${active && "active"} ${props.className}`}>
          {props.children}
        </a>
      </Link>
      <style jsx>{`
        a {
          text-shadow: 0px 0px 10px rgb(0 255 255 / 50%);
          transition: all 150ms ease-out;
          display: inline-block;
          letter-spacing: 0.12em;
          margin-right: 22px;
          text-decoration: none;
          align-self: flex-end;
          font-size: 22px;
          opacity: 1;
        }
        .active {
          color: #00bfbf;
          text-shadow: 0px 0px 5px #00bfbf;
          letter-spacing: 0.13em;
        }
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
