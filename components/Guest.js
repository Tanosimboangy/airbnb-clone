import React from 'react'
import styled from 'styled-components'
function Guest({ countAdd, setCountAdd, countChild, setCountChild }) {
  const handleCountDecrement = () =>
    countAdd > 0 ? setCountAdd(countAdd - 1) : countAdd
  const handleCountIncrement = () => setCountAdd(countAdd + 1)
  const handleCountChildDecrement = () =>
    countChild > 0 ? setCountChild(countChild - 1) : countChild
  const handleCountChildIncrement = () => setCountChild(countChild + 1)

  const PopupAddGuest = styled.div`
    margin-top: 48px;
    padding: 17px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `
  const PopupAddGuestTitle = styled.div`
    margin-bottom: 24px;
  `
  const TitleWrapper = styled.h2`
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    margin-bottom: 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
  `
  const Title = styled.h2`
    color: #333333;
    padding-bottom: 6px;
  `
  const Span = styled.span`
    color: gray;
  `
  const ButtonsWrappers = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `
  const CountGuest = styled.span`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: #333333;
  `
  const Buttons = styled.button`
    background: white;
    border-radius: 4px;
    border: 1px solid black;
  `

  return (
    <PopupAddGuest>
      <PopupAddGuestTitle>
        <TitleWrapper>
          <Title>Adults</Title>
          <Span>Ages 13 or above</Span>
        </TitleWrapper>
        <ButtonsWrappers>
          <Buttons onClick={handleCountDecrement}>-</Buttons>
          <CountGuest>{countAdd}</CountGuest>
          <Buttons onClick={handleCountIncrement}>+</Buttons>
        </ButtonsWrappers>
      </PopupAddGuestTitle>
      <PopupAddGuestTitle>
        <TitleWrapper>
          <Title>Children</Title>
          <Span>Ages 2-12</Span>
        </TitleWrapper>
        <ButtonsWrappers>
          <Buttons onClick={handleCountChildDecrement}>-</Buttons>
          <CountGuest>{countChild}</CountGuest>
          <Buttons onClick={handleCountChildIncrement}>+</Buttons>
        </ButtonsWrappers>
      </PopupAddGuestTitle>
    </PopupAddGuest>
  )
}

export default Guest
