import { Button, Container, fade, Paper, TextField } from '@material-ui/core';
import styled from 'styled-components';

export const CustomTextField = styled(TextField)`
  margin-bottom: 2em !important;
  background-color: ${(props) => fade(props.theme.fontColor, 0.1)};
`;

export const NotFoundContainer = styled(Container)`
  height: 100vh;
  align-content: center;
`;

export const CustomPaper = styled(Paper)`
  padding: 3em !important;
  background-color: ${(props) => fade(props.theme.palette.light, 0.75)} !important;
`;

export const CustomButton = styled(Button)`
  color: white !important;
  background-color: ${(props) => props.theme.palette.contrast} !important;
`;
