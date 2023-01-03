import { useStyles } from "./GCSquareContainerStyles";

export const GCSquareContainer = (({children}) => {
    const {classes} = useStyles();
    return <div className={classes.square}>
        <div className={classes.content}>
            {children}
        </div>
    </div>;
})