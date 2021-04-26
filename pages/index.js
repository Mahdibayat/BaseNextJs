import React from "react";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startClock } from '../redux/actions'
import style from 'styled-components';

const H1 = style.h1`
    color: red;
`;

const Index = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(startClock())
  }, [dispatch])

  return (
    <>
        <H1>hi</H1>
    </>
  )
}

export default Index
