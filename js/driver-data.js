var driver_trip_storage = window.localStorage;
localStorage.setItem('driver_has_trips', true);

var user_info = {
	"Name": "John Doe",
	"Preferred Area": ["San Diego-Los Angelos"]
};

var user_name = user_info['Name'].split(" ")[0];


var all_trips = [ 
	{
		"Name": "Giacomo Guilizzoni",
		"Total Riders": 3,
		"Pick-up": "LAX",
		"Destination": "La Jolla",
		"Flight Number": "MU538",
		"Arrival Time": "2018-01-19 15:03",
		"Nickname": "Peldi",
		"Status": "Driver Arrival"
	}, 
	{
		"Name": "Marco Botton",
		"Total Riders": 2,
		"Pick-up": "SAN",
		"Destination": "Irvine",
		"Flight Number": "AA1270",
		"Arrival Time": "2018-01-25 05:25",
		"Nickname": "Mark",
		"Status": "Confirmed"
	}, 
	{
		"Name": "Mariah Maclachlan",
		"Total Riders": 1,
		"Pick-up": "LAX",
		"Destination": "La Jolla",
		"Flight Number": "XZ3265",
		"Arrival Time": "2018-01-26 09:33",
		"Nickname": "Patata",
		"Status": "Confirmed"
	}, 
	{
		"Name": "Valerie Liberty",
		"Total Riders": 2,
		"Pick-up": "LAX",
		"Destination": "Irvine",
		"Flight Number": "SQ972",
		"Arrival Time": "2017-12-01 23:42",
		"Nickname": "Val",
		"Status": "Confirmed"
	},
	{
		"Name": "Person1",
		"Total Riders": 3,
		"Pick-up": "LAX",
		"Destination": "La Jolla",
		"Flight Number": "MU538",
		"Arrival Time": "2017-12-19 15:03",
		"Nickname": "1",
		"Status": "Finished"
	}, 
	{
		"Name": "Person2",
		"Total Riders": 2,
		"Pick-up": "SAN",
		"Destination": "Irvine",
		"Flight Number": "AA1270",
		"Arrival Time": "2017-12-25 05:25",
		"Nickname": "2",
		"Status": "Finished"
	}, 
	{
		"Name": "Person3",
		"Total Riders": 2,
		"Pick-up": "LAX",
		"Destination": "La Jolla",
		"Flight Number": "XZ3265",
		"Arrival Time": "2017-12-26 09:33",
		"Nickname": "3",
		"Status": "Finished"
	}, 
	{
		"Name": "Person4",
		"Total Riders": 2,
		"Pick-up": "LAX",
		"Destination": "Irvine",
		"Flight Number": "SQ972",
		"Arrival Time": "2017-12-01 23:42",
		"Nickname": "4",
		"Status": "Finished"
	}
];

var available_trips = [ 
	{
		"Name": "Giacomo Guilizzoni",
		"Total Riders": 3,
		"Pick-up": "LAX",
		"Destination": "La Jolla",
		"Flight Number": "MU538",
		"Arrival Time": "2018-01-19 15:03",
		"Nickname": "Peldi",
		"Status": "Driver Arrival"
	}, 
	{
		"Name": "Marco Botton",
		"Total Riders": 2,
		"Pick-up": "SAN",
		"Destination": "Irvine",
		"Flight Number": "AA1270",
		"Arrival Time": "2018-01-25 05:25",
		"Nickname": "Mark",
		"Status": "Confirmed"
	}, 
	{
		"Name": "Mariah Maclachlan",
		"Total Riders": 1,
		"Pick-up": "LAX",
		"Destination": "La Jolla",
		"Flight Number": "XZ3265",
		"Arrival Time": "2018-01-26 09:33",
		"Nickname": "Patata",
		"Status": "Confirmed"
	}, 
	{
		"Name": "Valerie Liberty",
		"Total Riders": 2,
		"Pick-up": "LAX",
		"Destination": "Irvine",
		"Flight Number": "SQ972",
		"Arrival Time": "2018-02-01 23:42",
		"Nickname": "Val",
		"Status": "Confirmed"
	}
];

var selected_trip = [{
		"Name": "Marco Botton",
		"Total Riders": 2,
		"Pick-up": "SAN",
		"Destination": "Irvine",
		"Flight Number": "AA1270",
		"Arrival Time": "2018-01-25 05:25",
		"Nickname": "Mark",
		"Status": "Confirmed"
	}];

var latest_pickup = {
		"Name": "Marco Botton",
		"Total Riders": 2,
		"Pick-up": "SAN",
		"Destination": "Irvine",
		"Flight Number": "AA1270",
		"Arrival Time": "2018-01-25 05:25",
		"Nickname": "Mark",
		"Status": "Confirmed"
	};

var trip_progress = [];


localStorage.setItem('driver_all_trips', JSON.stringify(all_trips));
localStorage.setItem('driver_available_trips', JSON.stringify(available_trips));