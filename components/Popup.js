import React, { useState } from 'react'
import Guest from './Guest.js'
import LocationList from './LocationList'
import styled from 'styled-components'
import whiteSearch from '../icons/white_search.svg'

const WrapperPopup = styled.div`
  position: fixed;
  top: 6px;
  height: 58%;
  right: 5px;
  background-color: white;
  left: 5px;
`
const PopupHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px 13px;
`
const PopupTitle = styled.p`
  // font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  color: #333333;
`
const ClosePopup = styled.span`
  font-size: 24px;
  cursor: pointer;
`
const PopupContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  max-width: 90%;
  margin: auto;
`
const AddGuestButton = styled.button`
  background-color: white;
  padding: 16px 0;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
`
const SearchSubmit = styled.button`
  border: 0;
  line-height: 2.5;
  padding: 6px 20px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  border-radius: 10px;
  background-color: rgba(220, 0, 0, 1);
  background-image: linear-gradient(
    to top left,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2) 30%,
    rgba(0, 0, 0, 0)
  );
  box-shadow: inset 2px 2px 3px rgb(255 255 255 / 60%),
    inset -2px -2px 3px rgb(0 0 0 / 60%);
  width: 126px;
  margin: auto;
  position: fixed;
  left: 50%;
  top: 70%;
  transform: translate(-50%, -50%);
`

function Popup({
  HandleFiltering,
  handleClose,
  addguest,
  setAddguest,
  toggleGuest,
  countAdd,
  setCountAdd,
  countChild,
  setCountChild,
  guestTotal,
  GuestNumbers,
}) {
  const [showGuest, setShowGuest] = useState(false)
  const [showList, setShowList] = useState(false)
  function handleShowGuest() {
    setShowGuest(!showGuest)
  }
  function showLocation() {
    setShowList(!showList)
    setShowGuest(showGuest)
  }
  return (
    <WrapperPopup>
      <PopupHeader>
        <PopupTitle>Edit your search</PopupTitle>
        <ClosePopup className='close-icon' onClick={handleClose}>
          x
        </ClosePopup>
      </PopupHeader>
      <PopupContainer>
        {/* <LocationList
          HandleFiltering={HandleFiltering}
          handleClose={handleClose}
          showLocation={showLocation}
          showList={showList}
        /> */}
        <AddGuestButton onClick={handleShowGuest} onChange={toggleGuest}>
          {guestTotal} guests
        </AddGuestButton>
        {showGuest && (
          <Guest
            countAdd={countAdd}
            setCountAdd={setCountAdd}
            countChild={countChild}
            setCountChild={setCountChild}
          />
        )}
        <SearchSubmit type='button' onClick={handleClose}>
          <img src={whiteSearch} />
          Search
        </SearchSubmit>
      </PopupContainer>
    </WrapperPopup>
  )
}
export default Popup
