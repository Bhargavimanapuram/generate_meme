// Style your components here
import styled from 'styled-components'

export const OuterContainer = styled.div`
  width: 90%;
  margin: auto;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const CardContainer = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  height: 50vh;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 50vw;
    order: 1;
  }
`
export const Heading = styled.h1`
  color: #35469c;
  font-size: 36px;
  font-weight: 600;
  font-family: 'Roboto';
  text-align: center;
  margin-top: 0;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`
export const InputContainer = styled.div`
  @media screen and (min-width: 768px) {
    margin-right: 30px;
  }
`
export const Label = styled.label`
  color: #7e858e;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-bottom: 5px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid #7e858e;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 20px;
  outline: none;
`
export const Select = styled.select`
  background-color: transparent;
  border: 1px solid #7e858e;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 20px;
`
export const Option = styled.option``

export const Button = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  font-family: 'Roboto';
  padding: 10px;
  border: 0;
  border-radius: 4px;
  align-self: flex-start;
`
export const MemeText = styled.p`
  font-family: 'Roboto';
  font-size: ${props => props.fontSize};
  color: #ffffff;
  font-weight: 500;
  text-align: center;
`
