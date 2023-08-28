import React, {useEffect, useState} from "react"

const DesktopNotification = () => {
    const [permission, setPermission] = useState('default');

    useEffect(()=>{
        // request permission for desktop notifications.
        if('Notification' in window)
        {
            Notification.requestPermission().then(permission => {
                setPermission(permission);
            });
        }
    }, []);


    const showNotification = () =>{
        if(permission === 'granted')
        {
            const notificationOptions = {
                body: 'you have an incoming call',
                //icon: process.env.PUBLIC_URL + '/call.jpg'
            };

            new Notification('Incoming Call', notificationOptions);
        }
    }

    return(
        <>
            <div>
                <div className="container">
                    <button className="btn btn-primary" onClick={() => showNotification()}>
                        Place a call
                    </button>
                </div>
            </div>
        </>
    )
}

export default DesktopNotification;