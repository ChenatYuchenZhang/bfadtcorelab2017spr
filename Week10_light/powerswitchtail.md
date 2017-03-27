# Tutorial for Power Switch Tail

### What is a Power Switch Tail
[Power Switch tail] (http://www.powerswitchtail.com/Pages/default.aspx) is A power cord that switches 120vac power directly from a microcontroller I/O pin (3-12vdc, 3-30ma).

### HARDWARE NEEDED
- Arduino (we use the Uno)
- PowerSwitch Tail II
- Three-wire cable or regular hookup wires. Any size wire #16 AWG or smaller may be used.
- USB Cable
- AC-powered lamp
- Small Screwdriver (for the PowerSwitch Tail screw terminals)

### SOFTWARE NEEDED
- Arduino

### STEP 1: CONNECTING THE POWER SWITCH TAIL TO ARDUINO
1. Connect POWER (red wire) to terminal 1: +in
2. Connect signal (green wire) to terminal 2: -in
- Connect GROUND (black wire) to terminal 3: Ground
3. Tighten the screws and verify the contacts firmly grip the wires.
4. Next you will connect the wires from the PowerSwitch Tail to the pins on the Ardunio board. 5. Connect POWER (wire from terminal 1: +in)  to 5V
6. Connect signal (wire from terminal 2: -in) to Analog 0 (A0)
7. Connect GROUND (wire from terminal 3: Ground) to GND
8. Plug the PowerSwitch Tail into the AC power source
9. Plug the AC-power lamp or any electrical device (15amps @ 120vac) that you would like to control into the PowerSwitch Tail receptacle.

### STEP 2: UPLOADING THE ARDUINO CODE
If you already have Arduino installed and have successfully run one or two examples before, then this is nothing new - just copy and paste the code below into your Arduino window and press "upload".
```
// control power
const int powerPin = A0;
const int ledPin = 13;

void setup() {
  //initiate serial communication:
  Serial.begin(9600);
  Serial.println(F("starting up"));

  pinMode(ledPin, OUTPUT);
  pinMode(powerPin, OUTPUT);

  digitalWrite(ledPin, LOW);
  digitalWrite(powerPin, HIGH);
}  

void loop() {

      //When powerPin, A0 is low the lamp is on
      digitalWrite(ledPin, HIGH);
      digitalWrite(powerPin, LOW);
      Serial.println(F("ON"));
      delay(5000);

      //When powerPin, A0 is high the lamp is off
      digitalWrite(ledPin, LOW);
      digitalWrite(powerPin, HIGH);
      Serial.println(F("OFF"));
      delay(5000);

}
```
### STEP 3 Plug in the lamp
Plug in the lamp to your power switch taill and then plug in the power switch tail to an outlet.
### Warning
Note that as this project involves dangerous voltages (110v or 230v), make sure that you never touch the project after it is plugged into an electrical socket.

### examples
1. [Capacitive Touch Holiday Light Control](https://learn.adafruit.com/capacitive-touch-holiday-light-control?view=allp)
2. [Power Switch Tail: Control any AC Electrical Device Remotely via Spacebrew](http://docs.spacebrew.cc/tutorials/2013/2/6/power-switch-tail-contorl-any-ac-electrical-device-remotely-via-spacebrew)
3. [Motion Sensing Night Light](http://learn.robotgeek.com/demo-code/109-motion-sensor-nightlight.html)

### Further Readings
1. [Alternating Current (AC) vs. Direct Current (DC)](https://learn.sparkfun.com/tutorials/alternating-current-ac-vs-direct-current-dc)
2. [How to power a project](https://learn.sparkfun.com/tutorials/how-to-power-a-project)

#Thought Starters
Could you incorporate an sensor to create an interesting interaction to control your electronic device?
- For example a [photoresistor](https://learn.sparkfun.com/tutorials/sik-experiment-guide-for-arduino---v32/all#experiment-6-reading-a-photoresistor)
- [Temperature Sensor](https://learn.sparkfun.com/tutorials/sik-experiment-guide-for-arduino---v32/all#experiment-7-reading-a-temperature-sensor)
- [Flex Sensor](https://learn.sparkfun.com/tutorials/sik-experiment-guide-for-arduino---v32/all#experiment-9-using-a-flex-sensor)
