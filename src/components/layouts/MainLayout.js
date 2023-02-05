import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Button from '../UI/Button';

const StyledMainLayout = styled.main`
  max-width: 800px;
  margin: 0 auto;

  article {
    padding: 1rem 0;
  }
`;

function MainLayout() {
  return (
    <StyledMainLayout>
      <Header>
        <Header.Left>
          <Button variant="text" size="sm" startIcon={<MdKeyboardArrowLeft />}>
            뒤로가기
          </Button>
        </Header.Left>
        <Header.Title>프론트엔드 설문조사</Header.Title>
        <Header.Right />
      </Header>
      <article>
        <Outlet />
      </article>
    </StyledMainLayout>
  );
}

export default MainLayout;
