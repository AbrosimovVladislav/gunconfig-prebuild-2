import { ReactNode } from "react";
import Link from "next/link";

interface GCLinkProps {
    key?: string;
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
