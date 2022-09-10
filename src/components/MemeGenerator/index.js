import {Component} from 'react'
import {
  Label,
  Heading,
  Form,
  Input,
  OuterContainer,
  Select,
  Option,
  Button,
  CardContainer,
  InputContainer,
  MemeText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    showMeme: false,
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.setState({showMeme: true})
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeOption = event => {
    this.setState({fontSize: event.target.value})
  }

  renderMemeCard = () => {
    const {imageUrl, topText, bottomText, fontSize} = this.state
    console.log(fontSize)
    const stringFont = `${fontSize}`
    return (
      <CardContainer data-testid="meme" imageUrl={imageUrl}>
        <MemeText fontSize={stringFont}>{topText}</MemeText>
        <MemeText fontSize={stringFont}>{bottomText}</MemeText>
      </CardContainer>
    )
  }

  render() {
    const {showMeme} = this.state
    return (
      <OuterContainer>
        {showMeme && this.renderMemeCard()}
        <InputContainer>
          <Heading>Meme Generator</Heading>
          <Form onSubmit={this.onSubmitForm}>
            <Label>Image URL</Label>
            <Input
              onChange={this.onChangeImageUrl}
              placeholder="Enter the Image URL"
            />
            <Label>Top Text</Label>
            <Input
              onChange={this.onChangeTopText}
              placeholder="Enter the Top Text"
            />
            <Label>Bottom Text</Label>
            <Input
              onChange={this.onChangeBottomText}
              placeholder="Enter the Bottom Text"
            />
            <Label>Font Size</Label>
            <Select onChange={this.onChangeOption}>
              {fontSizesOptionsList.map(each => (
                <Option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </Option>
              ))}
            </Select>
            <Button type="submit">Generate</Button>
          </Form>
        </InputContainer>
      </OuterContainer>
    )
  }
}
export default MemeGenerator
