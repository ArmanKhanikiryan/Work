import React, {ChangeEvent, ReactNode} from "react";
import {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Russia from '../../assets/flags/russia.png'
import UnitedKingdom from '../../assets/flags/UK.png'
import Armenia from '../../assets/flags/armenia.png'

const countries = [
    {
        label: "UnitedKingdom",
        src: UnitedKingdom,
        link: " ",
        value: "UK"
    },
    {
        label: "Russia",
        src: Russia,
        link: " ",
        value: "RUS"
    },
    {
        label: 'Armenia',
        src: Armenia,
        link: " ",
        value: 'ARM'
    }
];

const useStyles = makeStyles(theme => ({
    button: {
        display: "block",
        marginTop: theme.spacing(2)
    },
    formControl: {
        margin: theme.spacing(5),
        minWidth: 60,
        backgroundColor: "transparent"
    },
    select: {
        textAlign: "center",
        textDecoration: "none"
    }
}));
const LanguageSelector = () => {
    const classes = useStyles();
    const [country, setCountry] = useState<unknown>(UnitedKingdom);
    const [open, setOpen] = useState<boolean>(false);

    const handleChange = (event: ChangeEvent<{ name?: string | undefined; value: unknown; }>, child: ReactNode):void => {
        event && setCountry(event.target.value);
    };


    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <form autoComplete="off">
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="open-select" />
                <Select
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={country}
                    name="country"
                    onChange={handleChange}
                    inputProps={{
                        id: "open-select"
                    }}
                >
                    {countries.map((option, key) => (
                        <MenuItem value={option.src} key={key}>
                            <img src={option.src} width='30px' alt={option.label} />{" "}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </form>
    );
}
export default LanguageSelector;