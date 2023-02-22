import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons";
import { useStyles } from "./HeaderSectionStyles";
import { GCAutocomplete, GCBurger, GCGroup, GCHeader, GCImage, GCLink } from "../../gc-components";

interface HeaderSectionProps {
    links: { link: string; label: string }[];
}

const HeaderSection = ({ links }: HeaderSectionProps) => {
    const [opened, { toggle }] = useDisclosure(false);
    const { classes } = useStyles();

    const items = links.map((link) => (
        <GCLink key={link.label} href={link.link}>
            {link.label}
        </GCLink>
    ));

    return (
        <GCHeader height={70} className={classes.header} mb={120}>
            <div className={classes.inner}>
                <GCGroup>
                    <GCBurger opened={opened} onClick={toggle} size="sm" />
                    <GCLink href={"/"}><GCImage className={classes.logo} src="https://gunmarket.fra1.digitaloceanspaces.com/GunCraft.svg" alt=""/></GCLink>
                </GCGroup>

                <GCGroup>
                    <GCAutocomplete
                        className={classes.search}
                        placeholder="Search"
                        icon={<IconSearch size={16} stroke={1.5} />}
                        data={["FirstSearch", "SecondSearch", "ThirdSearch"]}
                    />
                    <GCGroup ml={50} spacing={5} className={classes.links}>
                        {items}
                    </GCGroup>
                </GCGroup>
            </div>
        </GCHeader>
    );
};

export default HeaderSection;
