import { Card, CardContent, GridList, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const CardVideo = styled(Card)`
  height: 90vh;
  background-color: ${(props) => props.theme.colors.blueGrey.light} !important;
`;

export const CardContentVideo = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  flex-wrap: wrap;
`;

export const InfoContainer = styled.div`
  display: flex;
`;

export const MarginTypography = styled(Typography)`
  padding-right: 20px;
`;

export const CustomGridList = styled(GridList)`
  flex-wrap: nowrap !important;
  transform: translateZ(0);
`;
