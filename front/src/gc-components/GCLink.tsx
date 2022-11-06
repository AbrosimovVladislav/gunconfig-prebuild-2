import { ReactNode } from "react";
import Link from "next/link";

interface GCLinkProps {
    key?: string | number | null | undefined;
    href: string;
    children: ReactNode;
}

export const GCLink = ({ href, children }: GCLinkProps) => {
    return <Link href={href}>{children}</Link>;
};
