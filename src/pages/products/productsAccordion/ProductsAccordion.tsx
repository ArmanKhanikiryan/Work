import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {useTranslation} from "react-i18next";
import './ProductsAccordion.css'
import {FC, useState} from "react";

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


type TProductsAccordionProps = {
    navigationParameter: string | null
}

type TClicked = {
    elem: boolean,
}



const ProductsAccordion:FC<TProductsAccordionProps> = ({navigationParameter}) => {

    let initialState = ''

    if (!navigationParameter || navigationParameter === 'aluminium') initialState = 'panel1'
    else if (navigationParameter === 'metal-plastic') initialState = 'panel2'
    else if (navigationParameter === "glass") initialState = 'panel3'
    else if (navigationParameter === "facade") initialState = 'panel3'
    else if (navigationParameter === "blinds") initialState = 'panel3'
    else if (navigationParameter === 'automatic') initialState = 'panel3'



    const [clicked, setClicked] = useState<TClicked[]>([
        {elem: false},
        {elem: false},
        {elem: false},
        {elem: false},
        {elem: false},
        {elem: false},
        {elem: false},
        {elem: false},
        {elem: false},
        {elem: false},
        {elem: false},
        {elem: false},
        {elem: false},
    ])



    const [expanded, setExpanded] = React.useState<string | false>(initialState);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    const {t} = useTranslation()

    const toggleClicked = (needIndex: number) => {
        setClicked(prevState => prevState.map((value, index) => {
            value.elem = index === needIndex;
            return value
        }))
    }

    const resetClicked = () => {
        setClicked(prevState => prevState.map(value => ({...value, elem: false})))
    }

    return (
        <div className='product_accordion_wrapper'>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>

                <AccordionSummary aria-controls="panel1d-content" onClick={resetClicked} id="panel1d-header">
                    <Typography>{t("Aluminium Profiles")}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{paddingLeft: '50px'}} onClick={() => toggleClicked(0)} className={clicked[0].elem ? "product_accordion_inner_element_clicked" : "product_accordion_inner_element"}>
                    <Typography>{t("Doors")}</Typography>
                </AccordionDetails>
                <AccordionDetails sx={{paddingLeft: '50px'}} onClick={() => toggleClicked(1)} className={clicked[1].elem ? "product_accordion_inner_element_clicked" : "product_accordion_inner_element"}>
                    <Typography>{t("Windows")}</Typography>
                </AccordionDetails>
                <Accordion sx={{border: 'none'}}>
                <AccordionSummary sx={{paddingLeft: '50px', background: 'none', borderTop: '1px solid lightgrey'}} onClick={resetClicked} aria-controls="panel1-1d-content"  id="panel1-1d-header">
                    <Typography> {t('Termo Profile')}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{paddingLeft: '85px'}} onClick={() => toggleClicked(2)} className={clicked[2].elem ? "product_accordion_inner_element_clicked" : "product_accordion_inner_element"}>
                    <Typography>{t("Termo Slides")}</Typography>
                </AccordionDetails>
                    <AccordionDetails sx={{paddingLeft: '85px'}}  onClick={() => toggleClicked(3)} className={clicked[3].elem ? "product_accordion_inner_element_clicked" : "product_accordion_inner_element"}>
                        <Typography>{t("Termo Aluminium")}</Typography>
                    </AccordionDetails>
                    <AccordionDetails sx={{paddingLeft: '85px'}} onClick={() => toggleClicked(4)} className={clicked[4].elem ? "product_accordion_inner_element_clicked" : "product_accordion_inner_element"}>
                        <Typography> {t("Cold Aluminium Slides")}</Typography>
                    </AccordionDetails>
                </Accordion>
            </Accordion>






            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary onClick={resetClicked} aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>{t("Metal-Plastic UPVC")}</Typography>
                </AccordionSummary>

                <AccordionDetails sx={{paddingLeft: '50px'}} onClick={() => toggleClicked(5)} className={clicked[5].elem ? "product_accordion_inner_element_clicked" : "product_accordion_inner_element"}>
                    <Typography>
                        {t("Doors")}
                    </Typography>
                </AccordionDetails>

                <AccordionDetails sx={{paddingLeft: '50px'}} onClick={() => toggleClicked(6)} className={clicked[6].elem ? "product_accordion_inner_element_clicked" : "product_accordion_inner_element"}>
                    <Typography>
                        {t("Windows")}
                    </Typography>
                </AccordionDetails>


            </Accordion>


            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary onClick={resetClicked} aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>{t('Glass Constructions')}</Typography>
                </AccordionSummary>

                <AccordionDetails sx={{paddingLeft: '50px'}} onClick={() => toggleClicked(7)} className={clicked[7].elem ? "product_accordion_inner_element_clicked" : "product_accordion_inner_element"}>
                    <Typography>
                        {t("Shower Enclosures")}
                    </Typography>
                </AccordionDetails>

                <AccordionDetails sx={{paddingLeft: '50px'}} onClick={() => toggleClicked(8)} className={clicked[8].elem ? "product_accordion_inner_element_clicked" : "product_accordion_inner_element"}>
                    <Typography>
                        {t("Inter-room Glass Partitions")}
                    </Typography>
                </AccordionDetails>

                <AccordionDetails sx={{paddingLeft: '50px'}} onClick={() => toggleClicked(9)} className={clicked[9].elem ? "product_accordion_inner_element_clicked" : "product_accordion_inner_element"}>
                    <Typography>
                        {t("Glass Handrail")}
                    </Typography>
                </AccordionDetails>

            </Accordion>

            <AccordionDetails sx={{paddingLeft: '20px'}} onClick={() => toggleClicked(10)} className={clicked[10].elem ? "product_accordion_inner_element_clicked" : "product_accordion_single"}>
                <Typography>
                    {t("Automatic Sliding Door")}
                </Typography>
            </AccordionDetails>

            <AccordionDetails sx={{paddingLeft: '20px'}} onClick={() => toggleClicked(11)} className={clicked[11].elem ? "product_accordion_inner_element_clicked" : "product_accordion_single"}>
                <Typography>
                    {t("Remote Controlled Blinds")}
                </Typography>
            </AccordionDetails>

            <AccordionDetails sx={{paddingLeft: '20px'}} onClick={() => toggleClicked(12)} className={clicked[12].elem ? "product_accordion_inner_element_clicked" : "product_accordion_single"}>
                <Typography>
                    {t("Facade Constructions")}
                </Typography>
            </AccordionDetails>

        </div>
    );
}

export default ProductsAccordion;