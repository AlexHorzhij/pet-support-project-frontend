import WorkDaysPopover from './WorkDaysPopover';

import { useState } from 'react';
import { Popover, Box } from '@mui/material';
import { ContactsTypography } from './OurFiendsPage.styled';

const WorkDays = ({ workDays }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const date = new Date();
  const todayIndex = date.getDay();

  const normalDayIndex = data => {
    if (data === 0) {
      return 6;
    }

    return data - 1;
  };
  const indexDay = normalDayIndex(todayIndex);
  const dayWorkTime = workDays[indexDay];

  const workTime = data => {
    if (!data.isOpen) {
      return 'Closed today';
    }

    return `${data.from}-${data.to}`;
  };

  return (
    <>
      <ContactsTypography
        variant="body1"
        component="span"
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        sx={{
          display: 'block',
          transition: 'color 250ms linear',
          ':hover': {
            color: 'primary.main',
          },
        }}
      >
        {workTime(dayWorkTime)}
      </ContactsTypography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Box
          sx={{
            width: '135px',
            height: '160px',
            padding: '12px 17px',
            border: '1px solid #F59256',
            boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.25)',
            borderRadius: '40px',
          }}
        >
          {workDays.map(workDay => (
            <WorkDaysPopover
              key={workDay._id}
              index={workDays.indexOf(workDay)}
              dayObj={workDay}
            />
          ))}
        </Box>
      </Popover>
    </>
  );
};

export default WorkDays;
