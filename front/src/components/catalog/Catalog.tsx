import { ReactNode } from "react";
import { useStyles } from "./CatalogStyles";

interface CatalogProps {
  children: ReactNode;
  layout?: string;
}

const Catalog = ({ children, layout }: CatalogProps) => {
  const { classes } = useStyles();

  return <div className={classes[layout]}>{children}</div>;
};

export default Catalog;

Catalog.defaultProps = {
  layout: "catalogOfThree",
};