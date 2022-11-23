import React, { ReactNode } from "react";
import { useStyles } from "./CatalogStyles";

interface CatalogProps {
  children: ReactNode;
  layout: string;
  className?: string;
}

const Catalog = ({ children, layout, className }: CatalogProps) => {
  const { classes } = useStyles();

  return (
    <div className={className}>
      <div className={classes.catalogOfFour}>{children}</div>
    </div>
  );
};

export default Catalog;
