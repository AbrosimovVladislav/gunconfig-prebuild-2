import { Header, Autocomplete, Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons";
import Link from "next/link";
import { useStyles } from "./HeaderSectionStyles";

interface HeaderSectionProps {
    links: { link: string; label: string }[];
}

const HeaderSection = ({ links }: HeaderSectionProps) => {
    const [opened, { toggle }] = useDisclosure(false);
    const { classes } = useStyles();

    const items = links.map((link) => (
        <Link key={link.label} href={link.link}>
            {link.label}
        </Link>
    ));

    return (
        <Header height={56} className={classes.header} mb={120}>
            <div className={classes.inner}>
                <Group>
                    <Burger opened={opened} onClick={toggle} size="sm" />
                    <Link href={"/"}>Gun config</Link>
                </Group>

                <Group>
                    <Autocomplete
                        className={classes.search}
                        placeholder="Search"
                        icon={<IconSearch size={16} stroke={1.5} />}
                        data={["FirstSearch", "SecondSearch", "ThirdSearch"]}
                    />
                    <Group ml={50} spacing={5} className={classes.links}>
                        {items}
                    </Group>
                </Group>
            </div>
        </Header>
    );
};

export default HeaderSection;
