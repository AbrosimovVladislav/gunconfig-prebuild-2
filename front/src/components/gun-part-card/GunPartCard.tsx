import { Product } from "../../schema/NFTCatalogSchema";
import { useStyles } from "./GunPartCardStyles";
import { GCCard, GCCardSection, GCImage, GCText } from "../../gc-components";
import { Icon3dCubeSphere } from "@tabler/icons";

interface GunPartCardProps {
  product: Product;
}

const GunPartCard = ({ product }: GunPartCardProps) => {
  const { classes } = useStyles();

  return (
    <GCCard shadow="xs" radius="md" className={classes.card}>
      <GCCardSection className={classes.imageSection}>
        <GCImage
          src={product.productImageUrl}
          alt="gun"
          width={240}
          height={240}
          fit="contain"
        />
      </GCCardSection>
      <GCCardSection className={classes.infoSection}>
        <GCText
          className={classes.name}
          size="sm"
          lineClamp={2}
          color="black"
          weight={700}
        >
          {product.name}
        </GCText>
        <GCText
          className={classes.brand}
          size="sm"
          lineClamp={2}
          color="black"
          weight={700}
        >
          <Icon3dCubeSphere className={classes.brandIcon} />
          {product.brand}
        </GCText>
      </GCCardSection>
    </GCCard>
  );
};

export default GunPartCard;
