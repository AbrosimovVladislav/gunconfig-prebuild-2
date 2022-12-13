import { Product } from "../../schema/NFTCatalogSchema";
import { useStyles } from "./GunPartCardStyles";
import { GCCard, GCCardSection, GCImage, GCText } from "../../gc-components";
import { IconHexagon } from "@tabler/icons";
import { GCIconButton } from "../../gc-components/icon/GCIconButton";
import { useHover } from "@mantine/hooks";
import React from "react";

interface GunPartCardProps {
    product: Product;
    hoverable?: boolean;
    active?: boolean;
    disabled?: boolean;
}

const GunPartCard = ({product, hoverable, active, disabled}: GunPartCardProps) => {
    const {classes} = useStyles();
    const {hovered, ref} = useHover();

    return (
        <div ref={ref}>
            <GCCard radius="md"
                    className={`${classes.card} 
                    ${hoverable && !disabled ? classes.hoverable : ""} 
                    ${disabled ? classes.disabled : ""}`}>
                {active && hovered ? <GCIconButton top left primary icon={"close"}/> :
                    active ? <GCIconButton top left primary icon={"confirm"}/> :
                        <></>}
                <GCCardSection className={classes.imageSection}>
                    <GCImage height={304} src={product?.productImageUrl} alt="" fit="contain"/>
                </GCCardSection>
                <GCCardSection className={classes.infoSection}>
                    <GCText h3 bold className={classes.name} lineClamp={1}>
                        {product?.name}
                    </GCText>
                    <GCText h3 bold className={classes.brand} lineClamp={1}>
                        <IconHexagon className={classes.brandIcon}/>
                        {product?.brand}
                    </GCText>
                </GCCardSection>
            </GCCard>
        </div>
    );
};

export default GunPartCard;
