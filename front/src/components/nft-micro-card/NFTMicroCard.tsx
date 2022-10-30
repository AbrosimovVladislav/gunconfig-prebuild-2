import { NFTCardDto } from "../../schema/NFTCatalogSchema";
import { Badge, Card, Group, Image, Text } from "@mantine/core";
import { useStyles } from "./NFTMicroCardStyles";

interface NFTMicroCardProps {
    item: NFTCardDto;
}

const NFTMicroCard = ({ item }: NFTMicroCardProps) => {
    const { classes } = useStyles();

    return (
        <Card withBorder radius="md" className={classes.card}>
            <Card.Section className={classes.imageSection}>
                <Image src={item.nftImageUrl} alt="gun" />
            </Card.Section>

            <Group position="apart" mt="md">
                <div>
                    <Text weight={500}>{item.nftName}</Text>
                </div>
                <Badge variant="outline">{item.productName}</Badge>
                <Text size="sm" color="dimmed" weight={500} sx={{ lineHeight: 2 }} mt={3}>
                    Minting price
                </Text>
                <Text variant="gradient">0,0031 ETH</Text>
            </Group>
        </Card>
    );
};

export default NFTMicroCard;
