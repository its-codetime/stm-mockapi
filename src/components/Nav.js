// mui components
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";

// mui icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import {
  drawerWidth,
  AppBar,
  DrawerHeader,
  NavButton,
} from "./StyledComponents";

export default function Nav({ isNavOpen, toggleNav }) {
  const theme = useTheme();

  return (
    <>
      <AppBar position="fixed" open={isNavOpen}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => toggleNav(true)}
            edge="start"
            sx={{ mr: 2, ...(isNavOpen && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="h6">
            Student Teacher management
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={isNavOpen}
      >
        <DrawerHeader>
          <IconButton onClick={() => toggleNav(false)}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Accordion
          defaultExpanded={true}
          sx={{
            color: "primary.dark",
            fontWeight: "bold",
          }}
          disableGutters={true}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6" component="h6">
              Teachers
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ButtonGroup
              sx={{
                width: "100%",
              }}
              orientation="vertical"
              aria-label="vertical outlined button group"
            >
              <NavButton component={NavLink} to="/teacher/all">
                All Teachers
              </NavButton>
              <NavButton component={NavLink} to="/teacher/add">
                Add Teacher
              </NavButton>
            </ButtonGroup>
          </AccordionDetails>
        </Accordion>
        <Divider />
        <Accordion
          defaultExpanded={true}
          sx={{
            color: "primary.dark",
          }}
          disableGutters={true}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6" component="h6">
              Students
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ButtonGroup
              sx={{
                width: "100%",
              }}
              orientation="vertical"
              aria-label="vertical outlined button group"
            >
              <NavButton component={NavLink} to="/student/all">
                All Students
              </NavButton>

              <NavButton component={NavLink} to="/student/add">
                Add Student
              </NavButton>
            </ButtonGroup>
          </AccordionDetails>
        </Accordion>
      </Drawer>
    </>
  );
}
