import { ReactNode } from "react";
import Link, {LinkProps} from "next/link";

interface GCLinkProps extends LinkProps{
    key?: string | number | null | undefined;
    href: string;
    children: ReactNode;
}

export const GCLink = ({ href, children, ...props }: GCLinkProps) => {
    return <Link href={href} {...props}>{children}</Link>;
};
