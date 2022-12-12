import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import RestSelect from './form/RestSelect';
import { RestSimple } from '../util/loadRestIdName';
import { RestSimpleStatus } from './form/RestSelect';
import RestResults from './results/RestResults';
import { randomPick } from '../util/randomPick';

const steps = [
  {
    label: 'Select Restaurants You Like',
  },
  {
    label: 'Select the Model to Make Recommendation',
  },
];

const INITIAL_N_PICK = 12;

interface Props {
  restSimples: Array<RestSimple>;
}

export default function VerticalLinearStepper({ restSimples }: Props) {
  const [activeStep, setActiveStep] = React.useState(0);

  const [picked, setPicked] = React.useState<Array<RestSimpleStatus>>([]);
  // the restaurant that user selected
  const [selected, setSelected] = React.useState<Array<RestSimpleStatus>>([]);
  const [userSearchRes, setUserSearchRes] = React.useState<string | null>(null);

  const [userSelectModel, setUserSelectModel] = React.useState<string>('0');

  React.useEffect(() => {
    const initPick = () => {
      const newPick: Array<RestSimpleStatus> = [];
      for (let i = 0; i < INITIAL_N_PICK; i++) {
        const curPick = randomPick(restSimples, newPick, []);
        if (curPick !== null) {
          newPick.push({ rest: curPick, checked: false });
        }
      }
      return newPick;
    };

    const newPick: Array<RestSimpleStatus> = initPick();
    setPicked(newPick);
  }, [restSimples]);

  const select = React.useMemo(() => {
    const props = {
      restSimples,
      picked,
      setPicked,
      selected,
      setSelected,
      userSearchRes,
      setUserSearchRes,
    };
    // console.log(selected);
    // console.log('called');
    return <RestSelect {...props} />;
  }, [restSimples, picked, selected, userSearchRes]);

  const selectModel = React.useMemo(() => {
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserSelectModel(e.target.value);
      // console.log(userSelectModel);
    };

    return (
      <Box>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={userSelectModel}
          onChange={handleRadioChange}
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="0"
            control={<Radio />}
            label="Base Model (Content Based Method)"
          />
          <FormControlLabel
            value="1"
            control={<Radio />}
            label="Final Model (Collaborative Filtering)"
          />
        </RadioGroup>
      </Box>
    );
  }, [userSelectModel]);

  const results = React.useMemo(() => {
    return (
      <RestResults
        userSelectModel={userSelectModel}
        restSimples={restSimples}
        selected={selected.map((each) => each.rest.id)}
      />
    );
  }, [selected, userSelectModel]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // const restSelect = React.useMemo(
  //   () => <RestSelect {...props} />,
  //   [selected, picked, checkedNP, checkedNS, userSearchRes, props]
  // );

  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Results</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              {activeStep === 0 && select}
              {activeStep === 1 && selectModel}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="outlined"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1, width: 150 }}
                    disabled={selected.length > 0 ? false : true}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <>
          <Box sx={{ mt: 1 }}>
            <Box sx={{ display: 'flex', mb: 1 }}>
              <Box>
                <Typography variant="h6">
                  Recommendations Based on Your Likes
                </Typography>
              </Box>
              <Box sx={{ flexGrow: 1 }}></Box>
              <Box>
                <Button variant="contained" onClick={handleReset}>
                  Try Again
                </Button>
              </Box>
            </Box>
            {results}
          </Box>
        </>
      )}
    </Box>
  );
}
