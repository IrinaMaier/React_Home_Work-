import React from "react"

function VideoComponent(){
    return (
        <div>
            <h2>Video number one</h2>
            <video width="320" height="240" controls>
                <source src="https://youtu.be/M8-_vVx6Suw?si=J0IKMiym3aIsllB-" type="video/mp4"/>
            </video>
        </div>
    )
}
export default VideoComponent