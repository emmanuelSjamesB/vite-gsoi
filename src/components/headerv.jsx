
import video from '../assets/videos/video2.mp4';


const HeaderVideo = ()=>{
    return (
        <header>
          <video src={video} autoPlay muted loop></video>
 
        </header>
      );

}
export default HeaderVideo;