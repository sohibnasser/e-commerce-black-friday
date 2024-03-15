import HeaderCover from "./HeaderCover/HeaderCover.mp4";
import { HeaderWrapper, Video } from "./style";

export default function Header() {
  return (
  
    <HeaderWrapper>
    <Video autoPlay muted loop controls={false}  src={HeaderCover} frameborder="0"></Video>
    </HeaderWrapper>
  
  )
}
