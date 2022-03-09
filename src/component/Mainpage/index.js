import React from "react";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import AlbumIcon from '@material-ui/icons/Album';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Input from '@material-ui/core/Input';
import NormalImg from '../../resource/picture1.jpg';
import ErrorImg from '../../resource/picture_fail.jpg';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const ContainerGrid = styled(Grid)`
    height:100%;
    width:100%;
`

const MonitoringStepper = styled(Grid)`
    height: 25rem;
    &>div{
        height:22rem;
        overflow: hidden;
    }
    .MuiMobileStepper-root{
        height: 3rem;
        font-size: 2rem;
        width: 45rem;
        margin: auto;
    }
    img{
        width: 45rem;
        height:21rem;
        margin:auto;
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        color: rgba(0, 0, 0, 0.87);
        border-radius: 10px;
        box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
    }
`

const ListContainer = styled(Grid)`
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: rgba(0, 0, 0, 0.87);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
    width: 45rem;
    height:15rem;
    flex-basis: auto !important;
    background-color:white;
    & >h2 {
        font-size:1rem;
        margin: 0px;
        // padding-top: 0.5rem;
    }
    & >div{
        width: 43rem;
        height:12.5rem;
        background-color:#dadada;
        margin:auto;
        border-radius: 10px;
        padding:1rem;
    }
`
const ListDiv = styled.div`
    display: flex;
    cursor:pointer;
    & > div{
        height:28px;
        margin-bottom:5px;
        font-size:20px;
    }
    & > div:nth-child(2){
        background-color: ${(props) => props.background || "white"}4f;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    & > div:nth-child(3){
        background-color: ${(props) => props.background || "white"}4f;
        font-size:5px;
        color : ${(props) => props.background || "white"};
    }
`
const CustomGrid = styled(Grid)`
    height:8rem;
    color: rgba(0, 0, 0, 0.87);
    background-color:white;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
    flex-basis: auto !important;
    width:53.5rem;
    display: flex;
    h2 {
        font-size:1rem;
        margin: 0px;
        text-align:left;
    }
    & > div:nth-child(1){
        width:100%;
        height:100%;
        border-right: solid 1px black;
        h2{
            padding: 0.5rem;
        }
        &>div{
            width:80%;
            display: inline-block;
            & >div:nth-child(1){
                width:100%;
            }
    
            &> div:nth-child(2){
                width:40%;
            }
            &> div:nth-child(3){
                width:40%;
            }
        }
        font-size:2.5rem;
    }
    #date{
        font-size:15px !important;
    }
    & > div:nth-child(2){
        width:100%;
        height:100%;
        &>form{
            flex-wrap: wrap;
            box-sizing: border-box;
            display:flex;
            width:100%;
            height:100%;
            div:nth-child(1), div:nth-child(5), div:nth-child(7){
                height:2rem;
                padding:0.5rem;
            }
            div:nth-child(2), div:nth-child(4), div:nth-child(6), div:nth-child(8){
                height:2rem;
                display:flex;
            }
            div:nth-child(3){
                font-size:2rem;
                height:2rem;
                text-align:center;
            }
            
        }
        
    }
`
const SearchGrid = styled(Grid)`
    height:8rem;
    justify-content:space-evenly;
    align-tems:flex-end;
    padding-right:0 !important;
    button {
        width:7rem;
        height:3rem;
        font-size:1rem;
    }
`

const errorSteps = [
    {
        color: '#ff7300',
        imgPath: ErrorImg,
    },
    {
        color: '#ff7300',
        imgPath: NormalImg,
    },
    {
        color: '#ff3300',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    }
];


const normalSteps = [
    {
        color: '#3dc000',
        imgPath: NormalImg,
    },
    {
        color: '#3dc000',
        imgPath: ErrorImg,
    },
    {
        color: '#ff7300',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    },
    {
        color: '#3dc000',
        imgPath:
            'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        color: '#3dc000',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    }
}));


