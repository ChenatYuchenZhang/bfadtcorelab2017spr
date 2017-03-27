# Tutorial for RGB LED

### What is a RGB led?
RGB (Red-Green-Blue) LEDs are actually three LEDs in one! But that doesn’t mean it can only make three colors. Because red, green, and blue are the additive primary colors, you can control the intensity of each to create every color of the rainbow. Most RGB LEDs have four pins: one for each color and a common pin. On some, the common pin is the anode, and on others, it’s the cathode. (source from [Sparkfun](https://learn.sparkfun.com/tutorials/light-emitting-diodes-leds?_ga=1.197623468.2032224429.1485120996))


### Parts Needed

You will need the following parts:
- 1x Breadboard
- 1x RedBoard or Arduino Uno
- 1x Diffuse RGB LED 10mm 1
- 3x 270 Ω Resistors (red, purple, brown stripes)
- 5x Jumper Wires

### Breadboard Layout
The common negative connection of the LED package is the second pin from the flat side of the LED package. It is also the longest of the four leads. This lead will be connected to ground.

Each LED inside the package requires its own 270Ω resistor to prevent too much current flowing through it. The three positive leads of the LEDs (one red, one green and one blue) are connected to Arduino output pins using these resistors.

[LED]: https://github.com/ChenatYuchenZhang/bfadtcorelab2017spr/tree/master/Week10_light/img/learn_arduino_rdb_led_cct_symbol.jpg "RGB LED"

[Wiring]:
https://github.com/ChenatYuchenZhang/bfadtcorelab2017spr/tree/master/Week10_light/img/learn_arduino_fritzing.jpg "RGB LED Wiring"

### Arduino Code
```
/*
Adafruit Arduino - Lesson 3. RGB LED
*/

int redPin = 11;
int greenPin = 10;
int bluePin = 9;

//uncomment this line if using a Common Anode LED
//#define COMMON_ANODE

void setup()
{
  pinMode(redPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  pinMode(bluePin, OUTPUT);  
}

void loop()
{
  setColor(255, 0, 0);  // red
  delay(1000);
  setColor(0, 255, 0);  // green
  delay(1000);
  setColor(0, 0, 255);  // blue
  delay(1000);
  setColor(255, 255, 0);  // yellow
  delay(1000);  
  setColor(80, 0, 80);  // purple
  delay(1000);
  setColor(0, 255, 255);  // aqua
  delay(1000);
}

void setColor(int red, int green, int blue)
{
  #ifdef COMMON_ANODE
    red = 255 - red;
    green = 255 - green;
    blue = 255 - blue;
  #endif
  analogWrite(redPin, red);
  analogWrite(greenPin, green);
  analogWrite(bluePin, blue);  
}
```

### Further Readings
- [Adafruit RGB LED](https://learn.adafruit.com/adafruit-arduino-lesson-3-rgb-leds)
- [Light](https://learn.sparkfun.com/tutorials/light)
- [Light-Emitting Diodes (LEDs)](https://learn.sparkfun.com/tutorials/light-emitting-diodes-leds?_ga=1.197623468.2032224429.1485120996)
- [Interactive hanging led array](https://learn.sparkfun.com/tutorials/interactive-hanging-led-array)
