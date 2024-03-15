import React from 'react'
import { Content, InstractorWrapper } from './style'

export default function SlideInstractor({img , alt , name , job}) {
  return (
    <InstractorWrapper>
      <img src={img} alt={alt}/>
      <Content>
      <h2>{name}</h2>
      <span>{job}</span>
      </Content>
    </InstractorWrapper>
  )
}
