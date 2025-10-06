const questions = [
  {
    "question": "261. What is the turning radius for the nose gear?",
    "options": ["8.0 ft", "7.0 ft", "6.0 ft", "5.0 ft"],
    "correct": 1
  },
  {
    "question": "262. What is the turning radius for the inside gear?",
    "options": ["2.0 ft", "0.5 ft", "1.0 ft", "1.5 ft"],
    "correct": 2
  },
  {
    "question": "263. What is the turning radius for the outside gear?",
    "options": ["10.1 ft", "8.1 ft", "9.1 ft", "7.1 ft"],
    "correct": 2
  },
  {
    "question": "264. How are the turning radii calculated?",
    "options": ["Using full power and no brakes", "Using both brakes and full power", "Using no brakes and no power", "Using one brake and partial power"],
    "correct": 3
  },
  {
    "question": "265. By how much may the actual turning radius vary?",
    "options": ["Up to 2 feet", "Up to 4 feet", "Up to 1 foot", "Up to 3 feet"],
    "correct": 3
  },
  {
    "question": "266. Is the airplane’s control system equipped with gust locks?",
    "options": ["No, it is not equipped with gust locks", "Gust locks are optional", "Yes, it is equipped with gust locks", "Only the trim system has gust locks"],
    "correct": 0
  },
  {
    "question": "267. What role do the trim spring cartridges play in the control system?",
    "options": ["They act as a gust damper without rigidly locking the position", "They rigidly lock the control position", "They disengage the control system", "They have no role in gust control"],
    "correct": 0
  },
  {
    "question": "268. What is the power capability of the trim spring cartridges?",
    "options": ["They have sufficient power to act as a gust damper", "They have no power to affect the control system", "They have insufficient power to act as a gust damper", "They can only rigidly lock the position"],
    "correct": 0
  },
  {
    "question": "269. What type of brakes do the main wheels have?",
    "options": ["Mechanically operated, dual-disc brakes", "Hydraulically operated, single-disc brakes", "Mechanically operated, single-disc brakes", "Hydraulically operated, dual-disc brakes"],
    "correct": 3
  },
  {
    "question": "270. How are the brakes on the main wheels activated?",
    "options": ["By hand levers at both pilot stations", "By floor mounted toe pedals at both pilot stations", "By a switch on the avionics system", "By a central pedal in the cockpit"],
    "correct": 1
  },
  {
    "question": "271. What does the parking brake mechanism do?",
    "options": ["It applies mechanical pressure to the wheels", "It locks the rudder pedals in place", "It disengages the brake system", "It holds induced hydraulic pressure on the disc brakes"],
    "correct": 3
  },
  {
    "question": "272. What components make up the brake system?",
    "options": ["A master cylinder and hydraulic fluid reservoir only", "A single master cylinder, hydraulic fluid reservoir, and disc brake assemblies", "A master cylinder for each rudder pedal, hydraulic fluid reservoir, parking brake valve, disc brake assemblies, temperature sensors, and hydraulic plumbing and wiring", "A parking brake valve, temperature sensors, and wiring only"],
    "correct": 2
  },
  {
    "question": "273. How is braking pressure initiated?",
    "options": ["By activating a switch on the avionics system", "By pressing a button on the control panel", "By pulling a lever near the pilot’s seat", "By depressing the top half of a rudder pedal (toe brake)"],
    "correct": 3
  },
  {
    "question": "274. How are the brakes plumbed for operation?",
    "options": ["Depressing the pilot’s toe brake applies both main wheel brakes", "Depressing the copilot’s toe brake has no effect", "Depressing either the pilot’s or copilot’s left or right toe brake applies the respective main wheel brake", "Depressing the pilot’s left toe brake applies the right main wheel brake"],
    "correct": 2
  },
  {
    "question": "275. What type of hydraulic fluid is used to service the brake system reservoir?",
    "options": ["MIL-PRF-87257", "MIL-PRF-23699", "MIL-PRF-5606", "MIL-PRF-83282"],
    "correct": 0
  },
  {
    "question": "276. What might indicate a brake system malfunction or impending brake failure?",
    "options": ["A gradual decrease in braking action, noisy or dragging brakes, soft or spongy pedals, excessive travel, and/or weak braking action", "A sudden increase in brake temperature", "A complete loss of hydraulic pressure with no warning", "Increased braking action after application"],
    "correct": 0
  },
  {
    "question": "277. What is the purpose of the temperature sensor in each brake assembly?",
    "options": ["To monitor the hydraulic fluid level", "To control the hydraulic fluid pressure", "To provide measured brake temperatures to the avionics system for caution and warning annunciation", "To adjust the brake pedal sensitivity"],
    "correct": 2
  },
  {
    "question": "278. How many alternators does the airplane’s electrical system have?",
    "options": ["Four alternators", "Three alternators", "Two alternators", "One alternator"],
    "correct": 2
  },
  {
    "question": "279. How many batteries does the airplane’s electrical system have?",
    "options": ["Three batteries", "Four batteries", "One battery", "Two batteries"],
    "correct": 3
  },
  {
    "question": "280. What is the voltage of the airplane’s electrical system?",
    "options": ["12 volts", "28 volts", "24 volts", "36 volts"],
    "correct": 1
  },
  {
    "question": "281. What type of current does the airplane’s electrical system use?",
    "options": ["Direct current (VDC)", "Hybrid current", "Alternating current (VAC)", "Variable current"],
    "correct": 0
  },
  {
    "question": "282. What is the design purpose of the airplane’s electrical system?",
    "options": ["To simplify the electrical system", "To eliminate all electrical system faults", "To increase the risk of electrical system faults", "To reduce the risk of electrical system faults"],
    "correct": 3
  },
  {
    "question": "283. What does the electrical system provide uninterrupted power for during normal operation?",
    "options": ["Only the lighting", "Only the avionics", "Only the flight instrumentation", "Avionics, flight instrumentation, lighting, and other electrically operated and controlled systems"],
    "correct": 3
  },
  {
    "question": "284. What is the voltage and grounding type of the airplane’s primary power system?",
    "options": ["24-VDC, negative-ground", "28-VDC, positive-ground", "28-VAC, positive-ground", "28-VDC, negative-ground"],
    "correct": 3
  },
  {
    "question": "285. What components make up the electrical power generation system?",
    "options": ["Two alternators and one battery", "One alternator, one battery, and a Master Control Unit", "Two alternators, a Master Control Unit, and two batteries", "Two batteries and a Master Control Unit"],
    "correct": 2
  },
  {
    "question": "286. Where is the Master Control Unit (MCU) mounted?",
    "options": ["In the cockpit", "On the left side of the firewall", "On the front of the engine", "On the right side of the firewall"],
    "correct": 1
  },
  {
    "question": "287. What is the purpose of the two batteries in the system?",
    "options": ["For emergency power only", "For lighting and avionics only", "For starting and electrical power storage", "For controlling the alternators"],
    "correct": 2
  },
  {
    "question": "288. What type of alternator is Alternator 1 (ALT 1), and where is it mounted?",
    "options": ["Belt-driven, 70-amp, mounted on the left front of the engine", "Gear-driven, 100-amp, mounted on the right front of the engine", "Gear-driven, 100-amp, mounted on the left front of the engine", "Belt-driven, 70-amp, mounted on the right front of the engine"],
    "correct": 2
  },
  {
    "question": "289. What type of alternator is Alternator 2 (ALT 2), and where is it mounted?",
    "options": ["Belt-driven, 70-amp, mounted on the left front of the engine", "Gear-driven, 70-amp, mounted on the left front of the engine", "Gear-driven, 100-amp, mounted on the right front of the engine", "Belt-driven, 100-amp, mounted on the right front of the engine"],
    "correct": 0
  },
  {
    "question": "290. What is the regulated voltage for Alternator 1 (ALT 1)?",
    "options": ["29.0 volts", "28.7 volts", "28.0 volts", "27.7 volts"],
    "correct": 2
  },
  {
    "question": "291. What is the regulated voltage for Alternator 2 (ALT 2)?",
    "options": ["28.7 volts", "27.7 volts", "28.0 volts", "29.0 volts"],
    "correct": 0
  },
  {
    "question": "292. Why should the batteries not be turned off in flight?",
    "options": ["The alternators are not self-exciting and require battery voltage for field excitation", "The batteries power the Master Control Unit directly", "The batteries are needed to regulate the alternator voltage", "The alternators are self-exciting and need no battery voltage"],
    "correct": 0
  },
  {
    "question": "293. A red Warning message is generated when the fuel flow is greater than 30 GPH. What triggers a red warning message for fuel flow?",
    "options": ["Fuel flow is greater than 30 GPH", "Fuel flow is greater than 25 GPH", "Fuel flow is less than 30 GPH", "Fuel flow is greater than 35 GPH"],
    "correct": 0
  },
  {
    "question": "294. What type of message is generated when the fuel flow exceeds 30 GPH?",
    "options": ["A green normal message", "An amber caution message", "A white advisory message", "A red warning message"],
    "correct": 3
  },
  {
    "question": "295. What type of stall warning system is the airplane equipped with?",
    "options": ["Mechanical stall warning system", "Electro-pneumatic stall warning system", "Visual stall warning system", "Hydraulic stall warning system"],
    "correct": 1
  },
  {
    "question": "296. What is the purpose of the stall warning system?",
    "options": ["To adjust the airplane’s speed automatically", "To activate the landing gear", "To prevent the airplane from taking off", "To provide audible warning of an approach to aerodynamic stall"],
    "correct": 3
  },
  {
    "question": "297. What components make up the stall warning system?",
    "options": ["An inlet in the leading edge of the right wing and a visual warning system", "An inlet in the leading edge of the left wing, a pressure switch, and the avionics system", "A pressure switch and the avionics system only", "An inlet in the leading edge of the right wing, a pressure switch, associated plumbing, and the avionics system aural warning system"],
    "correct": 3
  },
  {
    "question": "298. Where is the inlet for the stall warning system located?",
    "options": ["In the trailing edge of the right wing", "In the leading edge of the right wing", "In the leading edge of the left wing", "On the fuselage"],
    "correct": 2
  },
  {
    "question": "299. What type of warning does the avionics system provide as part of the stall warning system?",
    "options": ["Visual warning", "Aural warning", "No warning", "Tactile warning"],
    "correct": 1
  },
  {
    "question": "300. What type of emergency locator transmitter is the airplane equipped with?",
    "options": ["Artex ELT 500 121.5 MHz", "Artex ELT 1000 406 MHz", "Garmin ELT 406 MHz", "Artex ELT 1000 121.5 MHz"],
    "correct": 1
  },
  {
    "question": "301. What is the purpose of the ELT?",
    "options": ["To monitor aircraft speed", "To assist in navigation during flight", "To generate a signal to assist in search and rescue for missing aircraft", "To communicate with air traffic control"],
    "correct": 2
  },
  {
    "question": "302. What activates the ELT automatically?",
    "options": ["Manual activation by the pilot only", "A change of velocity exceeding 10 feet per second", "A change of velocity along its longitudinal axis exceeding 4 to 5 feet per second, or deployment of the Cirrus Airframe Parachute System (CAPS)", "Deployment of the landing gear"],
    "correct": 2
  },
  {
    "question": "303. What frequency does the ELT transmit VHF band audio sweeps at until the battery power is gone?",
    "options": ["406 MHz", "121.5 MHz", "440 MHz", "50 MHz"],
    "correct": 1
  },
  {
    "question": "304. What additional signal does the ELT transmit for the first 24 hours of operation?",
    "options": ["A 121.5 MHz signal lasting 440 milliseconds", "A 406 MHz signal at 50-second intervals lasting 440 milliseconds", "A 406 MHz signal every 440 milliseconds", "A 121.5 MHz signal every 50 seconds"],
    "correct": 1
  },
  {
    "question": "305. What information is included in the 406 MHz signal transmitted by the ELT?",
    "options": ["Pilot identification only", "Aircraft speed and altitude", "Battery status of the ELT", "Aircraft-specific information and GPS position data provided by the Garmin avionics"],
    "correct": 3
  },
  {
    "question": "306. Who maintains the database that references the transmitted ELT data?",
    "options": ["The national authority responsible for ELT registration", "The pilot of the aircraft", "The aircraft manufacturer", "The Garmin avionics company"],
    "correct": 0
  },
  {
    "question": "307. Where is the ELT transmitter installed?",
    "options": ["In the cockpit near the pilot", "On the left wing of the airplane", "Immediately behind the aft cabin bulkhead, slightly to the right of the airplane centerline", "In the baggage compartment center"],
    "correct": 2
  },
  {
    "question": "308. How can the ELT transmitter and antenna be accessed?",
    "options": ["Through the engine compartment", "Through the cockpit control panel", "Through the front landing gear compartment", "Through the avionics bay access panel along the aft portion of the RH fuselage or the lower aft center access panel of the baggage compartment"],
    "correct": 3
  },
  {
    "question": "309. What are the labels on the main transmitter control switch?",
    "options": ["“ON” – “ARM/OFF” – “TEST”", "“ON” – “OFF” – “ACTIVATE”", "“ARM” – “TEST” – “RESET”", "“ON” – “OFF” – “STANDBY”"],
    "correct": 0
  },
  {
    "question": "310. What position is the ELT transmitter in for normal operations?",
    "options": ["TEST", "ON", "OFF", "ARMED"],
    "correct": 3
  },
  {
    "question": "311. What indicates that the ELT is transmitting?",
    "options": ["A sound from the cockpit speakers", "A blue light on the control panel", "A green LED flashes", "A red LED annunciator flashes"],
    "correct": 3
  },
  {
    "question": "312. What powers the ELT transmitter?",
    "options": ["The aircraft’s main electrical system", "A solar-powered battery", "A single “AA” battery", "A battery pack consisting of two “D” cell lithium batteries"],
    "correct": 3
  },
];
