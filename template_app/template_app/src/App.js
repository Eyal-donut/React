import Card from "./components/Card";
import Wrapper from "./components/Helpers/Wrapper";
import Image from "./components/Image";
import Link from "./components/Link";
import LinksContainer from "./components/LinksContainer";
import Title from "./components/Title";
import Description from "./components/Description";


function App() {
  const card1 = {
    image: "image1",
    title: "title1",
    description: "description1",
    links: [
      {linkText:"SHARE", linkUrl: "https://www.google.com/"},
      {linkText:"EXPLORE", linkUrl: "https://www.google.com/"},
    ],
  }
  const card2 = {
    image: "image2",
    title: "title2",
    description: "description2",
    links: [
      {linkText:"EAT", linkUrl: "https://www.google.com/"},
      {linkText:"DRINK", linkUrl: "https://www.google.com/"},
    ],
  }
  const card3 = {
    image: "image3",
    title: "title3",
    description: "description3",
    links: [
      {linkText:"DOG", linkUrl: "https://www.google.com/"},
      {linkText:"CAT", linkUrl: "https://www.google.com/"},
    ],
  }

  return (
    <Wrapper>
      <Card>
        <Image image = {card1.image}/>
        <Title title={card1.title}/>
        <Description description={card1.description}/>
        <LinksContainer>
          <Link 
          linkText='hi'
          linkUrl='https://www.google.com/'
          />
          <Link 
          linkText={card1.links[1].linkText}
          linkUrl={card1.links[1].linkUrl}
          />
        </LinksContainer>
      </Card>
      <Card>
        <Image image = {card2.image}></Image>
        <Title title={card2.title}/>
        <Description description={card2.description}/>
        <LinksContainer>
          <Link
          linkText={card2.links[0].linkText}
          linkUrl={card2.links[0].linkUrl}
          />
          <Link 
          linkText={card2.links[1].linkText}
          linkUrl={card2.links[1].linkUrl}
          />
        </LinksContainer>

      </Card>
      <Card>
        <Image image = {card3.image}></Image>
        <Title title={card3.title}/>
        <Description description={card3.description}/>
        <LinksContainer>
          <Link 
          linkText={card3.links[0].linkText}
          linkUrl={card3.links[0].linkUrl}
          />
          <Link
          linkText={card3.links[1].linkText}
          linkUrl={card3.links[1].linkUrl}
          />
        </LinksContainer>

      </Card>
      
    </Wrapper>
  )

}
export default App;
