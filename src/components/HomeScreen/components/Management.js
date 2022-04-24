import React from 'react';
import '../Css/management.css';
import {
  blue,
  deepOrange,
  green,
  pink,
  red,
  yellow,
} from '@mui/material/colors';

//Icons
import MenuIcon from '@mui/icons-material/Menu';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import TodayIcon from '@mui/icons-material/Today';
import AddIcon from '@mui/icons-material/Add';
import { Avatar, AvatarGroup, Fab, Paper } from '@mui/material';
import { Box } from '@mui/system';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GroupsIcon from '@mui/icons-material/Groups';
import BusinessIcon from '@mui/icons-material/Business';

const Management = () => {
  return (
    <>
      <div className="product-management">
        <div className="title-management">
          <MenuIcon />
          <BusinessCenterIcon />
          <h2 className="management-h2">Management App</h2>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>MV</Avatar>
        </div>

        <div className="medio-management">
          <div className="cont-today">
            <div>
              <h2>Schedule for today</h2>
              <p>20 sep 2019. (Saturday)</p>
            </div>
            <TodayIcon sx={{ maxWidth: 50, maxHeight: 50 }} />
          </div>
          <h3 className="h3-task">My Task</h3>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              '& > :not(style)': {
                m: 0.5,
                maxWidth: 100,
                maxHeight: 120,
              },
            }}
          >
            <Paper className="paper-cont" elevation={3}>
              <Avatar sx={{ bgcolor: green[500] }}>
                <AccountTreeIcon />
              </Avatar>
              <p>Projects</p>
              <li>3 On</li>
              <AddIcon />
            </Paper>
            <Paper className="paper-cont" elevation={3}>
              <Avatar sx={{ bgcolor: red[500] }}>
                <BusinessIcon />
              </Avatar>
              <p>Suppliers</p>
              <li>50 on</li>
              <AddIcon />
            </Paper>
            <Paper className="paper-cont" elevation={3}>
              <Avatar sx={{ bgcolor: blue[500] }}>
                <GroupsIcon />
              </Avatar>
              <p>Meetings</p>
              <li>3 On</li>
              <AddIcon />
            </Paper>
          </Box>

          <div className="checklist-cont">
            <h2 className="check-h2">Checklist</h2>

            <div className="cont-check">
              <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
                <AccountTreeIcon />
              </Avatar>
              <div>
                <h3>Projects</h3>
                <li>6 Completed</li>
              </div>
            </div>

            <div className="cont-check">
              <Avatar sx={{ bgcolor: red[500] }} variant="rounded">
                <BusinessIcon />
              </Avatar>
              <div>
                <h3>Suppliers</h3>
                <li>2 Completed</li>
              </div>
            </div>

            <div className="cont-check">
              <Avatar sx={{ bgcolor: blue[500] }} variant="rounded">
                <GroupsIcon />
              </Avatar>
              <div>
                <h3>Meetings</h3>
                <li>3 Completed</li>
              </div>
            </div>
          </div>

          <div className="myteam">
            <h2 className="team-h2">My Team</h2>
            <div className="cont-avatar">
              <AvatarGroup max={5}>
                <Avatar sx={{ bgcolor: red[500] }}>G</Avatar>
                <Avatar sx={{ bgcolor: blue[500] }}>T</Avatar>
                <Avatar sx={{ bgcolor: green[500] }}>P</Avatar>
                <Avatar sx={{ bgcolor: yellow[500] }}>E</Avatar>
                <Avatar>A</Avatar>
                <Avatar>H</Avatar>
              </AvatarGroup>
              <Avatar className="boton-mas" sx={{ bgcolor: pink[500] }}>
                <AddIcon />
              </Avatar>
            </div>
          </div>
        </div>

        <div className="abajo-managemnet">
          <ReceiptLongIcon />
          <CameraAltIcon />
          <Fab color="secondary" aria-label="add">
            <AddIcon />
          </Fab>
          <PersonIcon />
          <SettingsIcon />
        </div>
      </div>
    </>
  );
};

export default Management;
