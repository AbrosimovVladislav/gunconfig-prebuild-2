import {NFTCardDto} from "../../schema/NFTCatalogSchema";
import {Badge, Card, Center, createStyles, Group, Image, Text} from '@mantine/core';

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        maxWidth: "343px",
        maxHeight: "550px"
    },

    imageSection: {
        padding: theme.spacing.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: "248px",
        borderBottom: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
    },

    label: {
        marginBottom: theme.spacing.xs,
        lineHeight: 1,
        fontWeight: 700,
        fontSize: theme.fontSizes.xs,
        letterSpacing: -0.25,
        textTransform: 'uppercase',
    },

    section: {
        padding: theme.spacing.md
    },

    icon: {
        marginRight: 5,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
    },
}));


interface Props {
    item: NFTCardDto;
}

const NFTMicroCard = ({item}: Props) => {

    const {classes} = useStyles();
    const features = item.buildDto.elements.map((element) => (
        <Center key={element.elementId}>
            <Text size="xs">{element.productName}</Text>
        </Center>
    ));

    return (
        <Card withBorder radius="md" className={classes.card}>
            <Card.Section className={classes.imageSection}>
                <Image src={item.nftImageUrl} alt="gun"/>
            </Card.Section>

            <Group position="apart" mt="md">
                <div>
                    <Text weight={500}>{item.nftName}</Text>
                </div>
                <Badge variant="outline">{item.productName}</Badge>
            </Group>

            <Card.Section className={classes.section} mt="md">
                <Text size="sm" color="dimmed" className={classes.label}>
                    Build options
                </Text>

                <Group spacing={8} mb={-8}>
                    {features}
                </Group>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Group spacing={30}>
                    <div>
                        <Text size="xl" weight={700} sx={{lineHeight: 1}}>
                            0,0031 ETH
                        </Text>
                        <Text size="sm" color="dimmed" weight={500} sx={{lineHeight: 2}} mt={3}>
                            last price on mint
                        </Text>
                    </div>
                </Group>
            </Card.Section>
        </Card>
    );
};

export default NFTMicroCard;
