
import React from 'react'
import {useState,useEffect,useRef} from 'react'


function Camera(){

const videoRef = useRef(null)
const photoRef= useRef(null)

const [hasPhoto , setHasPhoto]=useState(false)


const getVideo =()=>{
    navigator.mediaDevices
    .getUserMedia({video:{width: 1920,height:1000 }})
    .then(stream=>{
        let video=videoRef.current;
    video.srcObject = stream;
video.play()})
.catch(err=>{console.error(err)})

}

useEffect(()=>{
    getVideo();
},[videoRef])

return(
<div className='webCam'>
<div className='camera'>
<video ref={videoRef}></video>

</div>
<div className={'result' + (hasPhoto ? 'hasPhoto' : '' )}>
<canvas ref={photoRef}></canvas>


</div>
</div>)}

export default Camera
    


    