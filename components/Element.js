import React from 'react'
import styled from 'styled-components'

const SubContainer = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 50px;
`
const Image = styled.img`
  max-width: 394px;
  border-radius: 24px;
  margin-bottom: 20px;
  max-height: 250px;
  width: 100%;
`
const Frame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6px 0;
  max-width: 394px;
  width: 100%;
`

export default function Element({ item }) {
  return (
    <SubContainer>
      <Image src={item.photo} />
      <Frame>
        <div>
          <div>{item.superHost && <p>superhost</p>}</div>
          <div>
            {item.type}. {item.beds}beds
          </div>
        </div>
        {/* <div>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24'
              viewBox='0 0 24 24'
              width='24'
              fill='red'>
              <path d='M0 0h24v24H0z' fill='none' />
              <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
            </svg>
          </div>
          <div>{item.rating}</div>
        </div> */}
      </Frame>
      <p className='list_paragraph'>{item.title}</p>
    </SubContainer>
  )
}
