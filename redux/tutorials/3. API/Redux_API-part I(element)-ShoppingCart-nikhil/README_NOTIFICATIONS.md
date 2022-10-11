## NOTIFICATIONS

N: Este indio ha formao un reguero que ya me dio dolor de cabeza

Watch the tutorial from 1:20 hr to 1:41
https://www.youtube.com/watch?v=zrs7u6bdbUw

## STEPS

1. src/App.js: Convert the useEffect into a asynchronist function:
   1.1 - Create async function (sendRequest)
   1.2 - Create const "res" await the fetching.
   1.3 - Create const "data" that contains the response.
   1.4 - Call the function (sendRequest).

2. src/components: Create a file (Notification.js)

3. Install extetion for the notifications:

3.1 - Google type:
https://mui.com/

3.2 - Copy the command

3.3 - paste the command in the terminal

4.  src/components/Notifications.js:
    4.1 - Import Alert ( lin 2).
    4.2 - Call the "Alert" inside the "div".

5.  src/App.js: Put the "Notifications" in the return. It also contains a "type" and a "message".

6.  src/store: Create another slice (ui). Pain in the ass. Explanation 1:20 hr tutorial video

7.  src/store/index.js: Add the ui-slice.

8.  src/components/Notifications.js: Do all the shit there
    8.1 - const dispatch = useDispatch();
    8.2 - const notification = useSelector(state => state.ui.notification);
    8.3 Create the function to handle the closing alert message  
     const handleClose = () => {
    dispatch(uiActions.showNotifications({
    open: false
    }))
    }
    8.4 EventHandler to close the alert message:

                    {notification.open && <Alert onClose={handleClose} severity={type}>{message}</Alert>}

8.5 Conditional rendering so the alert message will be only shown when the notification state exist
{notification.open && <Alert onClose={handleClose} severity={type}>{message}</Alert>}

9. src/App.js: Dispatch 3 actions:
   9.1 - Fist we need to create a dispatch and grab the state of notification as follow:
   const dispatch = useDispatch();
   const notification = useSelector(state => state.ui.notification);

9.2 Create the actions:

- Sending request. (lin 24 -28)
- Sent request successfully. (lin 36 -40)
- error. (lin 44 - 48)

  9.3 Conditional rendering so the alert message will be only shown when the notification state exist
  {notification && <Notifications type={notification.type} message={notification.message} />}

10. src/App.js: Get rid of the Alert message from the beginning
    10.1 - Create a variable out side the app function:
    let isFirstRender = true;

10.2- Inside the useEffect. Create the followed condiction:
if (isFirstRender) {
isFirstRender = false;
return;
}

N: So much shot to add the fucking notifications... already stired I hope I can just copy next time...
