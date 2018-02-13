
var driver_trip_storage = window.localStorage;
localStorage.setItem('driver_has_trips', false);
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
		"Total Riders": 2,
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

localStorage.setItem('driver_all_trips', JSON.stringify(all_trips));
