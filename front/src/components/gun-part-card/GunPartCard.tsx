import {Product} from "../../schema/NFTCatalogSchema";
import {useStyles} from "./GunPartCardStyles";
import {GCCard, GCCardSection, GCImage, GCText} from "../../gc-components";
import {IconHexagon} from "@tabler/icons";

interface GunPartCardProps {
    product: Product;
}

const GunPartCard = ({product}: GunPartCardProps) => {
    const {classes} = useStyles();

    return (
        <GCCard radius="md" className={classes.card}>
            <GCCardSection className={classes.imageSection}>
                <GCImage height={304} src={product?.productImageUrl} alt="gun" fit="contain"/>
            </GCCardSection>
            <GCCardSection className={classes.infoSection}>
                <GCText h3 bold className={classes.name} lineClamp={2}>
                    {product?.name}
                </GCText>
                <GCText h3 bold className={classes.brand} lineClamp={2}>
                    <IconHexagon className={classes.brandIcon}/>
                    {product?.brand}
                </GCText>
            </GCCardSection>
        </GCCard>
    );
};

export default GunPartCard;
