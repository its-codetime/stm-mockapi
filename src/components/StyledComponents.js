import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import MuiButton from "@mui/material/Button";
import MuiBox from "@mui/material/Box";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export const drawerWidth = 200;

export const AppBox = styled(MuiBox)(() => ({
  display: "flex",
}));

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export const NavButton = styled(MuiButton)(({ theme }) => ({
  fontSize: 16,
  padding: 0,
  color: theme.palette.primary.dark,
  "&:hover": {
    background: "#d0ecf5",
  },
  "&.active": {
    background: theme.palette.primary.dark,
    color: "#ffffff",
  },
}));

export const DeleteSpan = styled("span")(() => ({
  color: "red",
  component: "span",
}));

export const Loader = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <CircularProgress />
    </Box>
  );
};
