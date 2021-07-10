import React, { useState } from 'react'
import Element from './Element.js'
import stays from './stays.json'
import Header from './Header.js'
import Popup from './Popup.js'
import styled from 'styled-components'

const Container = styled.div``
const Wrapper = styled.div``
const Base = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 95%;
  margin: auto;
`

const Card = styled.div``

function Main() {
  const [allStays, setAllStays] = useState(stays)

  for (let i = 0; allStays.length > i; i++) {
    allStays[i].id = i
  }

  const [isOpen, setIsOpen] = useState(!allStays)
  const togglePopup = () => {
    setIsOpen(!isOpen)
  }
  const [addguest, setAddguest] = useState(false)
  const toggleGuest = () => {
    setAddguest(!addguest)
  }

  const [countAdd, setCountAdd] = useState(0)
  const [countChild, setCountChild] = useState(0)
  let guestTotal = countAdd + countChild

  const GuestNumbers = allStays.filter((guest) => guest.maxGuests >= guestTotal)

  function HandleFiltering(e) {
    setAllStays(
      GuestNumbers.filter(
        (result) => result.city.toLowerCase() === e.target.value.toLowerCase()
      )
    )
  }

  return (
    <Container>
      <Wrapper>
        {isOpen && (
          <Popup
            HandleFiltering={HandleFiltering}
            togglePopup={togglePopup}
            handleClose={togglePopup}
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
        )}
        <Header togglePopup={togglePopup} />
      </Wrapper>
      <Base>
        {GuestNumbers.map((item) => {
          return (
            <Card key={item.id}>
              <Element item={item} />
            </Card>
          )
        })}
      </Base>
    </Container>
  )
}
export default Main
