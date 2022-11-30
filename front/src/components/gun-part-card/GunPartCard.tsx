import {Product} from "../../schema/NFTCatalogSchema";
import {useStyles} from "./GunPartCardStyles";
import {GCCard, GCCardSection, GCImage, GCText} from "../../gc-components";
import {Icon3dCubeSphere} from "@tabler/icons";

interface GunPartCardProps {
    product: Product;
}

const GunPartCard = ({product}: GunPartCardProps) => {
    const {classes} = useStyles();

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
                <GCText className={classes.name} lineClamp={2} bold>
                    {product.name}
                </GCText>
                <GCText className={classes.brand} lineClamp={2} bold>
                    <Icon3dCubeSphere className={classes.brandIcon}/>
                    {product.brand}
                </GCText>
            </GCCardSection>
        </GCCard>
    );
};

export default GunPartCard;
