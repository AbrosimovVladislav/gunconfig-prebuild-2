import { Accordion, AccordionProps, MantineNumberSize } from "@mantine/core";
import { ReactNode, useState } from "react";
import { IconPlus } from "@tabler/icons";

interface GCAccordionProps extends AccordionProps {
    size?: MantineNumberSize;
    className?: string;
    children: ReactNode;
}

export const GCAccordion = ({className, children, size, ...props}: GCAccordionProps) => {
    const [value, setValue] = useState<string[]>([]);
    return <Accordion multiple value={value} className={className} onChange={setValue} {...props}
                      chevxron={<>
                          <IconPlus size={16} />

                      </>}
                      styles={{
                          chevron: {
                              '&[data-rotate]': {
                                  transform: 'rotate(45deg)',
                              },
                          },
                      }}>
        {children}
    </Accordion>;
};