export default (props) => {
    const [type, setType] = React.useState('Default');

    const typeHandleChange = (event) => {
        setType(event.target.value);
    };

    // useEffect(() => {
    //     var carousel = document.getElementById("carousel");
    //     carousel.style.transform = "rotateY(" + deg + "deg)";
    //   }, [deg]);

    const imgList = (color, name, index, propsStep, setStep) => {
        return (
            <ListDiv background={color} key={"List" + name} onClick={() => handleClickList(index, setStep)}>
                <Grid item xs={1}>
                    {propsStep === index ? <ArrowRightAltIcon /> : null}
                </Grid>
                <Grid item xs={10}>
                    {name}
                </Grid>
                <Grid item xs={1}>
                    <AlbumIcon />
                </Grid>
            </ListDiv>
        )
    };
    const classes = useStyles();
    const theme = useTheme();
    const [normalStep, setNormalStep] = React.useState(0);
    const [errorStep, setErrorStep] = React.useState(0);

    const maxNormalSteps = normalSteps.length;
    const maxErrorSteps = errorSteps.length;
    const [fromRatio, setFromRatio] = React.useState(83);
    const [toRatio, setToRatio] = React.useState(87);
    const [threshold, setThreshold] = React.useState(85);
    const [cutOff, setCutOff] = React.useState(5);

    const handleClickList = (index, setStep) => {
        setStep(index);
    }

    const handleNormalNext = () => {
        setNormalStep((prevNormalStep) => prevNormalStep + 1);
    };

    const handleNormalBack = () => {
        setNormalStep((prevNormalStep) => prevNormalStep - 1);
    };

    const handleErrorNext = () => {
        setErrorStep((prevErrorStep) => prevErrorStep + 1);
    };

    const handleErrorBack = () => {
        setErrorStep((prevErrorStep) => prevErrorStep - 1);
    };


    const handleChange = (event) => {
        // input value 가져오기
        const { name, value } = event.target;
        switch (name) {
            case "fromRatio":
                if (value >= 0 && value < toRatio) {
                    setFromRatio(value);
                } else {
                    document.querySelector('input[name="fromRatio"]').value = fromRatio;
                }
                break;
            case "toRatio":
                if (value <= 100 && value > fromRatio) {
                    setToRatio(value);
                } else {
                    document.querySelector('input[name="toRatio"]').value = toRatio;
                }
                break;
            case "threshold":
                if (value >= 0 && value <= 100) {
                    setThreshold(value);
                } else {
                    document.querySelector('input[name="threshold"]').value = threshold;
                }
                break;
            case "cutOff":
                if (value > 0) {
                    setCutOff(value);
                } else {
                    document.querySelector('input[name="cutOff"]').value = cutOff;
                }
                break;
            default:
                console.log("error!");
        }
    };

    return (
        <>
            <ContainerGrid container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center" >
                <MonitoringStepper item xs={6}>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={normalStep}
                        // onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {normalSteps.map((step, index) => (
                            <div key={"normalStepDiv" + step.imgPath}>
                                {Math.abs(normalStep - index) <= 2 ? (
                                    <img className={classes.img} src={step.imgPath} alt={step.label} key={"normalStepImg" + step.imgPath} />
                                ) : null}
                            </div>
                        ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                        steps={maxNormalSteps}
                        position="static"
                        variant="text"
                        activeStep={normalStep}
                        nextButton={
                            <Button size="small" onClick={handleNormalNext} disabled={normalStep === maxNormalSteps - 1}>
                                Next
                                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleNormalBack} disabled={normalStep === 0}>
                                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                Back
                            </Button>
                        }
                    />
                </MonitoringStepper>

                <MonitoringStepper item xs={6}>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={errorStep}
                        // onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {errorSteps.map((step, index) => (
                            <div key={"errorStepDiv" + step.imgPath}>
                                {Math.abs(errorStep - index) <= 2 ? (
                                    <img className={classes.img} src={step.imgPath} alt={step.label} key={"errorStepImg" + index} />
                                ) : null}
                            </div>
                        ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                        steps={maxErrorSteps}
                        position="static"
                        variant="text"
                        activeStep={errorStep}
                        nextButton={
                            <Button size="small" onClick={handleErrorNext} disabled={errorStep === maxErrorSteps - 1}>
                                Next
                                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleErrorBack} disabled={errorStep === 0}>
                                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                Back
                            </Button>
                        }
                    />
                </MonitoringStepper>






                <ListContainer item xs={6} style={{ marginRight: "2.4rem" }}>
                    <h2>양품(Normal)</h2>
                    <div>{normalSteps.map((Element, index) => (imgList(Element.color, Element.imgPath, index, normalStep, setNormalStep)))}</div>
                </ListContainer>
                <ListContainer item xs={6} style={{ marginLeft: "2.4rem" }}>
                    <h2>불량(Error)</h2>
                    <div>{errorSteps.map((Element, index) => (imgList(Element.color, Element.imgPath, index, errorStep, setErrorStep)))}</div>
                </ListContainer>

                <Grid item xs={4}></Grid>
                <CustomGrid item xs={8}>
                    <Grid item xs={6}>
                        <h2>Monitoring Type</h2>
                        <FormControl>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={type}
                                label="Type"
                                onChange={typeHandleChange}
                            >
                                <MenuItem value={"Default"}>Default</MenuItem>
                                <MenuItem value={"Period"}>Period</MenuItem>
                            </Select>
                            {type === "Default" ? null :
                                <>
                                    <TextField
                                        id="date"
                                        label="Start Date"
                                        type="date"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    &nbsp; ~ &nbsp;
                                    <TextField
                                        id="date"
                                        label="End Date"
                                        type="date"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </>}

                        </FormControl>
                    </Grid>



                    <Grid item xs={6}>
                        <form name="setting">
                            <Grid item xs={4}><h2>Warning ratio</h2></Grid>
                            <Grid item xs={3}>
                                <Input
                                    type="number"
                                    name="fromRatio"
                                    // InputLabelProps={{
                                    //     shrink: true,
                                    // }}
                                    defaultValue={fromRatio}
                                    onChange={handleChange}
                                    endAdornment={<InputAdornment position="end">%</InputAdornment>}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                ~
                            </Grid>
                            <Grid item xs={3}>
                                <Input
                                    type="number"
                                    name="toRatio"
                                    // InputLabelProps={{
                                    //     shrink: true,
                                    // }}
                                    defaultValue={toRatio}
                                    onChange={handleChange}
                                    endAdornment={<InputAdornment position="end">%</InputAdornment>}
                                />
                            </Grid>
                            <Grid item xs={6}><h2>Margin threshold</h2></Grid>
                            <Grid item xs={6}>
                                <Input
                                    type="number"
                                    name="threshold"
                                    // InputLabelProps={{
                                    //     shrink: true,
                                    // }}
                                    defaultValue={threshold}
                                    onChange={handleChange}
                                    endAdornment={<InputAdornment position="end">%</InputAdornment>}
                                />
                            </Grid>
                            <Grid item xs={6}><h2>Cut off</h2></Grid>
                            <Grid item xs={6}>
                                <Input
                                    type="number"
                                    name="cutOff"
                                    // InputLabelProps={{
                                    //     shrink: true,
                                    // }}
                                    defaultValue={cutOff}
                                    onChange={handleChange}
                                    endAdornment={<InputAdornment position="end">px</InputAdornment>}
                                />
                            </Grid>
                        </form>
                    </Grid>
                </CustomGrid>

                <SearchGrid item xs={1}>
                    <Button
                        variant="contained"
                        color="default"
                    >
                        Search
                    </Button>
                </SearchGrid>
            </ContainerGrid>
        </>
    );
};
