import { Accordion, AccordionProps, MantineNumberSize } from "@mantine/core";
import React, { ReactNode, useState } from "react";
import { IconPlus } from "@tabler/icons";
import { useStyles } from "./GCAccordionStyles";

interface GCAccordionProps extends AccordionProps {
  size?: MantineNumberSize;
  className?: string;
  children: ReactNode;
  showName: string;
  panel: ReactNode;
}

export const GCAccordion = ({
  className,
  children,
  showName,
  panel,
  size,
  ...props
}: GCAccordionProps) => {
  const [value, setValue] = useState<string[]>([]);
  const { classes } = useStyles();
  return (
    <Accordion
      multiple
      value={value}
      className={classes.filter}
      onChange={(arr: []) => setValue([...arr])}
      {...props}
      chevron={<IconPlus size={16} />}
      styles={{
        chevron: {
          "&[data-rotate]": {
            transform: "rotate(45deg)",
          },
        },
      }}
    >
      <Accordion.Item unstyled className={classes.filterItem} value={showName}>
        <Accordion.Control>{showName}</Accordion.Control>
        <Accordion.Panel>{panel}</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

GCAccordion.defaultProps = {
  children: <></>,
};
