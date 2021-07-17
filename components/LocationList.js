import React from 'react'

import styled from 'styled-components'

const Container = styled.div``
const Input = styled.input``

export default function InputSelect({
  HandleFiltering,
  showLocation,
  showList,
}) {
  return (
    <Container>
      <Input onClick={showLocation} type='button' placeholder='ADD A LIST' />
      {showList && (
        <ul
          style={{
            display: 'flex',
            padding: '0',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignContent: 'space-between',
          }}>
          <li
            onClick={HandleFiltering}
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingBlockStart: '1rem',
              paddingBlockEnd: '1rem',
              cursor: 'pointer',
            }}>
            <svg
              style={{ paddingInlineEnd: '2rem', cursor: 'pointer' }}
              xmlns='http://www.w3.org/2000/svg'
              height='24'
              viewBox='0 0 24 24'
              width='24'>
              <path d='M0 0h24v24H0z' fill='none' />
              <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
            </svg>
            <p>Helsinki, Finland</p>
          </li>
          <li
            onClick={HandleFiltering}
            value='Turku, Finland'
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingBlockStart: '1rem',
              paddingBlockEnd: '1rem',
              cursor: 'pointer',
            }}>
            <svg
              style={{ paddingInlineEnd: '2rem' }}
              xmlns='http://www.w3.org/2000/svg'
              height='24'
              viewBox='0 0 24 24'
              width='24'>
              <path d='M0 0h24v24H0z' fill='none' />
              <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
            </svg>
            <p>Turku, Finland</p>
          </li>
          <li
            onClick={HandleFiltering}
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingBlockStart: '1rem',
              paddingBlockEnd: '1rem',
              cursor: 'pointer',
            }}>
            <svg
              style={{ paddingInlineEnd: '2rem' }}
              xmlns='http://www.w3.org/2000/svg'
              height='24'
              viewBox='0 0 24 24'
              width='24'>
              <path d='M0 0h24v24H0z' fill='none' />
              <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
            </svg>
            <p>Oulu, Finland</p>
          </li>
          <li
            onClick={HandleFiltering}
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingBlockStart: '1rem',
              paddingBlockEnd: '1rem',
              cursor: 'pointer',
            }}>
            <svg
              style={{ paddingInlineEnd: '2rem' }}
              xmlns='http://www.w3.org/2000/svg'
              height='24'
              viewBox='0 0 24 24'
              width='24'>
              <path d='M0 0h24v24H0z' fill='none' />
              <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
            </svg>
            <p>Vaasa, Finland</p>
          </li>
        </ul>
      )}
    </Container>
  )
}
