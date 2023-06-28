import React from 'react'
import { styled } from "styled-components";
import SearchIcon from '../icons/SearchIcon';

export const PrimaryInput = styled.input`
    width: 352px;
    border-radius: 8px;
    border: none;
    padding: 10px 16px;

    background-color: #F3F5F6;

    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #737380;
`

const InputContainer = styled.div`
    position: relative;
    width: 352px;

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`

const SearchInput = (props) => {
  return (
    <InputContainer>
        <PrimaryInput 
            onChange={(event) => props.handleChange(event.target.value)} 
            {...props}
        />
        <SearchIcon/>
    </InputContainer>
  )
}

export default SearchInput
