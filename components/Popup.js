import React, { useState } from 'react'
import Guest from './Guest.js'
import LocationList from './LocationList'
import styled from 'styled-components'

const WrapperPopup = styled.div`
  position: fixed;
  top: 6px;
  height: 80%;
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
const AddGuestButton = styled.button``

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
  function handleShowGuest() {
    setShowGuest(!showGuest)
  }
  return (
    <WrapperPopup>
      <PopupHeader>
        <p>Edit your search</p>
        <ClosePopup className='close-icon' onClick={handleClose}>
          x
        </ClosePopup>
      </PopupHeader>
      <PopupContainer>
        <LocationList
          HandleFiltering={HandleFiltering}
          handleClose={handleClose}
        />
        <AddGuestButton onClick={handleShowGuest} onClick={toggleGuest}>
          {guestTotal} guests
        </AddGuestButton>
        {/* {showGuest && (
                <Guest
                  HandleFiltering={HandleFiltering}
                  handleClose={handleClose}
                  addguest={addguest}
                  setAddguest={setAddguest}
                  toggleGuest={toggleGuest}
                  countAdd={countAdd}
                  setCountAdd={setCountAdd}
                  countChild={countChild}
                  setCountChild={setCountChild}
                  guestTotal={guestTotal}
                  GuestNumbers={GuestNumbers}
                />
              )} */}
        {/* <li>
              <button type='button' onClick={handleClose}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='24'
                  viewBox='0 0 24 24'
                  width='24'
                  fill='white'>
                  <path d='M0 0h24v24H0z' fill='none' />
                  <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
                </svg>
                Search
              </button>
            </li> */}
      </PopupContainer>
    </WrapperPopup>
  )
}
export default Popup
