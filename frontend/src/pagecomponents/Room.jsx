import {useParams} from "react-router-dom"
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"

const RoomPage=()=>{
    const {roomId}=useParams();
    
    console.log('Room ID:', roomId); // Debugging purpose

    const myMeeting=async(element)=>{
        const appId=987670840;
        const serverSecret="d96da2a262044e4b6eff046708b0c5dd";
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appId,serverSecret,roomId,Date.now().toString(),"Chiranth");

        const zc=ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container:element,
            sharedLinks:[{
                name:'Copy Link',
                url:`http://localhost:3000/room/${roomId}`,
            }],
            scenario:{
                mode:ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton:true,
        });
    }
    return(
       <div>
        <div ref={myMeeting}/>
       </div>
    );
}

export default RoomPage;