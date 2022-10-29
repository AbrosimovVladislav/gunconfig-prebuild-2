import {NFTCardDto} from "../../schema/NFTCatalogSchema";
import {Badge, Button, Card, Center, createStyles, Group, Image, Text} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    padding: theme.spacing.md,
    borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
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
          <Image src={item.nftImageUrl} alt="Tesla Model S"/>
        </Card.Section>

        <Group position="apart" mt="md">
          <div>
            <Text weight={500}>{item.productName}</Text>
          </div>
          <Badge variant="outline">25% off</Badge>
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
                $168.00
              </Text>
              <Text size="sm" color="dimmed" weight={500} sx={{lineHeight: 1}} mt={3}>
                per day
              </Text>
            </div>

            <Button radius="xl" style={{flex: 1}}>
              Rent now
            </Button>
          </Group>
        </Card.Section>
      </Card>
  );
};

export default NFTMicroCard;
