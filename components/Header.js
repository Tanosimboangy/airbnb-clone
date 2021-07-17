import React from 'react'
import styled from 'styled-components'
import logo from '../icons/logo.svg'
import search from '../icons/search.svg'

const HeaderWrapper = styled.header`
  margin-bottom: 37px;
  @media (min-width: 500px) {
    padding-top: 32px;
    padding-bottom: 61px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 86%;
    margin: auto;
    margin-bottom: 0;
  }
`
const Title = styled.h1`
  padding-top: 19px;
  padding-left: 13px;
  padding-bottom: 39px;
  @media (min-width: 500px) {
    padding: 0;
  }
`
const LogoLink = styled.a``
const Logo = styled.img`
  @media (min-width: 500px) {
    width: 120px;
  }
`
const Form = styled.form`
  font-style: normal;
  font-weight: normal;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  max-width: 85%;
  margin: auto;
  @media (min-width: 500px) {
    margin-right: 0;
  }
`
const LocationButton = styled.input`
  background-color: white;
  padding: 18px 16px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  @media (max-width: 300px) {
    padding: 14px 12px;
  }
`
const GuestButton = styled.input`
  background-color: white;
  padding: 18px 16px;
  border-right: 1px solid #f2f2f2;
  border-left: 1px solid #f2f2f2;
  @media (max-width: 300px) {
    padding: 14px 12px;
  }
`
const SearchButton = styled.button`
  background-color: white;
  padding: 18px 16px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  @media (max-width: 300px) {
    padding: 14px 12px;
  }
`
const SearchLogo = styled.img``

function Header({ togglePopup, HandleFiltering }) {
  return (
    <HeaderWrapper>
      <Title>
        <LogoLink href='https://www.agoda.com/the-wind-bnb/hotel/tainan-tw.html?   cid=1844104'>
          <Logo src={logo} />
        </LogoLink>
      </Title>
      <Form onClick={togglePopup}>
        <LocationButton
          type='button'
          value='LOCATION'
          onChange={HandleFiltering}
        />
        <GuestButton type='button' value='ADD GUEST' />
        <SearchButton type='button'>
          <SearchLogo src={search} />
        </SearchButton>
      </Form>
    </HeaderWrapper>
  )
}
export default Header
