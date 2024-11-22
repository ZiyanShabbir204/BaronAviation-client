import { useAuth } from "@/contexts/auth.context";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LogoutPage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate()
  useEffect(() => {
    logout();
    navigate("/")
  }, []);
  return <Box sx={{ display: 'flex' }}>
  <CircularProgress />
</Box>;
};

export default LogoutPage;
