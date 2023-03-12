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
import {FC} from "react";

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



const ProductsAccordion:FC<TProductsAccordionProps> = ({navigationParameter}) => {

    let initialState = ''

    if (!navigationParameter || navigationParameter === 'aluminium') initialState = 'panel1'
    else if (navigationParameter === 'metal-plastic') initialState = 'panel2'
    else if (navigationParameter === "glass") initialState = 'panel3'


    const [expanded, setExpanded] = React.useState<string | false>(initialState);

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
                <AccordionDetails sx={{paddingLeft: '50px'}} className='product_accordion_inner_element'>
                    <Typography>{t("Doors")}</Typography>
                </AccordionDetails>
                <AccordionDetails sx={{paddingLeft: '50px'}} className='product_accordion_inner_element'>
                    <Typography>{t("Windows")}</Typography>
                </AccordionDetails>
                <Accordion>
                <AccordionSummary sx={{paddingLeft: '50px', background: 'none'}} aria-controls="panel1-1d-content"  id="panel1-1d-header">
                    <Typography> {t('Termo Profile')}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{paddingLeft: '85px'}} className='product_accordion_inner_element'>
                    <Typography>{t("Termo Slides")}</Typography>
                </AccordionDetails>
                    <AccordionDetails sx={{paddingLeft: '85px'}} className='product_accordion_inner_element'>
                        <Typography>{t("Termo Aluminium")}</Typography>
                    </AccordionDetails>
                    <AccordionDetails sx={{paddingLeft: '85px'}} className='product_accordion_inner_element'>
                        <Typography> {t("Cold Aluminium Slides")}</Typography>
                    </AccordionDetails>
                </Accordion>
            </Accordion>







            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>{t("Metal-Plastic UPVC")}</Typography>
                </AccordionSummary>

                <AccordionDetails sx={{paddingLeft: '50px'}} className='product_accordion_inner_element'>
                    <Typography>
                        {t("Doors")}
                    </Typography>
                </AccordionDetails>

                <AccordionDetails sx={{paddingLeft: '50px'}} className='product_accordion_inner_element'>
                    <Typography>
                        {t("Windows")}
                    </Typography>
                </AccordionDetails>


            </Accordion>


            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>{t('Glass Constructions')}</Typography>
                </AccordionSummary>

                <AccordionDetails sx={{paddingLeft: '50px'}} className='product_accordion_inner_element'>
                    <Typography>
                        {t("Shower Enclosures")}
                    </Typography>
                </AccordionDetails>

                <AccordionDetails sx={{paddingLeft: '50px'}} className='product_accordion_inner_element'>
                    <Typography>
                        {t("Inter-room Glass Partitions")}
                    </Typography>
                </AccordionDetails>

                <AccordionDetails sx={{paddingLeft: '50px'}} className='product_accordion_inner_element'>
                    <Typography>
                        {t("Glass Handrail")}
                    </Typography>
                </AccordionDetails>

            </Accordion>

        </div>
    );
}

export default ProductsAccordion;