/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container, TextConfirm } from './styles';

const FinishOrder: React.FC = () => {
  return (
    <Container>
      <Icon name="thumbs-up" size={50} color="#04e361" />
      <TextConfirm>Pedido confirmado!</TextConfirm>
    </Container>
  );
};

export default FinishOrder;
