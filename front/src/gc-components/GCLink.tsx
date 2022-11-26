import { ReactNode } from "react";
import Link, {LinkProps} from "next/link";

interface GCLinkProps extends LinkProps{
    key?: string | number | null | undefined;
    href: string;
    className?: string;
    children: ReactNode;
}

export const GCLink = ({ href, children, className, ...props }: GCLinkProps) => {
    return <Link href={href} {...props} className={className} >{children}</Link>;
};
