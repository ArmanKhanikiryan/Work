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
import {FC, useEffect, useState} from "react";

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

type NavigationParamToPanelMap = {
    [key: string]: string | boolean;
}

const navigationParamToPanelMap:NavigationParamToPanelMap = {
    aluminium: 'panel1',
    'metal-plastic': 'panel2',
    glass: 'panel3',
    'glass-shower': 'panel3',
    blinds: false,
    automatic: false,
    facade: false,
    termo: 'panel5'
};

const ProductsAccordion:FC<TProductsAccordionProps> = ({navigationParameter}) => {
    let initialState = navigationParameter ? navigationParamToPanelMap[navigationParameter] ?? false : false;
    const [expanded, setExpanded] = React.useState<string | boolean>(initialState);
    useEffect(() => {
        if (navigationParameter === 'aluminium') setExpanded('panel1')
        else if (navigationParameter === 'facade') toggleClicked(14)
        else if (navigationParameter === 'blinds') toggleClicked(13)
        else if (navigationParameter === 'automatic') toggleClicked(12)
        else if (navigationParameter === 'glass-shower') toggleClicked(8)
        else if (navigationParameter === 'glass-shower') toggleClicked(8)
        else if (navigationParameter === 'glass') setExpanded('panel3')
        else if (navigationParameter === 'metal-plastic') setExpanded('panel2')
        else if (navigationParameter === 'handrails') setExpanded('panel4')
        else if (navigationParameter === 'termo') setExpanded('panel1')
        else if (navigationParameter === 'door-pvc') {
            setExpanded('panel2')
            toggleClicked(6)
        }
        else if (navigationParameter === 'window-pvc') {
            setExpanded('panel2')
            toggleClicked(7)
        }
        else if (navigationParameter === 'slide') {
            setExpanded('panel1')
            toggleClicked(2)
        }
        else if (navigationParameter === 'doors') {
            setExpanded('panel1')
            toggleClicked(0)
        }
        else if (navigationParameter === 'windows') {
            setExpanded('panel1')
            toggleClicked(1)
        }
    }, [navigationParameter]);

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
        {elem: false},
        {elem: false},
    ])

    const toggleClicked = (needIndex: number) => {
        setClicked(prevState => prevState.map((value, index) => {
            value.elem = index === needIndex;
            return value
        }))
    }

    const resetClicked = () => {
        setClicked(prevState => prevState.map(value => ({...value, elem: false})))
    }


    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    const {t} = useTranslation()


    return (
        <div className='product_accordion_wrapper'>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>{t("Aluminium Profiles")}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{paddingLeft: '50px'}} onClick={() => toggleClicked(0)} className={clicked[0].elem ? "product_accordion_inner_element_clicked" : "product_accordion_inner_element"}>
                    <Typography>{t("Doors")}</Typography>
                </AccordionDetails>
                <AccordionDetails sx={{paddingLeft: '50px'}} onClick={() => toggleClicked(1)} className={clicked[1].elem ? "product_accordion_inner_element_clicked" : "product_accordion_inner_element"}>
                    <Typography>{t("Windows")}</Typography>
                </AccordionDetails>
                <AccordionDetails sx={{paddingLeft: '50px'}} onClick={() => toggleClicked(2)} className={clicked[2].elem ? "product_accordion_inner_element_clicked" : "product_accordion_inner_element"}>
                    <Typography> {t("Slides")}</Typography>
                </AccordionDetails>
                <Accordion sx={{border: 'none'}}>
                <AccordionSummary sx={{paddingLeft: '50px', background: 'none', borderTop: '1px solid lightgrey'}}>
                    <Typography> {t('Termo Aluminium Profile')}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{paddingLeft: '85px'}} onClick={() => toggleClicked(3)} className={clicked[3].elem ? "product_accordion_inner_element_clicked" : "product_accordion_inner_element"}>
                    <Typography>{t("Termo Slides")}</Typography>
                </AccordionDetails>
                    <AccordionDetails sx={{paddingLeft: '85px'}}  onClick={() => toggleClicked(4)} className={clicked[4].elem ? "product_accordion_inner_element_clicked" : "product_accordion_inner_element"}>
                        <Typography>{t("Termo Doors")}</Typography>
                    </AccordionDetails>
                    <AccordionDetails sx={{paddingLeft: '85px'}}  onClick={() => toggleClicked(5)} className={clicked[5].elem ? "product_accordion_inner_element_clicked" : "product_accordion_inner_element"}>
                        <Typography>{t("Termo Windows")}</Typography>
                    </AccordionDetails>
                </Accordion>
            </Accordion>






            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary onClick={resetClicked} aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>{t("Metal-Plastic")}</Typography>
                </AccordionSummary>

                <AccordionDetails sx={{paddingLeft: '50px'}} onClick={() => toggleClicked(6)} className={clicked[6].elem ? "product_accordion_inner_element_clicked" : "product_accordion_inner_element"}>
                    <Typography>
                        {t("Doors")} UPVC
                    </Typography>
                </AccordionDetails>

                <AccordionDetails sx={{paddingLeft: '50px'}} onClick={() => toggleClicked(7)} className={clicked[7].elem ? "product_accordion_inner_element_clicked" : "product_accordion_inner_element"}>
                    <Typography>
                        {t("Windows")} UPVC
                    </Typography>
                </AccordionDetails>


            </Accordion>


            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary onClick={resetClicked} aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>{t('Glass Constructions')}</Typography>
                </AccordionSummary>

                <AccordionDetails sx={{paddingLeft: '50px'}} onClick={() => toggleClicked(8)} className={clicked[8].elem ? "product_accordion_inner_element_clicked" : "product_accordion_inner_element"}>
                    <Typography>
                        {t("Shower Enclosures")}
                    </Typography>
                </AccordionDetails>

                <AccordionDetails sx={{paddingLeft: '50px'}} onClick={() => toggleClicked(9)} className={clicked[9].elem ? "product_accordion_inner_element_clicked" : "product_accordion_inner_element"}>
                    <Typography>
                        {t("Inter-room Glass Partitions")}
                    </Typography>
                </AccordionDetails>

            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary onClick={resetClicked} aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>{t('Handrails')}</Typography>
                </AccordionSummary>

                <AccordionDetails sx={{paddingLeft: '50px'}} onClick={() => toggleClicked(10)} className={clicked[10].elem ? "product_accordion_inner_element_clicked" : "product_accordion_inner_element"}>
                    <Typography>
                        {t("Glass Handrail")}
                    </Typography>
                </AccordionDetails>

                <AccordionDetails sx={{paddingLeft: '50px'}} onClick={() => toggleClicked(11)} className={clicked[11].elem ? "product_accordion_inner_element_clicked" : "product_accordion_inner_element"}>
                    <Typography>
                        {t("Aluminium Handrail")}
                    </Typography>
                </AccordionDetails>

            </Accordion>

            <AccordionDetails sx={{paddingLeft: '20px'}} onClick={() => toggleClicked(12)} className={clicked[12].elem ? "product_accordion_inner_element_clicked" : "product_accordion_single"}>
                <Typography>
                    {t("Automatic Sliding Door")}
                </Typography>
            </AccordionDetails>

            <AccordionDetails sx={{paddingLeft: '20px'}} onClick={() => toggleClicked(13)} className={clicked[13].elem ? "product_accordion_inner_element_clicked" : "product_accordion_single"}>
                <Typography>
                    {t("Remote Controlled Blinds")}
                </Typography>
            </AccordionDetails>

            <AccordionDetails sx={{paddingLeft: '20px', borderBottom: '1px solid lightgrey'}} onClick={() => toggleClicked(14)} className={clicked[14].elem ? "product_accordion_inner_element_clicked" : "product_accordion_single"}>
                <Typography>
                    {t("Facade Constructions")}
                </Typography>
            </AccordionDetails>

        </div>
    );
}

export default ProductsAccordion;

