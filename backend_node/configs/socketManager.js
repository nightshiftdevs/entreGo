let active = false;
let update = false;
let usersConnected = [];
let roomCurrent = null;
let otherUsers = [];

module.exports = function (socket) {

    console.log('New User');

    socket.on('joinRoom', (room) => {
        roomCurrent = room;
        console.log('JOINED ROOM',room);
        socket.join(room);
        socket.to(room).emit('success', true);
    });

    socket.on('load_init', (data) => {

        let currentUsers = usersConnected.filter(user => {
            return user.username !== socket.username
        });

        console.log('CURRENT', currentUsers);

        socket.emit('load_init', currentUsers);
    })

    // Add New User to Users Array
    socket.on('add user', (userProfile) => {
        console.log('llego este', userProfile);

        socket.username = userProfile.username;
        console.log('jugada socket', socket.username);

        let new_user = {
            username: userProfile.username,
            active: active,
            lat: 0,
            lng: 0,
            update: false,
            userType: userProfile.userType
        };

        usersConnected.push(new_user);

        let usersFiltered = usersConnected.reduce((acc, current) => {
            const x = acc.find(item => item.username === current.username);
            if (!x) {
                return acc.concat([current]);
            } else {
                return acc;
            }
        }, []);

        let new_count = usersFiltered.length;
        console.log('current users', new_count);

        usersConnected = usersFiltered;
        console.log(usersFiltered);
    });

    // New User sends coords and changes their profile
    socket.on('new_coords', data => {
        console.log('UPDATE', data);
        let checkuser = data.username;
        let result = usersConnected.map(obj => obj.username).indexOf(checkuser) >= 0;
        //UPDATE USER IF USER ALREADY EXITS
        /* socket.to(roomCurrent).emit('updatecoords', 'HOLA'); */

        if (result === true) {

            objIndex = usersConnected.findIndex((obj => obj.username == checkuser));
            usersConnected[objIndex].lat = data.new_lat;
            usersConnected[objIndex].lng = data.new_lng;
            usersConnected[objIndex].active = data.active;
            usersConnected[objIndex].userType = data.userType;
            usersConnected[objIndex].update = true;

            /* let to_send = {
                username: data.username,
                active: true,
                lat: data.new_lat,
                lng: data.new_lng,
                update: true,
                userType: data.userType
            }; */

            console.log(data.username + ' has just updated their location');
            var new_count = usersConnected.length;
            //SEND BACK UDPATED COORDS TO CLIENT  RELATED TO EXISTING USER
            /* socket.to(roomCurrent).emit('updatecoords', 'user updated'); */
            /* socket.broadcast.emit('updatecoords', to_send); */
            objIndex = usersConnected.findIndex((obj => obj.username == checkuser));
            usersConnected[objIndex].update = false;
        }
    });

    socket.on('disconnect', () => {

        console.log('USER HAS DISCONNECTED');

        for (let i = 0; i < usersConnected.length; i++)
            if (usersConnected[i].username === socket.username) {
                socket.broadcast.emit('remove_marker', {
                    username: usersConnected[i].username
                });
                usersConnected.splice(i, 1);
                break;
            }
        let new_count = usersConnected.length;
        console.log(new_count);
        console.log('remove marker');
    });

    socket.on('leave room', data => {
        console.log('leaving room');
        console.log(data);
        socket.leave(data.room)
    });

    console.log('current', usersConnected);
}



/*         let New_Details = {
            username: data.username,
            active: data.active,
            lat: data.new_lat,
            lng: data.new_lng,
            update: true,
            userType: data.userType
        }; */
