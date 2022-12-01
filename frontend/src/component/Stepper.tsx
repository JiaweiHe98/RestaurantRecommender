import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import RestSelect from './form/RestSelect';
import { RestSimple } from '../util/loadRestIdName';
import { RestSimpleStatus } from './form/RestSelect';
import { randomPick } from '../util/randomPick';

const steps = [
  {
    label: 'Select Restaurants You Like',
  },
  {
    label: 'Select the Model to Make Recommendation',
  },
  {
    label: 'Recommendations Based on Your Likes',
  },
];

const INITIAL_N_PICK = 12;

interface Props {
  restSimples: Array<RestSimple>;
}

export default function VerticalLinearStepper({ restSimples }: Props) {
  const [activeStep, setActiveStep] = React.useState(0);

  // the restaurant that user selected
  const [selected, setSelected] = React.useState<Array<RestSimpleStatus>>([]);

  const [picked, setPicked] = React.useState<Array<RestSimpleStatus>>([]);
  const [checkedNP, setCheckedNP] = React.useState(0);
  const [checkedNS, setCheckedNS] = React.useState(0);
  const [userSearchRes, setUserSearchRes] = React.useState<string | null>(null);

  React.useEffect(() => {
    pick();
  }, [restSimples]);

  const pick = () => {
    // cannot initialize more than once
    if (picked.length > 0) {
      const newPick: Array<RestSimpleStatus> = [];

      picked.forEach((each) => {
        if (each.checked) {
          newPick.push(each);
        } else {
          const curPick = randomPick(restSimples, selected, [
            ...picked,
            ...newPick,
          ]);

          if (curPick !== null) {
            newPick.push({
              rest: curPick,
              checked: false,
            });
          }
        }
      });

      setPicked(newPick);
    } else {
      const newPick: Array<RestSimpleStatus> = [];
      for (let i = 0; i < INITIAL_N_PICK; i++) {
        const curPick = randomPick(restSimples, newPick, []);
        if (curPick !== null) {
          newPick.push({ rest: curPick, checked: false });
        }
      }
      setPicked([...picked, ...newPick]);
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const props = {
    restSimples,
    selected,
    setSelected,
    picked,
    setPicked,
    checkedNP,
    setCheckedNP,
    checkedNS,
    setCheckedNS,
    userSearchRes,
    setUserSearchRes,
    pick,
  };

  const restSelect = React.useMemo(
    () => <RestSelect {...props} />,
    [selected, picked, checkedNP, checkedNS, userSearchRes]
  );

  const selectModel = () => {
    return <Box>hey select model</Box>;
  };

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
              {activeStep === 0 && restSelect}
              {activeStep === 1 && selectModel()}
              {activeStep === 2 && selectModel()}
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
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
