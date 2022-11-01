import {Key, ReactNode} from "react";
import Link from "next/link";

interface GCLinkProps {
    key?: string | number | null | undefined;
    href: string;
    children: ReactNode;
}

export const GCLink = ({ key, href, children }: GCLinkProps) => {
    return (
        <Link key={key} href={href}>
            {children}
        </Link>
    );
};
