import { CardContent } from '@material-ui/core';
import styled from 'styled-components';

export const CustomCardContent = styled(CardContent)`
  background-color: ${(props) => props.theme.palette.light};
  color: ${(props) => props.theme.fontColor};
  height: 160px;
`;

export const CustomCardContentTitle = styled.div`
  background-color: ${(props) => props.theme.palette.light};
  color: ${(props) => props.theme.fontColor};
  height: 80px;
`;
