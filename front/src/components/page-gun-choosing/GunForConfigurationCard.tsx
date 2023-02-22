import { Product } from "../../schema/common/Product";
import { GCCard, GCCardSection, GCGroup, GCImage, GCText } from "../../gc-components";
import { useStyles } from "./GunForConfigurationCardStyles";

interface GunForConfigurationCardProps {
    product: Product;
}

const GunForConfigurationCard = ({product}: GunForConfigurationCardProps) => {
    const {classes} = useStyles();
    return <GCCard withBorder className={classes.card} radius="md">
        <GCCardSection className={classes.imageSection}>
            <GCImage src={product.productImageUrl}
                     alt="gun" className={classes.image} height="100%" width="100%" fit="cover"
                     styles={{
                         'imageWrapper': {width: '100%', height: '100%', objectFit: 'cover'},
                         'figure': {width: '100%', height: '100%', objectFit: 'cover'}
                     }}/>
        </GCCardSection>
        <GCGroup className={classes.content} mt="md">
            <GCText white bold h2 lineClamp={1}>{product.name}</GCText>
        </GCGroup>
    </GCCard>;
};
export default GunForConfigurationCard;
