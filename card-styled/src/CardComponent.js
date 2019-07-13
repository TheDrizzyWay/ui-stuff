import React from 'react';
import styled from 'styled-components';
import { FaCommentAlt, FaThumbsUp, FaRegEye } from 'react-icons/fa';
import Card from './Card';

const StyledRoot = styled.div`
  padding: 50px 12px;
`;

const StyledContainer = styled.div`
  max-width: 550px;
  width: 100%;
  margin: auto;
`;

const CardComponent = () => {
  const date = new Date().toLocaleDateString();
  const onCommentClick = () => alert('You clicked comments');
  const onLikesClick = () => alert('You clicked likes');
  const onViewsClick = () => alert('You clicked views');
  const buttons = [
    {
      label: (
        <>
          <FaCommentAlt /> 0 Comments
        </>
      ),
      onClick: onCommentClick,
    },
    {
      label: (
        <>
          <FaThumbsUp /> 242 Likes
        </>
      ),
      onClick: onLikesClick,
    },
    {
      label: (
        <>
          <FaRegEye /> 187288 Views
        </>
      ),
      onClick: onViewsClick,
    },
  ];

  return (
    <StyledRoot>
      <StyledContainer>
        <Card
          title="Mortal Kombat 11"
          date={date}
          description="Mortal Kombat 11 (MK11) is a fighting video game developed by 
          NetherRealm Studios and published by Warner Bros.Interactive 
          Entertainment.  Running on the Unreal Engine 3,[7] it is the 
          eleventh main installment in the Mortal Kombat series and a 
          sequel to 2015's Mortal Kombat X."
          actions={buttons}
        />
      </StyledContainer>
    </StyledRoot>
  );
};

export default CardComponent;
