import { useStyles } from "./GunPartCardStyles";
import { GCCard, GCCardSection, GCImage, GCText } from "../../../gc-components";
import { IconHexagon } from "@tabler/icons";
import { GCIconButton } from "../../../gc-components/icon-button/GCIconButton";
import { useHover } from "@mantine/hooks";
import React, { ReactNode } from "react";
import { Product } from "../../../schema/common/Product";

interface GunPartCardProps {
    product: Product;
    hoverable?: boolean;
    active?: boolean;
    disabled?: boolean;
    sm?: boolean;
}

const GunPartCard = ({ product, hoverable, active, disabled, sm }: GunPartCardProps) => {
    const { classes } = useStyles();
    const { hovered, ref } = useHover();

    const iconButton = (active: boolean, hovered: boolean): ReactNode => {
        return active && hovered ? <GCIconButton top left primary icon={"close"} /> :
            active ? <GCIconButton top left primary icon={"confirm"} /> :
                <></>;
    };

    return (
        <div ref={ref}>
            <GCCard radius="md"
                    className={`${classes.card} 
                    ${hoverable && !disabled ? classes.hoverable : ""} 
                    ${disabled ? classes.disabled : ""}`}>
                {iconButton(active, hovered)}
                <GCCardSection className={classes.imageSection}>
                    <GCImage height={sm ? 180 : 304} src={product?.productImageUrl} alt=""
                             fit="contain" />
                </GCCardSection>
                <GCCardSection className={classes.infoSection}>
                    <GCText h3={!sm} bold className={classes.name} lineClamp={1}>
                        {product?.productId} {product?.name}
                    </GCText>
                    <GCText h3={!sm} bold className={classes.brand} lineClamp={1}>
                        <IconHexagon className={classes.brandIcon} />
                        {product?.brand}
                    </GCText>
                </GCCardSection>
            </GCCard>
        </div>
    );
};

export default GunPartCard;
