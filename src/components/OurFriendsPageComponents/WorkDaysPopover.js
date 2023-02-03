import { Box, Typography } from '@mui/material';

const WorkDaysPopover = ({ index, dayObj }) => {
  const { isOpen, from, to } = dayObj;
  const weekDays = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '4px',
      }}
    >
      <Typography variant="caption" component="span">
        {weekDays[index]}
      </Typography>
      <Typography variant="caption" component="span">
        {!isOpen ? 'Closed' : `${from} - ${to}`}
      </Typography>
    </Box>
  );
};

export default WorkDaysPopover;
